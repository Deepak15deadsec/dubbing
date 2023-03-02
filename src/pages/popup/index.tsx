import { GrFormClose } from "react-icons/gr";

function MyDialog({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) {
  return (
    <>
      {isOpen && (
        <div className="w-full h-[5rem] bg-[#FFF9E9] flex justify-between items-center space-x-[2rem] px-[1.25rem] rounded-[0.625rem]">
          <p className="text-justify text-[#FFB703] font-[400] text-[1.5rem] leading-[2rem]">
            We are in the final stage of getting licence and permission to launch our platform, please be patient
          </p>
          <GrFormClose
            size={28}
            color="#fff"
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />
        </div>
      )}
    </>
  );
}
export default MyDialog;