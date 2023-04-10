import { useState, useEffect, useContext } from "react";
import { Switch } from "@headlessui/react";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import {
  optimisticOptions,
  queries,
  getRequest,
  updateRequest,
} from "../../react-query";
import { useMutation, useQuery } from "react-query";
import { AppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../images/logo.png";
import Group65 from "../../images/Group65.png";
import Group67 from "../../images/Group67.png";
import Group66 from "../../images/Group66.png";
import Logo2 from "../../images/logo2.png";

interface Setting {
  gender: string;
  name: string;
  age: Date | null;
  phone: string;
  locationAccess: boolean;
}

const AdDashboardHome = () => {
  const navigate = useNavigate();

  const appContext: any = useContext(AppContext);

  const [input, setInput] = useState<Setting>({
    gender: "",
    name: "",
    phone: "",
    age: null,
    locationAccess: false,
  });

  const [errorState, setErrorState] = useState<any>({
    name: false,
    gender: false,
    phone: false,
    age: false,
    location: false,
  });

  //update
  const { mutate: updateSetting, isLoading } = useMutation(
    updateRequest,
    optimisticOptions(queries.loggedInUser)
  );

  const validateField = (fieldType: string) => {
    switch (fieldType) {
      case "name":
        if (input["name"] === "") return true;
        else return false;

      default:
        return false;
    }
  };

  const onChangeHandler = (value: string | boolean | Date, name: string) => {
    setInput({ ...input, [name]: value });
  };

  const submit = (e: any) => {
    e.preventDefault();
    let payload = {
      name: input?.name,
      age: input?.age?.toLocaleDateString(),
      locationAccess: input?.locationAccess,
      phone: input?.phone,
      gender: input?.gender,
    };

    updateSetting({
      endPoint: `/users/${appContext?.user?.id}`,
      payload: payload,
    });
  };

  useEffect(() => {
    let user = appContext?.user;
    if (user) {
      setInput({
        gender: user?.gender,
        name: user?.name,
        phone: user?.phone,
        age: user?.age === null ? null : new Date(user?.age),
        locationAccess: user?.locationAccess,
      });
    }
    return () => {
      setInput({
        gender: "",
        name: "",
        age: null,
        phone: "",
        locationAccess: false,
      });
    };
  }, [appContext]);

  return (
    <div
      className="w-full px-[4rem] py-[3rem] flex flex-col items-center justify-center"
      style={{ paddingTop: "0px" }}
    >
      <div className="rounded-[10px] w-full h-full  bg-[#FFFFFF] text-[#7FBA00]">
        <div className="grid gap-x-10 gap-y-10 grid-cols-2 px-[4rem] mt-[2rem]">
          <div className="space-y-2">
            <img src={mainLogo} alt="fireSpot" />
          </div>

          <div className="space-y-2">
            <div className="grid gap-4 grid-cols-2">
              <div>
                <button
                  type="submit"
                  className="rounded-[0.75rem] bg-[#01A4EF] text-[1.5rem] px-5 py-2 font-sans font-[700] text-center tracking-normal leading-[2rem] text-[#FFFFFF]"
                  onClick={() => {

                    navigate('/signup');
                    // const history = useHistory();
                    //   let path = `forgetPassword`; 
                    //   history.push(path);

                  }}
                >
                  Sign In
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-[0.75rem] bg-[#01A4EF] text-[1.5rem] px-5 py-2 font-sans font-[700] text-center tracking-normal leading-[2rem] text-[#FFFFFF]"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          maxHeight: "900px",
          overflowY: "scroll",
        }}>

          <div className="grid gap-x-10 gap-y-10 grid-cols-2 ">

            {/* <div > */}
            Acquire customers and grow your businss with Avni
            {/* </div>
            <div > */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
            <div>
              <img
                src={Group65}
                alt="fireSpot"
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            {/* </div> */}
            {/* <div className="space-y-2"> */}
            {/* <div className="space-y-2">
              <img  src={Group65}  alt="fireSpot"/>
            </div> */}
            {/* </div> */}
          </div>

          <div className="grid gap-x-10 gap-y-10 grid-cols-2 ">
            <div>
              <img
                src={Group66}
                alt="fireSpot"
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            {/* <div > */}
            Company Details
            {/* </div>
            <div > */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
            {/* </div> */}
            {/* <div className="space-y-2"> */}
            {/* <div className="space-y-2">
              <img  src={Group65}  alt="fireSpot"/>
            </div> */}
            {/* </div> */}
          </div>

          <div className="grid gap-x-10 gap-y-10 grid-cols-2 ">
            {/* <div > */}
            Login Details
            {/* </div>
          <div > */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
            {/* </div> */}
            <div>
              <img
                src={Group67}
                alt="fireSpot"
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            {/* <div className="space-y-2"> */}
            {/* <div className="space-y-2">
            <img  src={Group65}  alt="fireSpot"/>
          </div> */}
            {/* </div> */}
          </div>
          <div className="w-full px-[4rem] py-[3rem] flex flex-col items-center justify-center">
            <div>
              <img
                src={Logo2}
                alt="fireSpot"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
            <div>Create your first ad</div>
            <div>
              Get started with free personalised support. Create your custom ad
              plan with a Google Ads Expert.
            </div>
            <div>
              <button
                type="submit"
                className="rounded-[0.75rem] bg-[#01A4EF] text-[1.5rem] px-5 py-2 font-sans font-[700] text-center tracking-normal leading-[2rem] text-[#FFFFFF]"
                onClick={() => {

                  navigate('/signup');
                  // const history = useHistory();
                  //   let path = `forgetPassword`; 
                  //   history.push(path);

                }}
              >
                Sign In
              </button>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-10 grid-cols-5 px-[4rem] mt-[2rem]">
            <div className="space-y-2">
              <img src={mainLogo} alt="fireSpot" />
              <div className="grid gap-x-10 gap-y-10 grid-cols-2 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <div>Company</div>
                <div>About</div>
                <div>Newsroom</div>
                <div>Careers</div>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <div>Learn</div>
                <div>Blog</div>
                <div>Guides</div>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <div>Legal</div>
                <div>Privacy Policy</div>
                <div>Legal Disclosures</div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <div>Contact Us</div>
                <div>Help Center</div>
                <div>Talk to us</div>
                <div>hello@avni.finance</div>
              </div>
            </div>
          </div>

          {/* <div className="w-full px-[4rem] py-[3rem] flex flex-col" style={{paddingTop: '0px'}}> */}
          {/* <div className="grid gap-x-10 gap-y-10 grid-cols-2 "> */}

          {/* <div>
          <img  src={mainLogo}  alt="fireSpot"  />
          </div>  */}
          {/* </div> */}
          {/* <div className="grid gap-x-10 gap-y-10 grid-cols-2 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

          </div> */}
          {/* <div className="w-full px-[4rem] py-[3rem] flex flex-col" style={{paddingTop: '0px'}}>
            dd
          </div> */}
          {/* <div > */}
          {/* <div className="grid gap-x-10 gap-y-10 grid-cols-2 "> */}

          {/* <div>
            Company
            </div> 
            <div>
            About
            </div> */}
          {/* <div>
            Newsroom
            </div>
            <div>
            Careers
            </div> */}

          {/* <div className="space-y-2"> */}
          {/* <div className="space-y-2">
              <img  src={Group65}  alt="fireSpot"/>
            </div> */}
          {/* </div> */}
          {/* </div> */}

          {/* <div className="space-y-2"> */}
          {/* <div className="space-y-2">
            <img  src={Group65}  alt="fireSpot"/>
          </div> */}
          {/* </div> */}

          {/* </div> */}
          {/* <div className="grid gap-x-10 gap-y-10 grid-cols-2 px-[4rem] mt-[2rem]" >

          <div className="grid gap-4 grid-cols-2">
          <div className="space-y-2">
         <img  src={mainLogo}  alt="fireSpot"/>
      </div>
          </div>
          </div> */}
        </div>

        {/* <p className="font-[600] text-[2.25rem] text-left text-black mt-[1.875rem] ml-[4rem]">
          Welcome!
        </p> */}
        {/* <form onSubmit={submit}>
          <div className="grid gap-x-10 gap-y-10 grid-cols-2 px-[4rem] mt-[2rem]">

            <div className="space-y-2">
              <label className="block text-[1.5rem] font-[400] text-[#333333]">
                Name
              </label>
              <div className="w-full inline-flex px-5 items-center space-x-5 bg-gray-50 border border-gray-300 rounded-[0.5rem]">
                <input
                  className="w-full h-full py-4 text-[#333333] focus:outline-none bg-transparent"
                  type="text"
                  value={input.name}
                  onChange={(e) => onChangeHandler(e.target.value, "name")}
                  placeholder="Enter your Name"
                />
              </div>

            </div>

            <div className="space-y-2">
              <label className="block text-[1.5rem] font-[400] text-[#333333]">
                Phone Number
              </label>
              <div className="w-full inline-flex px-5 items-center space-x-5 bg-gray-50 border border-gray-300 rounded-[0.5rem]">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={input.phone}
                  onChange={(phone: string) => onChangeHandler(phone, "phone")}
                  className="w-full h-full py-4 text-[#333333] focus:outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[1.5rem] font-[400] text-[#333333]">
                Year of Birth
              </label>
              <div className="w-full inline-flex px-5 items-center space-x-5 bg-gray-50 border border-gray-300 rounded-[0.5rem]">
                <DatePicker
                  selected={input.age}
                  placeholderText="Enter DOB"
                  onChange={(date: Date) => onChangeHandler(date, "age")}
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
            </div>

            <div className="space-y-2">
              <label className="block text-[1.5rem] font-[400] text-[#333333]">
                Gender
              </label>

              <div className="w-full inline-flex  items-center">
                <div className="w-full h-full py-4 focus:outline-none bg-transparent space-x-4">
                  <input type="radio" name="gender" checked={input?.gender === "MALE" ? true : false} value="MALE" onChange={(e) => onChangeHandler(e.target.value, "gender")} />
                  <span className="text-[1.5rem] font-[400] text-[#333333]">Male</span>
                  <input type="radio" name="gender" checked={input?.gender === "FEMALE" ? true : false} value="FEMALE" onChange={(e) => onChangeHandler(e.target.value, "gender")} />
                  <span className="text-[1.5rem] font-[400] text-[#333333]">Female</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Switch.Group>
                <label className="block text-[1.5rem] font-[400] text-[#333333]">
                  Location acess
                </label>
                <div className="w-full inline-flex  items-center space-x-6">
                  <Switch.Label className="text-[1.5rem] font-[400] text-[#333333]">No</Switch.Label>
                  <Switch
                    checked={input?.locationAccess}
                    onChange={(check: boolean) => onChangeHandler(check, "locationAccess")}
                    className={`${input?.locationAccess ? "bg-[#01A4EF]" : "bg-gray-200"} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                  >
                    <span className={`${input?.locationAccess ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                  </Switch>
                  <Switch.Label className="text-[1.5rem] font-[400] text-[#333333]">Yes</Switch.Label>
                </div>
              </Switch.Group>
            </div>
            <div className="space-y-2">
              <div onClick={()=>{
                
                navigate('/forgetPassword');
                // const history = useHistory();
                //   let path = `forgetPassword`; 
                //   history.push(path);

              }}
              >
                forgetPassword
              </div>
            </div>
            


          </div>


          <div className="mt-10 px-[4rem] mb-[2rem]">
            <button
              type="submit"
              className="rounded-[0.75rem] bg-[#01A4EF] text-[1.5rem] px-5 py-2 font-sans font-[700] text-center tracking-normal leading-[2rem] text-[#FFFFFF]"
            >
              {isLoading ? "Saving ..." : "Save"}
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default AdDashboardHome;
