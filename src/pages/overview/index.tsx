import React, { useState, useEffect, useMemo, useContext } from "react";
import PopUp from "../popup";
import { AppContext } from "../../context/appContext";
import DatePicker from "react-datepicker";
import moment from "moment";
import { OverviewDatagrid } from "../../components/Datagrid";
import { getRequest, queries } from "../../react-query";
import { useQuery } from "react-query";
import InviteCard from "./InviteCard";
import Thankyou from "./Thankyou";
import Loading from "../../components/Loading";

type Input = {
  to: Date;
  from: Date;
};

const Overview = () => {
  const [user, setUser] = useState<any>();
  const appContext: any = useContext(AppContext);

  const { data: referrerUser } = useQuery(
    queries.referrer,
    () => getRequest(`/reward-transaction/referralby?referralCode=${user?.referralCode}`),
    {
      enabled: !!user?.referralCode,
    }
  );

  const [input, setInput] = useState<Input>({
    to: new Date(),
    from: new Date(),
  });

  const onChangeHandler = (value: Date, name: string) => {
    setInput({ ...input, [name]: value });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "username",
      },
      {
        Header: "Date",
        accessor: (row: any) => {
          return moment(row.createdAt).format("DD MMM, YYYY");
        },
      },

      {
        Header: "Art Coins",
        accessor: "rewardedAmount"
      },
    ],
    []
  );

  useEffect(() => {
    setUser(appContext?.user);
  }, [appContext]);

  const inviteUrl = `https://avniads.com/r/${user?.referralCode}`;

  return (
    <>
      {Array.isArray(referrerUser) && referrerUser?.length > 0 ? (
        <div className="w-full px-[2rem] pt-[3rem]">
          {/* <PopUp isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          <div className="w-full flex space-x-5 mt-3">
            <div className="w-full inline-flex px-5 items-center space-x-5 bg-gray-50 border border-gray-300 rounded-[0.5rem]">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.25"
                  y="0.25"
                  width="29.5"
                  height="29.5"
                  rx="5.75"
                  fill="#F0FAFF"
                  stroke="#01A4EF"
                  strokeWidth="0.5"
                />
                <path
                  d="M10.9167 8V9.75M19.0833 8V9.75M8 20.25V11.5C8 11.0359 8.18437 10.5908 8.51256 10.2626C8.84075 9.93437 9.28587 9.75 9.75 9.75H20.25C20.7141 9.75 21.1592 9.93437 21.4874 10.2626C21.8156 10.5908 22 11.0359 22 11.5V20.25M8 20.25C8 20.7141 8.18437 21.1592 8.51256 21.4874C8.84075 21.8156 9.28587 22 9.75 22H20.25C20.7141 22 21.1592 21.8156 21.4874 21.4874C21.8156 21.1592 22 20.7141 22 20.25M8 20.25V14.4167C8 13.9525 8.18437 13.5074 8.51256 13.1792C8.84075 12.851 9.28587 12.6667 9.75 12.6667H20.25C20.7141 12.6667 21.1592 12.851 21.4874 13.1792C21.8156 13.5074 22 13.9525 22 14.4167V20.25"
                  stroke="#01A4EF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <DatePicker
                dateFormat="MMM yyyy"
                showMonthYearPicker
                selected={input.to}
                onChange={(date: any) => onChangeHandler(date, "to")}
                className="w-full h-full py-4 focus:outline-none bg-transparent"
              />
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1L8 9L1 1"
                  stroke="#333333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="w-full inline-flex px-5 items-center space-x-5 bg-gray-50 border border-gray-300 rounded-[0.5rem]">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.25"
                  y="0.25"
                  width="29.5"
                  height="29.5"
                  rx="5.75"
                  fill="#F0FAFF"
                  stroke="#01A4EF"
                  strokeWidth="0.5"
                />
                <path
                  d="M10.9167 8V9.75M19.0833 8V9.75M8 20.25V11.5C8 11.0359 8.18437 10.5908 8.51256 10.2626C8.84075 9.93437 9.28587 9.75 9.75 9.75H20.25C20.7141 9.75 21.1592 9.93437 21.4874 10.2626C21.8156 10.5908 22 11.0359 22 11.5V20.25M8 20.25C8 20.7141 8.18437 21.1592 8.51256 21.4874C8.84075 21.8156 9.28587 22 9.75 22H20.25C20.7141 22 21.1592 21.8156 21.4874 21.4874C21.8156 21.1592 22 20.7141 22 20.25M8 20.25V14.4167C8 13.9525 8.18437 13.5074 8.51256 13.1792C8.84075 12.851 9.28587 12.6667 9.75 12.6667H20.25C20.7141 12.6667 21.1592 12.851 21.4874 13.1792C21.8156 13.5074 22 13.9525 22 14.4167V20.25"
                  stroke="#01A4EF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <DatePicker
                dateFormat="MMM yyyy"
                showMonthYearPicker
                selected={input.from}
                onChange={(date: any) => onChangeHandler(date, "from")}
                className="w-full h-full py-4 focus:outline-none bg-transparent"
              />
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1L8 9L1 1"
                  stroke="#333333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="w-full grid gap-5 grid-cols-5 mt-[1rem]">
            <div className="rounded-[1rem] shadow-inner bg-[#FFFFFF]  p-5 space-y-2 ">
              <div className="flex space-x-4 items-center">
                <img
                  src="/static/svg/coins.svg"
                  alt="Fortune"
                  height="70px"
                  width="72.99px"
                  className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
                />
                <div className="space-y-4">
                  <p className="text-[2.25rem] font-lettera-regular font-[600] text-left tracking-normal leading-[2rem] text-[#333333] ">
                    1650
                  </p>
                  <div className=" rounded-[2.5rem] shadow-inner bg-[#FFECEB] p-1  w-[3.17rem] h-[1.875rem]">
                    <p className="text-[0.875rem] text-[#FF6154] font-[400] ">
                      $ART
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1rem] shadow-inner bg-[#FFFFFF]  p-5 space-y-2 ">
              <div className="flex space-x-4 items-center">
                <img
                  src="/static/svg/invite.svg"
                  alt="Fortune"
                  height="70px"
                  width="72.99px"
                  className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
                />
                <div className="space-y-4">
                  <p className="text-[2.25rem] font-lettera-regular font-[600] text-left tracking-normal leading-[2rem] text-[#333333] ">
                    56
                  </p>
                  <div className=" rounded-[2.5rem] shadow-inner bg-[#FFECEB] p-1  w-[7.14rem] h-[1.875rem]">
                    <p className="text-[0.875rem] text-[#FFB703] font-[400] ">
                      invite accepted
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1rem] shadow-inner bg-[#FFFFFF]  p-5 space-y-2 ">
              <div className="flex space-x-4 items-center">
                <img
                  src="/static/svg/coins.svg"
                  alt="Fortune"
                  height="70px"
                  width="72.99px"
                  className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
                />
                <div className="space-y-4">
                  <p className="text-[2.25rem] font-lettera-regular font-[600] text-left tracking-normal leading-[2rem] text-[#333333] ">
                    1650
                  </p>
                  <div className=" rounded-[2.5rem] shadow-inner bg-[#FFECEB] p-1  w-[3.17rem] h-[1.875rem]">
                    <p className="text-[0.875rem] text-[#FF6154] font-[400] ">
                      $ART
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1rem] shadow-inner bg-[#FFFFFF]  p-5 space-y-2 ">
              <div className="flex space-x-4 items-center">
                <img
                  src="/static/svg/invite.svg"
                  alt="Fortune"
                  height="70px"
                  width="72.99px"
                  className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
                />
                <div className="space-y-4">
                  <p className="text-[2.25rem] font-lettera-regular font-[600] text-left tracking-normal leading-[2rem] text-[#333333] ">
                    56
                  </p>
                  <div className=" rounded-[2.5rem] shadow-inner bg-[#FFECEB] p-1  w-[7.14rem] h-[1.875rem]">
                    <p className="text-[0.875rem] text-[#FFB703] font-[400] ">
                      invite accepted
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1rem] shadow-inner bg-[#FFFFFF]  p-5 space-y-2 ">
              <div className="flex space-x-4 items-center">
                <img
                  src="/static/svg/invite.svg"
                  alt="Fortune"
                  height="70px"
                  width="72.99px"
                  className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
                />
                <div className="space-y-4">
                  <p className="text-[2.25rem] font-lettera-regular font-[600] text-left tracking-normal leading-[2rem] text-[#333333] ">
                    56
                  </p>
                  <div className=" rounded-[2.5rem] shadow-inner bg-[#FFECEB] p-1  w-[7.14rem] h-[1.875rem]">
                    <p className="text-[0.875rem] text-[#FFB703] font-[400] ">
                      invite accepted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex space-x-5 h-full  mt-[1.25rem]">
            <div className="rounded-[0.625rem] w-[62.5%]   bg-[#FFFFFF]">
              <OverviewDatagrid columns={columns} data={referrerUser} />
            </div>
            <div className="rounded-[0.625rem] w-[38.5%] p-3 bg-[#FFFFFF]">
              <InviteCard inviteUrl={inviteUrl} />
            </div>
          </div>
        </div>
      ) : Array.isArray(referrerUser) ? (
        <Thankyou user={user} />
      ) : (
        <Loading/>
      )}
    </>
  );
};

export default Overview;
