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
  setCampaigns: any,
  campaigns: any,
  index: number
) {
  const { data: campaign } = await axios({
    url: `${process.env.REACT_APP_SERVER_ENDPOINT}/campaign/update-status`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    data: {
      advertiserId: values?.advertiserId,
      campaignId: values?.id,
      status: statusType,
    },
  });

  if (campaign && campaign.status == "success") {
    toast.success("Status Updated !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setSavingLoader(false);
    let filteredCampaign = campaigns.filter((val: any, idx: number) => {
      return idx !== index;
    });
    if (filteredCampaign) {
      setCampaigns(filteredCampaign);
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
  setCampaigns: any,
  setCampaignsFlag: any,
  campaignStatus: string
) {
  const fetchData = async () => {
    const { data: campaigns } = await axios({
      url: `${process.env.REACT_APP_SERVER_ENDPOINT}/campaign/list?advertiserId=${user.id}&status=${campaignStatus}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setCampaigns(campaigns?.data?.reverse());
    if (campaigns?.data !== undefined) {
      setCampaignsFlag(true);
    }
  };
  fetchData();
}

function DraftCampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsFlag, setCampaignsFlag] = useState(false);
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
    fetchDraft_ActiveData(user, setCampaigns, setCampaignsFlag, "Draft");
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
          {campaigns && campaignsFlag === false && (
            <div className="w-full flex justify-center">Loading</div>
          )}
          {!campaigns && campaignsFlag === false && (
            <div className="mt-2 w-full flex justify-center">
              {" "}
              No Data Found
            </div>
          )}

          {campaigns && campaignsFlag === true && (
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
                              navigate(`/draft-campaigns/${campaign.id}`);
                            }}
                          >
                            <div className="p-3">
                              <img
                                className="w-[200px] h-[140px]"
                                src={campaign?.adImage[0]}
                              />
                              <div className="mt-2 text-start font-semibold">
                                {campaign?.campaignName}
                              </div>
                            </div>
                          </td>

                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/draft-campaigns/${campaign.id}`);
                            }}
                          >
                            {campaign?.targetCategory}
                          </td>
                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/draft-campaigns/${campaign.id}`);
                            }}
                          >
                            {`${new Date(
                              campaign?.adStartDate
                            ).toDateString()} - `}{" "}
                            {`${new Date(campaign?.adEndDate).toDateString()}`}
                          </td>

                          <td className="flex h-7 items-center pr-10">
                            {showDeleteIcon === campaign?.id && (
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
                                      Do you want to chage the campaign status ?
                                    </div>
                                    <div className="mt-1 flex justify-center">
                                      <div className="w-full flex justify-center mt-3">
                                        <button
                                          className="px-4 w-24 bg-green-500 h-7 text-white rounded-[20px] hover:bg-green-400 ml-3"
                                          onClick={(e: any) => {
                                            setSavingLoader(true);
                                            activeupdateStatus(
                                              campaign,
                                              user,
                                              "Active",
                                              setSavingLoader,
                                              setCampaigns,
                                              campaigns,
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
                  pageIndex * pageCount + pageCount < campaigns?.length
                    ? pageIndex * pageCount + pageCount
                    : campaigns?.length
                } of ${campaigns?.length}`}</div>
                <img
                  src={rightPage}
                  className="w-[19px] h-[19px]"
                  onClick={() => {
                    if (pageIndex < campaigns?.length / pageCount - 1) {
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

export default DraftCampaignList;

export function ActivevatedCampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsFlag, setCampaignsFlag] = useState(false);
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
    fetchDraft_ActiveData(user, setCampaigns, setCampaignsFlag, "Active");
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
          {campaigns && campaignsFlag === false && (
            <div className="w-full flex justify-center">Loading</div>
          )}
          {!campaigns && campaignsFlag === false && (
            <div className="mt-2 w-full flex justify-center">
              {" "}
              No Data Found
            </div>
          )}
          {campaigns && campaignsFlag === true && (
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
                            <div className="p-3">
                              <img
                                className="w-[200px] h-[140px]"
                                src={campaign?.adImage[0]}
                              />
                              <div className="mt-2 text-start font-semibold">
                                {campaign?.campaignName}
                              </div>
                            </div>
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
                          >
                            {`${new Date(
                              campaign?.adStartDate
                            ).toDateString()} - `}{" "}
                            {`${new Date(campaign?.adEndDate).toDateString()}`}
                          </td>

                          <td className="flex h-7 items-center pr-10">
                            {showDeleteIcon === campaign?.id && (
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
                                      Do you want to change the campaign status
                                      ?
                                    </div>
                                    <div className="mt-1 flex justify-center">
                                      <div className="w-full flex justify-center mt-3">
                                        <button
                                          className="px-4 w-24 bg-green-500 h-7 text-white rounded-[20px] hover:bg-green-400 ml-3"
                                          onClick={(e: any) => {
                                            setSavingLoader(true);
                                            activeupdateStatus(
                                              campaign,
                                              user,
                                              "Draft",
                                              setSavingLoader,
                                              setCampaigns,
                                              campaigns,
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
                  pageIndex * pageCount + pageCount < campaigns?.length
                    ? pageIndex * pageCount + pageCount
                    : campaigns?.length
                } of ${campaigns?.length}`}</div>
                <img
                  src={rightPage}
                  className="w-[19px] h-[19px]"
                  onClick={() => {
                    if (pageIndex < campaigns?.length / pageCount - 1) {
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

export function CompletedCampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsFlag, setCampaignsFlag] = useState(false);
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
    fetchDraft_ActiveData(user, setCampaigns, setCampaignsFlag, "Complete");
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex w-full bg-neutral-100">
      <Sidebar />
      <div className="w-full flex flex-col mb-8">
        <div className="m-4 py-5 pl-3 font-semibold text-5xl bg-white rounded">
          Completed
        </div>
        <div className="w-full flex justify-center items-center">
          {campaigns && campaignsFlag === false && (
            <div className="w-full flex justify-center">Loading</div>
          )}
          {!campaigns && campaignsFlag === false && (
            <div className="mt-2 w-full flex justify-center">
              {" "}
              No Data Found
            </div>
          )}
          {campaigns && campaignsFlag === true && (
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
                              navigate(`/completed-campaigns/${campaign.id}`);
                            }}
                          >
                            <div className="p-3">
                              <img
                                className="w-[200px] h-[140px]"
                                src={campaign?.adImage[0]}
                              />
                              <div className="mt-2 text-start font-semibold">
                                {campaign?.campaignName}
                              </div>
                            </div>
                          </td>

                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/completed-campaigns/${campaign.id}`);
                            }}
                          >
                            {campaign?.targetCategory}
                          </td>
                          <td
                            className="pl-1 text-left"
                            onClick={() => {
                              navigate(`/completed-campaigns/${campaign.id}`);
                            }}
                          >
                            {`${new Date(
                              campaign?.adStartDate
                            ).toDateString()} - `}{" "}
                            {`${new Date(campaign?.adEndDate).toDateString()}`}
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
                  pageIndex * pageCount + pageCount < campaigns?.length
                    ? pageIndex * pageCount + pageCount
                    : campaigns?.length
                } of ${campaigns?.length}`}</div>
                <img
                  src={rightPage}
                  className="w-[19px] h-[19px]"
                  onClick={() => {
                    if (pageIndex < campaigns?.length / pageCount - 1) {
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
