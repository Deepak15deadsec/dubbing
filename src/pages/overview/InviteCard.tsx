import React from 'react'

const InviteCard = ({ inviteUrl }: { inviteUrl: string }) => {
    return (
        <>
            <div className="font-[400] text-[1.5rem] p-5 text-black border-[#EEEEEE] border-b-2">
                <p>
                    There are <span className="text-[#FF6154]">1650 </span> users
                    ahead of you
                </p>
            </div>
            <div className="px-[1.2rem] mt-[1.25rem] space-y-3">
                <p className="font-[400] text-[1.5rem] text-black">
                    Interested in priority access?
                </p>
                <p className="font-[600] text-[1rem] text-[#ccc] leading-[21.79px]">
                    Priority acess and additional token can be eared by inviting your
                    fiends.
                </p>
                <p className="font-[600] text-[1rem] text-[#ccc] leading-[21.79px]">
                    more friends join you and your friend earn $5 worth token and you
                    get sooner access
                </p>

                <div className="space-y-4 ">
                    <a href={inviteUrl} target="_blank" className="font-[400] text-[1.25rem] text-[#01A4EF]">{inviteUrl}</a>
                    <div className="flex space-x-5 ">
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
        </>


    )
}

export default InviteCard