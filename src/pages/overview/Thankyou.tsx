import React from 'react'

const Thankyou = ({ user }: any) => {
    const inviteUrl = `https://avniads.com/r/${user?.referralCode}`
    return (
        <div className='w-full px-[4rem] py-[2rem] flex flex-col items-center justify-center'>
            <div className="z-0">
                <img
                    src="/static/svg/thank-you.svg"
                    alt="Sandeep Nailwal"
                    className="h-[12.5rem] w-[18.5rem] object-contain"
                />
            </div>

            <div className="rounded-[20px] w-[49rem] h-full -mt-[3rem] flex flex-col  justify-center items-center bg-[#FFFFFF] text-[#7FBA00]">
                <p className="font-[400] text-[1.5rem] mt-[3rem] text-center text-black">We have added you our early signup list</p>
                <p className="font-[600] text-[2.2rem] text-center text-black">There are <span className="text-[#FF6154]">3 </span>users ahead of you</p>
                <p className="font-[400] text-[1rem] mb-[3rem] text-center text-black">your seat for <span className="text-[#FF6154]"> {user?.email} </span>is reserverd</p>
            </div>

            <div className="rounded-[10px] w-[49rem] h-full mt-[2rem] space-y-[1rem] flex flex-col  items-center bg-[#FFFFFF] text-[#7FBA00]">
                <p className="font-[400] text-[1.5rem] text-center text-black mt-[1rem]">Interested in priority access?</p>
                <p className="font-[600] text-[1rem] text-center text-[#CCCCCC]">Priority acess and additional token can be eared by inviting your fiends.</p>
                <p className="font-[600] text-[1rem] text-center text-[#CCCCCC] leading-[1.3rem]">more friends join you and your friend earn $5 worth token and you get sooner<br />access</p>
                <a href={inviteUrl} target="_blank" className='font-[400] text-[1.25rem] text-center text-[#01A4EF] '>{inviteUrl}</a>
                <div className="space-y-5 pt-2">

                    <div className="flex space-x-8 mb-[1rem]">
                        <a
                            href={`https://twitter.com/intent/tweet?url=${inviteUrl}&text=Share&via=`}
                            target="_blank"
                        >
                            <img
                                src="/static/svg/tw.svg"
                                alt="Sandeep Nailwal"
                                className="h-[2.6rem] w-[2.6rem] object-contain"
                            />
                        </a>

                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${inviteUrl}`}
                            target="_blank"
                        >
                            <img
                                src="/static/svg/fb.svg"
                                alt="Sandeep Nailwal"
                                className="h-[2.6rem] w-[2.6rem] object-contain"
                            />
                        </a>

                        <a
                            href={`mailto:?subject=share&body=${inviteUrl}`}
                            target="_blank"
                        >
                            <img
                                src="/static/svg/mail.svg"
                                alt="Sandeep Nailwal"
                                className="h-[2.6rem] w-[2.6rem] object-contain"
                            />
                        </a>

                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite?url=${inviteUrl}`}
                            target="_blank"
                        >
                            <img
                                src="/static/svg/in.svg"
                                alt="Sandeep Nailwal"
                                className="h-[2.6rem] w-[2.6rem] object-contain"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thankyou