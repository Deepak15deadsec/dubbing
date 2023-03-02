import React from 'react'
import { Tab } from '@headlessui/react'
import Card from './Card'
import Saved from './Saved'

const cards = [
  {
    title: "Order Above Rs.500 and get 50% off",
    content: <span>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting...</span>,
    url: "/static/svg/orderabove.svg",
    span:"",
  },

  {
    title: "Free Coffee is Brewing. Hurry up !",
    content: <span>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting...</span>,
    url: "/static/svg/coffeeoffer.svg",
    span:"",
  },

  {
    title: "Introductory Offer: 12 months for the price of 8",
    content: <span>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting...</span>,
    url: "/static/svg/twelvemonth.svg",
    span:"",
  },
  
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Offer = () => {
  return (
    <div className="w-full px-[2rem] py-[3rem] flex flex-col items-center justify-center">
      <div className="rounded-[10px] w-full h-[39.5rem]  bg-[#FFFFFF] text-[#7FBA00] ">
        <p className="font-[600] text-[2.25rem] text-left text-black mt-[1rem] mx-[3rem] border-b-2 leading-[6rem] ">
          Offers
        </p>


        <div className="w-full px-[3rem] py-[1rem]  sm:px-0">
          <Tab.Group>
            <Tab.List className="flex mx-[3rem] space-x-10 border-2 rounded-xl bg-[#FFFFFF] ">
              <Tab className={({ selected }) =>
                classNames(
                  ' rounded-lg py-2.5  p-5 text-sm font-medium leading-5 text-[#333333]',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-[#01A4EF]'
                    : 'text-[#333333] hover:bg-white/[0.12] hover:text-[#01A4EF]'
                )
              }>Available</Tab>
              <Tab className={({ selected }) =>
                classNames(
                  ' rounded-lg py-2.5 p-5 text-sm font-medium leading-5 text-[#333333]',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-[#01A4EF]'
                    : 'text-[#333333] hover:bg-white/[0.12] hover:text-[#01A4EF]'
                )
              }>Saved</Tab>
              <Tab disabled className="text-[#333333] ">Redeemed</Tab>
            </Tab.List>
            <Tab.Panels className="mt-[1.5rem] px-[3rem]">

              <Tab.Panel>
                <div className="rounded-[0.625rem] w-full   bg-[#FFFFFF]">
                  <div className="grid xs:grid-cols-1 grid-cols-3 gap-3 mt-[1rem]">
                  {cards.map(({url, title, content, span}, index:number)=><Card  url={url} title={title} content={content} span={span}/>)}
                  </div>
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="rounded-[0.625rem] w-full   bg-[#FFFFFF]">
                <div className="grid xs:grid-cols-1 grid-cols-3 gap-3 mt-[1rem]">
                  {cards.map(({url, title, content, span}, index:number)=><Saved  url={url} title={title} content={content} span={span}/>)}
                  </div>
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

export default Offer