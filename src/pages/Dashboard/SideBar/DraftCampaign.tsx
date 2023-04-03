import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import Sidebar from "./sideBar";
const desktopIcon = require("../../../images/desktopIcon.png");

function DraftCampaign() {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsFlag, setCampaignsFlag] = useState(false);
  const user = useStoreState((state) => state.user);
  const [pageCount, setPageCount] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data: campaigns } = await axios({
        url: `${process.env.REACT_APP_SERVER_ENDPOINT}/campaign/list?advertiserId=${user.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setCampaigns(campaigns?.data);
      setCampaignsFlag(true);
    };
    fetchData();
  }, []);

  return (
    <div className="flex w-full bg-neutral-100">
      <Sidebar />
      <div className="w-full flex flex-col">
        <div className="m-4 py-5 pl-3 font-semibold text-lg bg-white rounded">
          Draft
        </div>
        <div className="w-full flex justify-center items-center">
          {campaignsFlag === false && (
            <div className="w-full flex justify-center">Loading</div>
          )}
          {campaignsFlag === true && (
            <div className="w-full flex flex-col justify-center items-center px-4">
              <table className="w-full">
                <tbody className="w-full border">
                  {campaigns
                    .slice(
                      pageCount * pageIndex,
                      pageCount * pageIndex + pageCount
                    )
                    .map((campaign: any, index: number) => {
                      return (
                        <tr
                          key={index}
                          className="bg-white text-center px-5 h-14 border-b w-full"
                        >
                          <td className="pl-6 text-left">
                            {campaign?.campaignName}
                          </td>
                          <td className="pl-6 text-left">
                            {"This is Drafted Campaign"}
                          </td>
                          <td className="pl-6 text-left">{`${new Date()}`}</td>
                          <td className="flex h-14 items-center">
                            <span className="mr-3 cursor-pointer flex items-center justify-end">
                              <NavLink to={`/active-campaigns/${campaign.id}`}>
                                {" "}
                                <img src={desktopIcon} className="w-6 h-5" />
                              </NavLink>
                            </span>
                            <span className="mr-8 cursor-pointer text-blue-600">
                              Campaign
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <div className="w-full flex justify-end mt-4 pr-5">
                <div
                  className="h-5 mx-3 w-5 rounded-full bg-blue-500 cursor-pointer text-center font-bold flex items-center justify-center"
                  onClick={() => {
                    if (pageIndex > 0) {
                      setPageIndex((pageIndex) => (pageIndex = pageIndex - 1));
                    }
                  }}
                >
                  {"<"}
                </div>
                <div className="flex mx-1 items-center text-xs">{`${
                  pageCount * pageIndex + 1
                } - ${
                  pageIndex * pageCount + pageCount < campaigns?.length
                    ? pageIndex * pageCount + pageCount
                    : campaigns?.length
                } of ${campaigns?.length}`}</div>
                <div
                  className="h-5 mx-3 w-5 rounded-full bg-blue-500 cursor-pointer text-center font-bold flex items-center justify-center"
                  onClick={() => {
                    if (pageIndex < campaigns?.length / 10 - 1) {
                      setPageIndex((pageIndex) => (pageIndex = pageIndex + 1));
                    }
                  }}
                >
                  {">"}
                </div>
              </div>
              <div className="mt-4 w-full justify-start mb-10">
                <button className="w-16 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400">
                  <Link to={"/dashboard"}>Back</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DraftCampaign;
