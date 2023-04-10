import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import Sidebar from "./sideBar";
const dustbin = require("../../../images/dustbin.png");

function DraftCampaign() {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsFlag, setCampaignsFlag] = useState(false);
  const user = useStoreState((state) => state.user);
  const [pageCount, setPageCount] = useState(50);
  const [pageIndex, setPageIndex] = useState(0);
  const [showDeleteIcon, setShowDeleteIcon] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data: campaigns } = await axios({
        url: `${process.env.REACT_APP_SERVER_ENDPOINT}/campaign/list?advertiserId=${user.id}&status=Draft`,
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

  const navigate = useNavigate();

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
          {!campaigns && campaignsFlag === true &&(
            <div className="mt-2 w-full flex justify-center"> No Data Found</div>
          )}
          {campaigns && campaignsFlag === true && (
            <div className="w-full flex flex-col justify-center items-center px-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-white h-14 border border-sm">
                    <th></th>
                    <th className="text-left font-semibold">Campaign Title</th>
                    <th className="text-left font-semibold">
                      Campaign Category
                    </th>
                    <th className="text-left font-semibold">
                      Campaign Start Date
                    </th>
                    <th className="text-left font-semibold">
                      Campaign End Date
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="w-full border">
                  {campaigns
                    ?.slice(
                      pageCount * pageIndex,
                      pageCount * pageIndex + pageCount
                    )
                    .map((campaign: any, index: number) => {
                      return (
                        <tr
                          key={index}
                          className="bg-white text-center px-5 h-14 border-b w-full cursor-pointer hover:bg-gray-100"
                          onMouseEnter={() => {
                            setShowDeleteIcon(campaign?.id);
                          }}
                          onMouseLeave={() => {
                            setShowDeleteIcon("");
                          }}
                        >
                          <td
                            className="pl-4"
                            onClick={() => {
                              navigate(`/active-campaigns/${campaign.id}`);
                            }}
                          >
                            <img
                              className="w-7 h-7"
                              src={
                                campaign?.adImage[0]
                              }
                            />
                          </td>
                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/active-campaigns/${campaign.id}`);
                            }}
                          >
                            {campaign?.campaignName}
                          </td>
                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/active-campaigns/${campaign.id}`);
                            }}
                          >
                            {campaign?.targetCategory}
                          </td>
                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/active-campaigns/${campaign.id}`);
                            }}
                          >{`${
                            new Date(campaign?.adStartDate)
                              .toString()
                              .split("GMT")[0]
                          }`}</td>
                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/active-campaigns/${campaign.id}`);
                            }}
                          >{`${
                            new Date(campaign?.adEndDate)
                              .toString()
                              .split("GMT")[0]
                          }`}</td>
                          <td className="flex h-7 items-center pr-10">
                            {showDeleteIcon === campaign?.id && (
                              <div>
                                <img
                                  src={dustbin}
                                  className="w-5 h-5 absolute"
                                />
                              </div>
                            )}
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
                    if (pageIndex < campaigns?.length / pageCount - 1) {
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


export function ActivevatedCampaign() {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsFlag, setCampaignsFlag] = useState(false);
  const user = useStoreState((state) => state.user);
  const [pageCount, setPageCount] = useState(50);
  const [pageIndex, setPageIndex] = useState(0);
  const [showDeleteIcon, setShowDeleteIcon] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data: campaigns } = await axios({
        url: `${process.env.REACT_APP_SERVER_ENDPOINT}/campaign/list?advertiserId=${user.id}&status=Active`,
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

  const navigate = useNavigate();

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
          {!campaigns && campaignsFlag === true &&(
            <div className="mt-2 w-full flex justify-center"> No Data Found</div>
          )}
          {campaigns && campaignsFlag === true && (
            <div className="w-full flex flex-col justify-center items-center px-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-white h-14 border border-sm">
                    <th></th>
                    <th className="text-left font-semibold">Campaign Title</th>
                    <th className="text-left font-semibold">
                      Campaign Category
                    </th>
                    <th className="text-left font-semibold">
                      Campaign Start Date
                    </th>
                    <th className="text-left font-semibold">
                      Campaign End Date
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="w-full border">
                  {campaigns
                    ?.slice(
                      pageCount * pageIndex,
                      pageCount * pageIndex + pageCount
                    )
                    .map((campaign: any, index: number) => {
                      return (
                        <tr
                          key={index}
                          className="bg-white text-center px-5 h-14 border-b w-full cursor-pointer hover:bg-gray-100"
                          onMouseEnter={() => {
                            setShowDeleteIcon(campaign?.id);
                          }}
                          onMouseLeave={() => {
                            setShowDeleteIcon("");
                          }}
                        >
                          <td
                            className="pl-4"
                            onClick={() => {
                              navigate(`/active-campaigns/${campaign.id}`);
                            }}
                          >
                            <img
                              className="w-7 h-7"
                              src={
                                campaign?.adImage[0]
                              }
                            />
                          </td>
                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/active-campaigns/${campaign.id}`);
                            }}
                          >
                            {campaign?.campaignName}
                          </td>
                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/active-campaigns/${campaign.id}`);
                            }}
                          >
                            {campaign?.targetCategory}
                          </td>
                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/active-campaigns/${campaign.id}`);
                            }}
                          >{`${
                            new Date(campaign?.adStartDate)
                              .toString()
                              .split("GMT")[0]
                          }`}</td>
                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/active-campaigns/${campaign.id}`);
                            }}
                          >{`${
                            new Date(campaign?.adEndDate)
                              .toString()
                              .split("GMT")[0]
                          }`}</td>
                          <td className="flex h-7 items-center pr-10">
                            {showDeleteIcon === campaign?.id && (
                              <div>
                                <img
                                  src={dustbin}
                                  className="w-5 h-5 absolute"
                                />
                              </div>
                            )}
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
                    if (pageIndex < campaigns?.length / pageCount - 1) {
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