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
import { useNavigate } from 'react-router-dom';
import mainLogo from'../../images/logo.png';







interface Setting {
  gender: string;
  name: string;
  age: Date | null;
  phone: string;
  locationAccess: boolean;
}

const Signup = () => {
  const navigate = useNavigate();

  const appContext: any = useContext(AppContext);

  const [input, setInput] = useState<Setting>({
    gender: "",
    name: "",
    phone: "",
    age: null,
    locationAccess: false
  });

  const [errorState, setErrorState] = useState<any>({
    name: false,
    gender: false,
    phone: false,
    age: false,
    location: false
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
      gender: input?.gender
    }

    updateSetting({
      endPoint: `/users/${appContext?.user?.id}`,
      payload: payload
    })
  }

  useEffect(() => {
    let user = appContext?.user;
    if (user) {
      setInput(
        {
          gender: user?.gender,
          name: user?.name,
          phone: user?.phone,
          age: user?.age === null ? null : new Date(user?.age),
          locationAccess: user?.locationAccess
        }
      )
    }
    return () => {
      setInput({
        gender: "",
        name: "",
        age: null,
        phone: "",
        locationAccess: false
      })
    }
  }, [appContext])



  return (
    <div className="w-full px-[4rem] py-[3rem] flex flex-col items-center justify-center">
      <div className="rounded-[10px] w-full h-full  bg-[#FFFFFF] text-[#7FBA00]">
        {/* <p className="font-[600] text-[2.25rem] text-left text-black mt-[1.875rem] ml-[4rem]">
          Welcome!
        </p> */}
        <form onSubmit={submit}>
        {/* <div className="grid gap-x-1 gap-y-1 grid-cols-5 px-[4rem] mt-[2rem]" > */}
        <div className="grid gap-4 grid-cols-2">
          <div>
            <div style={{position: 'absolute',
            width: '50%',
            height: '100%',
            left: '0px',
            top: '0px',
            background: 'radial-gradient(50% 50% at 50% 50%, #508CA0 0%, #15506B 100%)'}} >
              
        <div className="space-y-2">
          <img  src={mainLogo}  alt="fireSpot"/>
        </div>
        <div>
        Acquire customers and grow your business
        </div>
        <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>

            </div>
          </div>
<div className="grid gap-4 grid-cols-1">
  <div>
  Great relationships starts here
  </div>
  <div>
  <label className="block text-[1.5rem] font-[400] text-[#333333]">
                Company Name
              </label>
              <div className="w-full inline-flex px-5 items-center space-x-5 bg-gray-50 border border-gray-300 rounded-[0.5rem]">
                <input
                  className="w-full h-full py-4 text-[#333333] focus:outline-none bg-transparent"
                  type="text"
                  value={input.name}
                  onChange={(e) => onChangeHandler(e.target.value, "name")}
                  // placeholder="Enter your Name"
                />
              </div>
  </div>
  <div>
  <label className="block text-[1.5rem] font-[400] text-[#333333]">
  Website
              </label>
              <div className="w-full inline-flex px-5 items-center space-x-5 bg-gray-50 border border-gray-300 rounded-[0.5rem]">
                <input
                  className="w-full h-full py-4 text-[#333333] focus:outline-none bg-transparent"
                  type="text"
                  value={input.name}
                  onChange={(e) => onChangeHandler(e.target.value, "name")}
                  // placeholder="Enter your Name"
                />
              </div>
  </div>
  <div>
  <label className="block text-[1.5rem] font-[400] text-[#333333]">
  Contact Person
              </label>
              <div className="w-full inline-flex px-5 items-center space-x-5 bg-gray-50 border border-gray-300 rounded-[0.5rem]">
                <input
                  className="w-full h-full py-4 text-[#333333] focus:outline-none bg-transparent"
                  type="text"
                  value={input.name}
                  onChange={(e) => onChangeHandler(e.target.value, "name")}
                  // placeholder="Enter your Name"
                />
              </div>
  </div>
  <div>
  <label className="block text-[1.5rem] font-[400] text-[#333333]">
  Contact Number
              </label>
              <div className="w-full inline-flex px-5 items-center space-x-5 bg-gray-50 border border-gray-300 rounded-[0.5rem]">
                <input
                  className="w-full h-full py-4 text-[#333333] focus:outline-none bg-transparent"
                  type="number"
                  value={input.name}
                  onChange={(e) => onChangeHandler(e.target.value, "name")}
                  // placeholder="Enter your Name"
                />
              </div>
  </div>
<div>
<button
              type="submit"
              className="rounded-[0.75rem] bg-[#01A4EF] text-[1.5rem] px-5 py-2 font-sans font-[700] text-center tracking-normal leading-[2rem] text-[#FFFFFF]"
            >
              Next
            </button>
</div>


</div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
