
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import Sidebar from "../SideBar/sideBar";
import { toast } from "react-toastify";
import { CircularProgress, Modal, Popover } from "@mui/material";
const rightPage = require("../../../images/rightPage.png");
const leftPage = require("../../../images/leftPage.png");

async function fetchBrand(
  user: any,
  setRewards: any,
  setRewardsFlag: any,
  RewardStatus: string
) {
  const fetchData = async () => {
    const { data: Rewards } = await axios({
      url: `${process.env.REACT_APP_SERVER_ENDPOINT}/reward/list?advertiserId=${user.id}&status=${RewardStatus}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setRewards(Rewards?.data?.reverse());
    if (Rewards?.data !== undefined) {
      setRewardsFlag(true);
    }
  };
  fetchData();
}

export function BrandList() {
    const [Rewards, setRewards] = useState([]);
    const [RewardsFlag, setRewardsFlag] = useState(false);
    const user = useStoreState((state) => state.user);
    const [pageCount, setPageCount] = useState(50);
    const [pageIndex, setPageIndex] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
      null
    );
  
    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //   setAnchorEl(event.currentTarget);
    // };
  
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };
  
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    useEffect(() => {
      fetchBrand(user, setRewards, setRewardsFlag, "Active");
    }, []);
  
    const navigate = useNavigate();
  
    return (
      <div className="flex w-full bg-neutral-100">
        <Sidebar />
        <div className="w-full flex flex-col mb-8">
          <div className="m-4 py-5 pl-3 font-semibold text-5xl bg-white rounded">
            Brand
          </div>
          <div className="w-full flex justify-center items-center">
            {Rewards && RewardsFlag === false && (
              <div className="w-full flex justify-center">Loading</div>
            )}
            {!Rewards && RewardsFlag === false && (
              <div className="mt-2 w-full flex justify-center">
                {" "}
                No Data Found
              </div>
            )}
            {Rewards && RewardsFlag === true && (
              <div className="w-full flex flex-col justify-center items-center px-4">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white h-14 border border-sm">
                      <th className="text-left font-semibold pl-6"> Title</th>
                      <th className="text-left font-semibold">Category</th>
                      <th className="text-left font-semibold">
                        Start Date - End Date
                      </th>  
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="w-full border">
                    {Rewards
                      ?.slice(
                        pageCount * pageIndex,
                        pageCount * pageIndex + pageCount
                      )
                      .map((Reward: any, index: number) => {
                        return (
                          <tr
                            key={index}
                            className="bg-white text-center px-5 h-14 border-b w-full cursor-pointer hover:bg-gray-100"
                          >
                            <td
                              className="pl-4"
                              onClick={() => {
                                navigate(`/active-Rewards/${Reward.rewardId}`,{state:{reward:Reward}});
                              }}
                            >
                              <div className="p-3">
                                <img
                                  className="w-[200px] h-[140px]"
                                  src={Reward?.creative}
                                />
                                <div className="mt-2 text-start font-semibold">
                                  {Reward?.offerTitle}
                                </div>
                              </div>
                            </td>
  
                            <td
                              className="pl-1 text-left"
                              onClick={() => {
                                navigate(`/active-Rewards/${Reward.rewardId}`,{state:{reward:Reward}});
                              }}
                            >
                              {Reward?.milestone}
                            </td>
                            <td
                              className="pl-1 text-left"
                              onClick={() => {
                                navigate(`/active-Rewards/${Reward.rewardId}`,{state:{reward:Reward}});
                              }}
                            >
                              {`${new Date(
                                Reward?.startDate
                              ).toDateString()} - `}{" "}
                              {`${new Date(Reward?.endDate).toDateString()}`}
                            </td>
  
                            
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                <div className="w-full flex justify-end mt-4 pr-5">
                  <img
                    src={leftPage}
                    className="w-5 h-5"
                    onClick={() => {
                      if (pageIndex > 0) {
                        setPageIndex((pageIndex) => (pageIndex = pageIndex - 1));
                      }
                    }}
                  />
  
                  <div className="flex mx-1 items-center text-xs">{`${
                    pageCount * pageIndex + 1
                  } - ${
                    pageIndex * pageCount + pageCount < Rewards?.length
                      ? pageIndex * pageCount + pageCount
                      : Rewards?.length
                  } of ${Rewards?.length}`}</div>
                  <img
                    src={rightPage}
                    className="w-[19px] h-[19px]"
                    onClick={() => {
                      if (pageIndex < Rewards?.length / pageCount - 1) {
                        setPageIndex((pageIndex) => (pageIndex = pageIndex + 1));
                      }
                    }}
                  />
                </div>
                {/* <div className="mt-4 w-full justify-start mb-10">
                  <button className="w-24 bg-gray-500 h-8 text-white rounded-[20px] hover:bg-gray-400">
                    <Link to={"/dashboard"}>Back</Link>
                  </button>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }