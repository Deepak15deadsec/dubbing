import {
    CircularProgress,
    MenuItem,
    Modal,
    Select,
    Slider,
    TextField,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import SideBar from "../SideBar/sideBar";
  import DatePicker from "react-datepicker";
  import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
  import { useStoreState } from "../../../store/easy-peasy/hooks";
  import { regex } from "../../signupTest";
  import axios from "axios";
  import { toast } from "react-toastify";
  import { ImageUploadingButton } from "../Campaigns/createCampaign";
  const loader = require("../../../images/loader.gif");
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  
  function Preview(props: any) {
    const { reward, setEditTab } = props;
    const user = useStoreState((state) => state.user);
  
    return (
      <div className="w-1/2 ml-4 rounded-lg bg-white mt-5 pb-4">
        <div
          className=" h-12 flex items-center pl-4 pr-4 text-xl font-bold"
          style={{ borderBottom: "1px solid #F6F8FA" }}
        >
          Preview
        </div>
        <div className=" flex">
          <div className="w-full">
            <div className=" m-5 border border-gray-200 rounded-md mt-4 mb-4 pb-4">
              <div className=" mt-4 pl-4">
                <div className="w-full flex">
                  <div className="w-1/3 text-xs">Milestone Reward</div>
                  <div className="w-full text-xs text-gray-400">
                    {reward?.milestone}
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-1/3 text-xs">Offer Title</div>
                  <div className="w-full text-xs text-gray-400">
                    {reward?.offerTitle}
                  </div>
                </div>
                <div className="w-full flex items-center">
                  <div className="w-1/3 text-xs">Creative</div>
                  <div className="w-full text-xs text-gray-400">
                    <div className="m-2">
                      <img src={reward?.creative} className="h-12 w-12" />
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-1">
                  <div className="w-1/3 text-xs">
                    Number of orders to complete
                  </div>
                  <div className="w-full text-xs text-gray-400">
                    {reward?.numberOfOrdersToComplete}
                  </div>
                </div>
                <div className="w-full flex mt-1">
                  <div className="w-1/3 text-xs">
                    Maximum orders allowed per day
                  </div>
                  <div className="w-full text-xs text-gray-400">
                    {reward?.numberOfOrdersToComplete}
                  </div>
                </div>
                <div className="w-full flex mt-1">
                  <div className="w-1/3 text-xs">Internal offer code</div>
                  <div className="w-full text-xs text-gray-400">
                    {reward?.internalOfferCode}
                  </div>
                </div>
                <div className="w-full flex mt-1">
                  <div className="w-1/3 text-xs">Terms & Conditions</div>
                  <div className="w-full text-xs text-gray-400">
                    {reward?.termsAndConditions}
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-1/3 text-xs">Start Date</div>
                  <div className="w-full text-xs text-gray-400">
                    {new Date(reward?.startDate).toDateString().slice(4)}
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-1/3 text-xs">End Date</div>
                  <div className="w-full text-xs text-gray-400">
                    {new Date(reward?.endDate).toDateString().slice(4)}
                  </div>
                </div>
              </div>
            </div>
  
            <div className=" ml-3 flex items-center mt-2 ">
              <div className="w-full flex justify-start pr-10">
                <button className="w-24 ml-4 bg-gray-500 h-8 text-white rounded-[20px] hover:bg-gray-400">
                  <Link to={`/${user.id}/active_reward`}>Back</Link>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function ActivatedRewards() {
    const [switchTab, setSwitchTab] = useState(2);
    const { id } = useParams();
    const [editTab, setEditTab] = useState(false);
    const user = useStoreState((store) => store.user);
    const { state } = useLocation();
    const { reward } = state;
  
    const[rewardInfo,setRewardInfo] = useState({})
  
    const [MilestoneRewardMilestone, setMilestoneRewardMilestone] = useState("");
    const [offerTitle, setOfferTitle] = useState("");
    const [uploadCreative, setUploadCreative] = useState([]);
    const [ordersToComplete, setOrdersToComplete] = useState("");
    const [orderAllowedperDay, setOrderAllowedperday] = useState("");
    const [minimuOrderValueforthisoffer, setMinimumOrderValueforthisoffer] =
      useState("");
    const [internalOfferCode, setInternalOfferCode] = useState("");
    const [termsAndConditions, setTermsAndConditions] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [imageArray, setImageArray] = useState<string[]>([]);
    const [isImageUploading, setIsImageUploading] = useState(false);
    const [errorMessageOne, setErrorMessageOne] = useState({
      isRequired: "Value is Required",
      isEndDate: "End date should be greated than start date",
      isMaxImage: "Maximum 5 images can be uploaded",
    });
  
    const [showErrorMessage, setShowErrorMessage] = useState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
    });
  
    useEffect(() => {
      setRewardInfo(reward)
      setMilestoneRewardMilestone(reward?.milestone);
      setOfferTitle(reward?.offerTitle);
      setImageArray([reward?.creative]);
      setOrdersToComplete(reward?.numberOfOrdersToComplete);
      setOrderAllowedperday(reward?.numberOfOrdersToComplete);
      setInternalOfferCode(reward?.internalOfferCode);
      setTermsAndConditions(reward?.termsAndConditions);
      setStartDate(reward?.startDate);
      setEndDate(reward?.endDate);
    }, [reward]);
  
    const navigate = useNavigate();
  
    return (
      <div className="flex h-1/2 w-full " style={{ backgroundColor: "#F6F8FA" }}>
        <SideBar />
        <Preview reward={rewardInfo} setEditTab={setEditTab} /> 
      </div>
    );
  }
  
  export default ActivatedRewards;
  