import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import Sidebar from "../SideBar/sideBar";
import { toast } from "react-toastify";
import { CircularProgress, Modal, Popover } from "@mui/material";
const dustbin = require("../../../images/trash.png");
const pauseIcon = require("../../../images/videoPause.png");
const stopIcon = require("../../../images/playIcon.png");
const loader = require("../../../images/loader.gif");
const rightPage = require("../../../images/rightPage.png");
const leftPage = require("../../../images/leftPage.png");

async function activeupdateStatus(
  values: any,
  user: any,
  statusType: string,
  setSavingLoader: any,
  setRewards: any,
  Rewards: any,
  index: number
) {
  const { data: Reward } = await axios({
    url: `${process.env.REACT_APP_SERVER_ENDPOINT}/reward/update-status`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    data: {
      advertiserId: values?.advertiserId,
      rewardId: values?.rewardId,
      status: statusType,
    },
  });

  if (Reward && Reward.status == "success") {
    toast.success("Status Updated !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setSavingLoader(false);
    let filteredReward = Rewards.filter((val: any, idx: number) => {
      return idx !== index;
    });
    if (filteredReward) {
      setRewards(filteredReward);
    }
  } else {
    setSavingLoader(false);
    toast.error("Something went wrong !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    // setSavingLoader(false)
  }
}

async function fetchDraft_ActiveData(
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

function DraftRewardList() {
  const [Rewards, setRewards] = useState([]);
  const [RewardsFlag, setRewardsFlag] = useState(false);
  const user = useStoreState((state) => state.user);
  const [pageCount, setPageCount] = useState(50);
  const [pageIndex, setPageIndex] = useState(0);
  const [showDeleteIcon, setShowDeleteIcon] = useState("");
  const [savingLoader, setSavingLoader] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    fetchDraft_ActiveData(user, setRewards, setRewardsFlag, "Draft");
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex w-full bg-neutral-100">
      <Sidebar />
      <div className="w-full flex flex-col mb-8">
        <div className="m-4 py-5 pl-3 font-semibold text-5xl bg-white rounded">
          Draft
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
                    <th className="text-left font-semibold pl-6">Title</th>
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
                          onMouseEnter={() => {
                            setShowDeleteIcon(Reward?.id);
                          }}
                          onMouseLeave={() => {
                            setShowDeleteIcon("");
                          }}
                        >
                         <td
                            className="pl-4"
                            onClick={() => {
                              navigate(`/draft-Rewards/${Reward.rewardId}`,{state:{reward:Reward}});
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
                              navigate(`/draft-Rewards/${Reward.rewardId}`,{state:{reward:Reward}});
                            }}
                          >
                            {Reward?.milestone}
                          </td>
                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/draft-Rewards/${Reward.rewardId}`,{state:{reward:Reward}});
                            }}
                          >
                            {`${new Date(
                              Reward?.startDate
                            ).toDateString()} - `}{" "}
                            {`${new Date(Reward?.endDate).toDateString()}`}
                          </td>

                          <td className="flex h-7 items-center pr-10">
                            {showDeleteIcon === Reward?.id && (
                              <div className="flex justify-center items-center absolute pt-[160px] pr-10">
                                <img
                                  src={
                                    savingLoader === false ? stopIcon : loader
                                  }
                                  className="w-5 h-5 mx-2 "
                                  onClick={(e: any) => {
                                    handleClick(e);
                                  }}
                                />
                                <Modal
                                  id={id}
                                  open={open}
                                  onClose={handleClose}
                                  className="w-full flex justify-center items-center"
                                >
                                  <div className="px-5 h-[150px] flex flex-col items-center justify-center p-4 bg-white rounded">
                                    <div className="text-sm">
                                      Do you want to chage the Reward status ?
                                    </div>
                                    <div className="mt-1 flex justify-center">
                                      <div className="w-full flex justify-center mt-3">
                                        <button
                                          className="px-4 w-24 bg-green-500 h-7 text-white rounded-[20px] hover:bg-green-400 ml-3"
                                          onClick={(e: any) => {
                                            setSavingLoader(true);
                                            activeupdateStatus(
                                              Reward,
                                              user,
                                              "Active",
                                              setSavingLoader,
                                              setRewards,
                                              Rewards,
                                              index
                                            );
                                            handleClose();
                                          }}
                                        >
                                          {savingLoader === true
                                            ? "Saving..."
                                            : "Yes"}
                                        </button>
                                        <button
                                          className="px-4 w-24 bg-orange-500 h-7 text-white rounded-[20px] hover:bg-orange-400 ml-3"
                                          onClick={handleClose}
                                        >
                                          No
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </Modal>

                                {/* <img src={dustbin} className="w-6 h-6 mx-2 " /> */}
                              </div>
                            )}
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

export default DraftRewardList;

export function ActivevatedRewardList() {
  const [Rewards, setRewards] = useState([]);
  const [RewardsFlag, setRewardsFlag] = useState(false);
  const user = useStoreState((state) => state.user);
  const [pageCount, setPageCount] = useState(50);
  const [pageIndex, setPageIndex] = useState(0);
  const [showDeleteIcon, setShowDeleteIcon] = useState("");
  const [savingLoader, setSavingLoader] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  useEffect(() => {
    fetchDraft_ActiveData(user, setRewards, setRewardsFlag, "Active");
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex w-full bg-neutral-100">
      <Sidebar />
      <div className="w-full flex flex-col mb-8">
        <div className="m-4 py-5 pl-3 font-semibold text-5xl bg-white rounded">
          Active
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
                          onMouseEnter={() => {
                            setShowDeleteIcon(Reward?.id);
                          }}
                          onMouseLeave={() => {
                            setShowDeleteIcon("");
                          }}
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

                          <td className="flex h-7 items-center pr-10">
                            {showDeleteIcon === Reward?.id && (
                              <div className="flex justify-center items-center absolute pt-[160px] pr-10">
                                <img
                                  src={
                                    savingLoader === false ? pauseIcon : loader
                                  }
                                  className="w-5 h-5 mx-2"
                                  onClick={(e: any) => {
                                    handleClick(e);
                                  }}
                                />
                                <Modal
                                  id={id}
                                  open={open}
                                  onClose={handleClose}
                                  className="w-full flex justify-center items-center"
                                >
                                  <div className="px-5 h-[150px] flex flex-col items-center justify-center p-4 bg-white rounded">
                                    <div className="text-sm">
                                      Do you want to change the Reward status
                                      ?
                                    </div>
                                    <div className="mt-1 flex justify-center">
                                      <div className="w-full flex justify-center mt-3">
                                        <button
                                          className="px-4 w-24 bg-green-500 h-7 text-white rounded-[20px] hover:bg-green-400 ml-3"
                                          onClick={(e: any) => {
                                            setSavingLoader(true);
                                            activeupdateStatus(
                                              Reward,
                                              user,
                                              "Draft",
                                              setSavingLoader,
                                              setRewards,
                                              Rewards,
                                              index
                                            );
                                            handleClose();
                                          }}
                                        >
                                          {savingLoader === true
                                            ? "Saving..."
                                            : "Yes"}
                                        </button>
                                        <button
                                          className="px-4 w-24 bg-orange-500 h-7 text-white rounded-[20px] hover:bg-orange-400 ml-3"
                                          onClick={handleClose}
                                        >
                                          No
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </Modal>
                                {/* <img src={dustbin} className="w-6 h-6 mx-2 " /> */}
                              </div>
                            )}
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
