import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import Sidebar from "../SideBar/sideBar";
const rightPage = require("../../../images/rightPage.png");
const leftPage = require("../../../images/leftPage.png");

async function fetchBrand(user: any, setBrand: any, setBrandFlag: any) {
  const fetchData = async () => {
    const { data: Brand } = await axios({
      url: `${process.env.REACT_APP_SERVER_ENDPOINT}/brand?advertiserId=${user.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setBrand(Brand?.data?.reverse());
    if (Brand?.data !== undefined) {
      setBrandFlag(true);
    }
  };
  fetchData();
}

export function BrandList() {
  const [Brand, setBrand] = useState([]);
  const [BrandFlag, setBrandFlag] = useState(false);
  const user = useStoreState((state) => state.user);
  const [pageCount, setPageCount] = useState(50);
  const [pageIndex, setPageIndex] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  useEffect(() => {
    fetchBrand(user, setBrand, setBrandFlag);
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
          {Brand && BrandFlag === false && (
            <div className="w-full flex justify-center">Loading</div>
          )}
          {!Brand && BrandFlag === false && (
            <div className="mt-2 w-full flex justify-center">
              {" "}
              No Data Found
            </div>
          )}
          {Brand && BrandFlag === true && (
            <div className="w-full flex flex-col justify-center items-center px-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-white h-14 border border-sm">
                    <th className="text-left font-semibold pl-6"> Title</th>
                    <th className="text-left font-semibold">Categories</th>
                    <th className="text-left font-semibold">
                      Terms And Conditions
                    </th>
                    <th>About</th>
                  </tr>
                </thead>
                <tbody className="w-full border">
                  {Brand?.slice(
                    pageCount * pageIndex,
                    pageCount * pageIndex + pageCount
                  ).map((Brand: any, index: number) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white text-center px-5 h-14 border-b w-full cursor-pointer hover:bg-gray-100"
                      >
                        <td
                          className="pl-4"
                          onClick={() => {
                            navigate(`/update_brand/${Brand?.id}`, {
                              state: { Brand: Brand },
                            });
                          }}
                        >
                          <div className="p-3">
                            <img
                              className="w-[200px] h-[140px]"
                              src={Brand?.brandImage[0]}
                            />
                            <div className="mt-2 text-start font-semibold">
                              {Brand?.brandName}
                            </div>
                          </div>
                        </td>

                        <td
                          className="pl-1 text-left"
                          onClick={() => {
                            navigate(`/update_brand/${Brand?.id}`, {
                              state: { Brand: Brand },
                            });
                          }}
                        >
                          <div className="h-[180px] overflow-auto scrollbar-track-gray-200 scrollbar-thin scrollbar-thumb-rounded">
                            {Brand?.category.map((data: any, index: any) => {
                              return (
                                <div key={index} className="flex m-2">
                                  {index + 1}. <div>{data}</div>
                                </div>
                              );
                            })}
                          </div>
                        </td>
                        <td
                          className="pl-1 text-left"
                          onClick={() => {
                            navigate(`/update_brand/${Brand?.id}`, {
                              state: { Brand: Brand },
                            });
                          }}
                        >
                          <div className="h-[180px] overflow-auto scrollbar-track-gray-200 scrollbar-thin scrollbar-thumb-rounded">
                            {Brand?.termsAndConditions.map(
                              (data: any, index: any) => {
                                return (
                                  <div key={index} className="flex m-2">
                                    {index + 1}. <div>{data}</div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </td>

                        <td
                          className="pl-1 text-left"
                          onClick={() => {
                            navigate(`/active-Brand/${Brand?.id}`, {
                              state: { Brand: Brand },
                            });
                          }}
                        >
                          {Brand?.about}
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
                  pageIndex * pageCount + pageCount < Brand?.length
                    ? pageIndex * pageCount + pageCount
                    : Brand?.length
                } of ${Brand?.length}`}</div>
                <img
                  src={rightPage}
                  className="w-[19px] h-[19px]"
                  onClick={() => {
                    if (pageIndex < Brand?.length / pageCount - 1) {
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
