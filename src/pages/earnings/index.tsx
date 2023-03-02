import React, { useState, useContext, useEffect, useMemo } from "react";
import DatePicker from "react-datepicker";
import { AppContext } from "../../context/appContext";
import { EarningDatagrid } from "../../components/Datagrid";
import moment from "moment"
import { useQuery } from "react-query";
import { getRequest, queries } from "../../react-query";
import { Tab } from '@headlessui/react'

type Input = {
  to: Date;
  from: Date;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Earnings = () => {

  const [user, setUser] = useState<any>();
  const appContext: any = useContext(AppContext);

  const { data: transactions = [], isLoading } = useQuery(
    queries.earnings,
    () => getRequest(`/reward-transaction?userId=${user?.id}`),
    {
      enabled: !!user?.id,
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
        Header: "Particular",
        accessor: "description",
      },
      {
        Header: "Date",
        accessor: (row: any) => {
          return moment(row?.createdAt).format("DD MMM, YYYY");
        },
      },



      {
        Header: "Art Coins",
        accessor: (row: any) => {
          return <p className="text-[#67DF87]">{row?.rewardedAmount}</p>
        },
      },

    ],
    []
  );
  useEffect(() => {
    setUser(appContext?.user);
  }, [appContext]);

  return (
    <div className="w-full px-[2rem] py-[3rem] flex flex-col items-center justify-center">
      <div className="rounded-[10px] w-full h-full  bg-[#FFFFFF] text-[#7FBA00] ">
        <p className="font-[600] text-[2.25rem] text-left text-black mt-[1rem] mx-[4rem] border-b-2 leading-[6rem]">
          Earnings
        </p>
        <div className="rounded-[1rem] h-[4rem] mt-[1.5rem] mx-[4rem] shadow-inner bg-[#EEEEEE]  p-3 space-y-2 ">
          <div className="flex space-x-4 items-center">
            <div className="w-full h-10 inline-flex px-5 items-center space-x-5 bg-gray-50 border border-gray-300 rounded-[0.5rem]">
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
                className="w-full h-full py-4 text-[#333333] focus:outline-none bg-transparent"
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
            <div className="w-full h-10 inline-flex px-5 items-center space-x-5 bg-gray-50 border border-gray-300 rounded-[0.5rem]">
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
                className="w-full h-full py-4 text-[#333333] focus:outline-none bg-transparent"
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

            <div className="rounded-[10px] w-[35rem] h-10 py-2 px-[1rem] flex flex-col justify-center items-center bg-[#F0FFF4] text-[#7FBA00]">
              <p className="text-[#67DF87] text-[1.2rem] font-[400]">2,00,000.00 AVNI</p>

            </div>

          </div>

        </div>
        <div className="w-full px-[4rem] py-[2rem] sm:px-0">
          <Tab.Group>
            <Tab.List className="flex mx-[4rem] space-x-14 rounded-xl bg-[#f1f0f0] ">
              <Tab className={({ selected }) =>
                classNames(
                  ' rounded-lg py-2.5 ml-[1.5rem] p-5 text-sm font-medium leading-5 text-[#333333]',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-[#01A4EF]'
                    : 'text-[#333333] hover:bg-white/[0.12] hover:text-[#01A4EF]'
                )
              }>Month</Tab>
              <Tab className={({ selected }) =>
                classNames(
                  ' rounded-lg py-2.5 p-5 text-sm font-medium leading-5 text-[#333333]',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-[#01A4EF]'
                    : 'text-[#333333] hover:bg-white/[0.12] hover:text-[#01A4EF]'
                )
              }>Category</Tab>
              <Tab disabled className="text-[#333333] ">Site</Tab>
            </Tab.List>
            <Tab.Panels className="mt-[1.5rem] px-[4rem]">
              <Tab.Panel>
                <div className="rounded-[0.625rem] w-full   bg-[#FFFFFF]">
                  <EarningDatagrid columns={columns} data={transactions} />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="rounded-[0.625rem] w-full   bg-[#FFFFFF]">
                  <p>Table 2</p>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>



      </div>
    </div>
  )
}

export default Earnings