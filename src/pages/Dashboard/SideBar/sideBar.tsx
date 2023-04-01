import {
  Sidebar as SideBar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import { useEffect, useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
const loudSpeaker = require("../../../images/loudspeaker.png");
const plusSign = require("../../../images/plusSign.png");
const profileSetting = require("../../../images/profileSetting.png");

const Sidebar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const [active, setActive] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const user = useStoreState((state) => state.user);
  const tabSelected = (tabName: string) => {
    // localStorage.setItem("sidetab", tabName)
    setActive(tabName);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data: campaigns } = await axios({
  //       url: `${process.env.REACT_APP_SERVER_ENDPOINT}/campaign/list?advertiserId=${user.id}`,
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     setCampaigns(campaigns?.data);
  //   };
  //   fetchData();
  // }, []);

  const sideMenu = () => {
    return (
      <Menu
        className="text-black"
        renderExpandIcon={({ open }) => <span>{open ? "-" : "+"}</span>}
      >
        <SubMenu
          className={`${
            active === "campaigns" ? "text-[#01A4EF]" : "text-black"
          } `}
          defaultOpen
          label="Campaigns "
          icon={<img src={loudSpeaker} />}
        >
          {/* {campaigns?.map((campaign: any, index) => {
          
            return (<MenuItem
              key={index}
              className={`${active === "active-campaigns" ? "text-[#01A4EF] pl-[2rem]" : "text-black pl-[2rem]"}`}
              component={
                <NavLink
                  to={`/active-campaigns/${campaign.id}`}
                  onClick={() => tabSelected("active-campaigns")} />
              }

            >
              {campaign?.campaignName}
            </MenuItem>)
          })} */}
          <MenuItem
            className={`${
              active === "active" ? "text-[#01A4EF]" : "text-black"
            } ` }
            component={
              <NavLink
                to={`/dashboard`}
                onClick={() => tabSelected("active")}
                className="ml-10"
              />
            }
          >
            Active
          </MenuItem>
          <MenuItem
            className={`${
              active === "draft" ? "text-[#01A4EF]" : "text-black"
            } `}
            component={
              <NavLink
                to={`/draft_campaign`}
                onClick={() => tabSelected("draft")}
                className="ml-10"
              />
            }
          >
            Draft
          </MenuItem>

          <MenuItem
            className={`${
              active === "completed" ? "text-[#01A4EF]" : "text-black"
            } `}
            component={
              <NavLink
                to={`/dashboard`}
                onClick={() => tabSelected("completed")}
                className="ml-10"
              />
            }
          >
            Completed
          </MenuItem>
        </SubMenu>

        <MenuItem
          className={`${
            active === "overview" ? "text-[#01A4EF]" : "text-black"
          } `}
          icon={<img src={plusSign} />}
          component={
            <NavLink
              to={`/dashboard`}
              onClick={() => tabSelected("overview")}
            />
          }
        >
          Add Campaign
        </MenuItem>

        <SubMenu
          className={`${active === "red" ? "text-[#01A4EF]" : "text-black"} `}
          label="Profile & Settings"
          icon={<img src={profileSetting} />}
        ></SubMenu>
      </Menu>
    );
  };

  return (
    <SideBar
      backgroundColor="#fff"
      style={{ border: "none" }}
      breakPoint="sm"
      transitionDuration={1000}
      className="w-full min-h-screen"
    >
      <div className={`w-full flex flex-col items-center `}>
        <div className="mt-[3rem]">
          {" "}
          <img
            src="https://res.cloudinary.com/dgjxmcrkg/image/upload/v1678950521/just-logo_nmy0bh.webp"
            height={58}
            width={92}
          />
        </div>

        <div className="mt-[2rem] w-full">{sideMenu()}</div>
      </div>
    </SideBar>
  );
};

export default Sidebar;
