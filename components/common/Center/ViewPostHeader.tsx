import React from "react";
import Link from "next/link";

const ViewPostHeader = () => {
    return (
        <div className="relative items-start flex justify-between">
            <div className="flex">
                <div className="h-[42px] w-[42px] mr-[8px] ">
                    {/* 유저 프로필 사진 */}
                    <Link href="#" className="flex flex-col h-[42px] w-[42px] mr-[8px] border-[rgba(0,0,0,0)] border-[1px] transition-all duration-400 ease-in-out rounded-[50%]">
                        <div className="h-[40px] w-[40px] min-w-[40px] bg-[rgb(255,255,255)] bg-center bg-[102%] border-[rgba(0,0,0,0)] border-[1px] rounded-[50%]"
                            style={{backgroundImage: `url(${"#"})`}}
                        >

                        </div>
                    </Link>
                    <div>
                        {/* 프로필 미리보기 */}
                    </div>
                </div>
                <div className="flex flex-col mb-[12px] pt-[2px] text-[14px] leading-[18.2px] text-[rgb(112,112,112)]">
                    {/* 유저 정보 */}
                    <div>
                        {/* 유저 이름 */}
                        <span>
                            <span className="mr-[2px] font-medium whitespace-nowrap text-black transition-all duration-100 ease-out">
                                유저이름
                            </span>
                        </span>
                        <span className="leading-[19.6px]">
                            {"님의 "}
                            <span className="text-[rgb(27,206,107)]">
                                {/* 카테고리 분류(메이커로그/프로덕트 등.) 로직 추가 + 첫 게시글이면 분류 앞에 '첫' 수식어 붙이기 */}
                                메이커로그
                            </span>
                        </span>
                    </div>
                    <div className="items-center flex mt-[2px] text-[12px] leading-[18.2px] text-[rgb(142,142,142)] whitespace-nowrap">
                        {/* 직무 */}
                        <div className="overflow-hidden ">
                            {/* 직무명 */}
                            <span className="">
                                {/* 직무 */}
                                <Link href="#" className="text-[rgba(0,0,0,0.4)] decoration-[rgba(0,0,0,0.4)] duration-100">
                                    풀 스택
                                </Link>
                            </span>
                            <span>
                                {/* 소속명 */}
                                {" @"}
                                <Link href="#" className="text-[rgba(0,0,0,0.4)] decoration-[rgba(0,0,0,0.4)] duration-100">
                                    디스콰이엇
                                </Link>
                            </span>
                        </div>
                        <div className="ml-[3px] mr-[6px]">
                            {/* 디바이더 */}
                            •
                        </div>
                        <div className="w-fit">
                            {/* 작성 시간 */}
                            약 12시간 전
                        </div>
                    </div>
                </div>
            </div>
            <button className="items-center flex h-[1.25rem] justify-center mt-[2px] w-[1.25rem] text-[16px] leading-[24px] text-start text-black border-[rgba(0,0,0,0)] border-[1px] transition-all duration-150 ease-in-out rounded-[9999px] p-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    className="aspect-square h-4 w-4 stroke-gray-500 transition-colors group-hover:stroke-primary text-start align-middle
                        "
                    >
                    <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                </svg>
            </button>
        </div>
    );
}

export default ViewPostHeader;