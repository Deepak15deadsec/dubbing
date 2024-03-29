import {
  Sidebar as SideBar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import {
  useStoreActions,
  useStoreState,
} from "../../../store/easy-peasy/hooks";
import { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "@mui/material";
const loudSpeaker = require("../../../images/loudspeaker.png");
const plusSign = require("../../../images/hide.png");
const profileSetting = require("../../../images/profileSetting.png");
const logoutIcon = require("../../../images/logout.png");

const Sidebar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const [active, setActive] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const user = useStoreState((state) => state.user);
  const tabSelected = (tabName: string) => {
    setActive(tabName);
  };
  const addUser = useStoreActions((state) => state.addUser);
  const addToken = useStoreActions((state) => state.addToken);

  const [openClose, setOpenClose] = useState(false);
  const handleClose = () => setOpenClose(false);

  const sideMenu = () => {
    return (
      <Menu
        className="text-black"
        renderExpandIcon={({ open }) => <span>{open ? "-" : "+"}</span>}
      >
        <MenuItem
          component={
            <NavLink
              to={`/dashboard/home`}
              onClick={() => tabSelected("profile&settings")}
            />
          }
          className={`${active === "profile&settings" ? "text-[#30D792]" : "text-black"
            } font-bold `}
          icon={<img src={profileSetting} />}
        >
          {" "}
          Home{" "}
        </MenuItem>
        <MenuItem
          component={
            <NavLink
              to={`/profile_and_settings_/${user.id}`}
              onClick={() => tabSelected("profile&settings")}
            />
          }
          className={`${active === "profile&settings" ? "text-[#30D792]" : "text-black"
            } font-bold `}
          icon={<img src={profileSetting} />}
        >
          {" "}
          My tasks{" "}
        </MenuItem>
        <MenuItem
          component={
            <NavLink
              to={`/profile_and_settings_/${user.id}`}
              onClick={() => tabSelected("profile&settings")}
            />
          }
          className={`${active === "profile&settings" ? "text-[#30D792]" : "text-black"
            } font-bold `}
          icon={<img src={profileSetting} />}
        >
          {" "}
          Inbox{" "}
        </MenuItem>
        <SubMenu
          className={`${active === "campaigns" ? "text-[#30D792] ml-2" : "text-black ml-2"
            } font-bold `}
          defaultOpen
          label="Insights "
         
        >
          <MenuItem
            className={`${active === "active" ? "text-[#30D792]" : "text-black"
              } font-normal  `}
              icon={<img src={loudSpeaker} />}
            component={
              <NavLink
                to={`/${user.id}/active_campaign`}
                onClick={() => tabSelected("active")}
                className="ml-0"
              />
            }
          >
            Reporting
          </MenuItem>
          <MenuItem
            className={`${active === "draft" ? "text-[#30D792]" : "text-black"
              } font-normal  `}
              icon={<img src={loudSpeaker} />}
            component={
              <NavLink
                to={`/${user.id}/draft_campaign`}
                onClick={() => tabSelected("draft")}
                className="ml-0"
              />
            }
          >
            Portfolios
          </MenuItem>

          <MenuItem
            className={`${active === "completed" ? "text-[#30D792]" : "text-black"
              } font-normal `}
              icon={<img src={loudSpeaker} />}
            component={
              <NavLink
                to={`/${user.id}/completed_campaign`}
                onClick={() => tabSelected("completed")}
                className="ml-0"
              />
            }
          >
            Goals
          </MenuItem>

        </SubMenu>





        {/* <MenuItem
            onClick={() => {
              setOpenClose(true);
            }}
          >
            <div className="w-full flex items-center font-bold">
              Logout
              <img src={logoutIcon} className="h-5 w-5 ml-3" />{" "}
            </div>
            <Modal
              className="w-full h-full flex justify-center items-center"
              open={openClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="w-1/4 h-24 bg-white rounded flex flex-col justify-center items-center">
                <div> Do you want to logout ?</div>
                <div className="w-full flex justify-center mt-3">
                  <button
                    className="px-4 w-24 bg-green-500 h-8 text-white rounded-[20px] hover:bg-green-400 ml-3"
                    onClick={async () => {
                      const { data: campaign } = await axios({
                        url: `${process.env.REACT_APP_SERVER_ENDPOINT}/auth/advertiser-logout/${user.id}`,
                        method: "GET",
                        headers: {
                          Authorization: `Bearer ${user.token}`,
                        },
                      });
  
                      if (campaign && campaign.status == "logout successfull") {
                        toast.success("Successfully Logout !", {
                          position: toast.POSITION.TOP_RIGHT,
                        });
                        addToken("0");
                        addUser({
                          token: "0",
                          name: "0",
                          email: "0",
                          id: "0",
                        });
                        navigate("/login");
                      } else {
                        toast.error("Something went wrong !", {
                          position: toast.POSITION.TOP_RIGHT,
                        });
                      }
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="px-4 w-24 bg-orange-500 h-8 text-white rounded-[20px] hover:bg-orange-400 ml-3"
                    onClick={handleClose}
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal>
          </MenuItem> */}
      </Menu>
    );
  };

  const navigate = useNavigate();

  return (
    <SideBar
      backgroundColor="#fff"
      style={{ border: "none" }}
      breakPoint="sm"
      transitionDuration={1000}
      className="w-full min-h-screen"
    >
      <div className={`w-full flex flex-col items-center `}>
        {/* <div className="mt-[3rem]">
          {" "}
          <img
            src="https://res.cloudinary.com/dgjxmcrkg/image/upload/v1678950521/just-logo_nmy0bh.webp"
            height={58}
            width={92}
          />
        </div> */}

        <div className="mt-[2rem] w-full">{sideMenu()}</div>
      </div>
    </SideBar>
  );
};

export default Sidebar;
