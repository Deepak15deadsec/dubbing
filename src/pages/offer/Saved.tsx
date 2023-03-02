import React from "react";
// import Box from "../../../images/yellowbox.png";


const Saved = ({ span, title, content, url }: any) => {
    return (
        <div className="rounded-[1.75rem] bg-[#FFFFFF] p-4 space-y-3 border-2">
            <div className="items-center">
                <img
                    src={url}
                    height={210}
                    width={320}
                    alt="Sandeep Nailwal"
                    className=" object-contain"
                />

            </div>
            <div className="flex space-x-10">
                <p className="text-[1.2rem] font-lettera-medium font-[400]  tracking-normal leading-[1.5rem] text-[#333333]">{title}</p>

                <a href={""}>
                    <img
                        src="/static/svg/savedheart.svg"
                        height={36}
                        width={36}
                        alt="Sandeep Nailwal"
                        className=" object-contain"
                    />
                </a>

            </div>


            <p className=" text-[0.85rem] font-lettera-regular font-[400]  tracking-normal leading-[1.2rem] text-[#AAAAAA]">
                {content}
            </p>

            <div className="flex space-x-36">
                <p>+20 AVNI$</p>
                <button
                    type="submit"
                    className="rounded-[0.5rem] bg-[#01A4EF] text-[1rem] p-2 font-sans font-[400] text-center tracking-normal leading-[1rem] text-[#FFFFFF]"
                >
                    Buy
                </button>
            </div>

        </div>
    );
};

export default Saved;