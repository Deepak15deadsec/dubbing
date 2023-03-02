import {
  Sidebar as SideBar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import { useEffect, useState, useContext } from 'react'
import { NavLink } from "react-router-dom";
import { useDimension } from '../../hooks/dimension'
import { AppContext } from "../../context/appContext";

const Sidebar = () => {
  const { screenSize } = useDimension()
  const { collapseSidebar, collapsed } = useProSidebar();
  const [active, setActive] = useState(localStorage.getItem("sidetab"))
  const appContext: any = useContext(AppContext)
  const [userDetails, setUserDetails] = useState<any>()

  const tabSelected = (tabName:string) => {
    localStorage.setItem("sidetab", tabName)
    setActive(tabName)
  }

  const sideMenu = () => {
    return (
      <Menu>
        <MenuItem
          className={`${active === "overview" ? "text-[#01A4EF]" : "text-black"}`}
          component={
            <NavLink
              to={`/`}
              onClick={() => tabSelected("overview")} />
          }
          icon={<img src="/static/svg/overview.svg" />}
        >
          Overview
        </MenuItem>
        <MenuItem
          className={`${active === "earnings" ? "text-[#01A4EF]" : "text-black"}`}
          component={<NavLink to={`/earnings`} onClick={() => tabSelected("earnings")} />}
          icon={<img src="/static/svg/earnings.svg" />}
        >
          Earnings
        </MenuItem>

        <MenuItem
          className={`${active === "offer" ? "text-[#01A4EF]" : "text-black"}`}
          component={<NavLink to={`/offer`} onClick={() => tabSelected("offer")} />}
          icon={<img src="/static/svg/offers.svg" />}
        >
          Offers
        </MenuItem>

        <MenuItem
          className={`${active === "settings" ? "text-[#01A4EF]" : "text-black"}`}
          component={<NavLink to={`/settings`} onClick={() => tabSelected("settings")} />}
          icon={<img src="/static/svg/settings.svg" />}
        >
          Settings
        </MenuItem>
      </Menu>
    );
  };

  useEffect(() => {
    setUserDetails(appContext?.user)
    return () => {
      setUserDetails({})
    }
  }, [appContext])

  return (
    <SideBar backgroundColor="#fff" style={{ border: "none" }} breakPoint="sm" transitionDuration={1000} className="w-full h-full">
      <div className={`w-full flex flex-col items-center `}>

        <div className="mt-[4rem]"> <img
          src="/static/svg/logo.svg"
          height={78}
          width={112}
        />
        </div>

        <div className="w-[6rem] h-[6rem] mt-[2rem] border border-[#FFB703] flex justify-center items-center rounded-full bg-white shadow-lg">
          <img
            src={userDetails?.imageUrl}
            alt="user logo"
            className="w-full h-full object-contain rounded-full"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center items-center">
          <p>{userDetails?.name}</p>
          <div className="space-y-2">
            <p className="text-[#7FBA00]">Total: 2,00,000.00 AVNI</p>
            <div className="rounded-[10px] w-[11.5rem] py-2 px-[2rem] flex flex-col justify-center items-center bg-[#EAFFBE] text-[#7FBA00]">
              <p>This Month :</p>
              <p>$200 AVNI</p>
            </div>
          </div>
        </div>

        <div className="mt-[2rem] w-full">{sideMenu()}</div>

      </div>

    </SideBar>
  );
};

export default Sidebar;
