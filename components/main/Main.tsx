import React from "react";
import Left from "../sidebar/main/Left";
import Right from "../sidebar/main/Right";
import Link from "next/link";

const Main = () => {

    return (
        <main className="relative grid m-0 max-w-[1280px] px-[16px] py-[8px] z-0 grid-cols-[2.5fr,7fr,3fr] gap-x-[64px]
                min-1280:mx-auto
                max-lg:grid-cols-[1fr]
            "
        >
            <Left />
            <div className="relative mt-[32px] min-w-[478px] max-md:min-w-0">
                {/* 중앙 */}
                <div className="flex flex-col mb-[24px] gap-[6px] max-sd:hidden">
                    {/* 포스팅 항목 랲퍼 */}
                    <div className="items-center flex gap-[8px]">
                        {/* 포스팅 버튼 랩퍼 */}
                        <div className="flex border-[rgba(0,0,0,0)] border-[1px]
                            transition-all transition-delay-0 transition-duration-400 ease-in-out
                            rounded-[24px]
                            "
                        >
                            {/* 유저 프로필 아이콘 */}
                            <svg className="h-[40px] w-[40px] align-middle"
                                width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                            ><rect width="32" height="32" rx="16" fill="#F0EEFF"></rect><path d="M12.5 15C13.3284 15 14 14.3284 14 13.5C14 12.6716 13.3284 12 12.5 12C11.6716 12 11 12.6716 11 13.5C11 14.3284 11.6716 15 12.5 15Z" fill="black"></path><path d="M19.5 15C20.3284 15 21 14.3284 21 13.5C21 12.6716 20.3284 12 19.5 12C18.6716 12 18 12.6716 18 13.5C18 14.3284 18.6716 15 19.5 15Z" fill="black"></path><path d="M20.7001 18.9C19.7001 20.5 17.9001 21.5 16.0001 21.5C14.1001 21.5 12.4001 20.5 11.3001 18.9C11.1001 18.5 11.2001 18.1 11.5001 17.9C11.8001 17.7 12.3001 17.8 12.5001 18.1C13.2001 19.3 14.5001 20 15.9001 20C17.3001 20 18.5001 19.3 19.3001 18.1C19.5001 17.8 20.0001 17.6 20.3001 17.9C20.8001 18.1 20.9001 18.6 20.7001 18.9Z" fill="black"></path>
                            </svg>
                        </div>
                        <button className="items-center flex flex-row h-[34px] m-0 p-[4px] w-full
                                text-[16px] text-black bg-[rgb(255,255,255)] border-[rgba(0,0,0,0)] border-[1px]
                                shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]
                                transition-all transtion-delay-0 transition-duration-150 ease-in-out
                                rounded-[10px] gap-[4px] cursor-pointer
                            "
                        >
                            {/* 포스팅 버튼 */}
                            <svg className="h-[24px] w-[24px] relative overflow-hidden text-[16px] align-middle text-[rgb(0,0,0)] cursor-pointer
                                    fill-[rgba(0,0,0,0.3)]
                                "
                                width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M22.6006 6.75673L21.9349 7.45834L20.568 6.08175L21.2603 5.40678C21.5887 5.07817 22.0946 5.03376 22.3964 5.33573L22.6272 5.57552C22.9645 5.91301 22.9378 6.40148 22.6006 6.75673Z"></path><path d="M13.2453 16.1442L11.4258 16.908C11.2216 16.9879 10.9908 16.757 11.0796 16.5527L11.8784 14.7943L19.92 6.73896L21.2869 8.09779L13.2453 16.1442Z"></path><path d="M11.5328 6.86731H17.5433L15.7433 8.66731H11.5328C10.383 8.66731 9.62891 8.66871 9.0522 8.71583C8.4965 8.76123 8.26581 8.83995 8.13403 8.9071C7.72008 9.11802 7.38352 9.45457 7.1726 9.86853C7.10545 10.0003 7.02673 10.231 6.98133 10.7867C6.93421 11.3634 6.93281 12.1175 6.93281 13.2673V16.4673C6.93281 17.6171 6.93421 18.3712 6.98133 18.9479C7.02673 19.5036 7.10545 19.7343 7.1726 19.8661C7.38352 20.28 7.72008 20.6166 8.13403 20.8275C8.26581 20.8947 8.4965 20.9734 9.0522 21.0188C9.62891 21.0659 10.383 21.0673 11.5328 21.0673H14.7328C15.8826 21.0673 16.6367 21.0659 17.2134 21.0188C17.7691 20.9734 17.9998 20.8947 18.1316 20.8275C18.5455 20.6166 18.8821 20.28 19.093 19.8661C19.1602 19.7343 19.2389 19.5036 19.2843 18.9479C19.3314 18.3712 19.3328 17.6171 19.3328 16.4673V12.3253L21.1328 10.5253V16.4673C21.1328 18.7075 21.1328 19.8276 20.6968 20.6833C20.3133 21.4359 19.7014 22.0478 18.9488 22.4313C18.0931 22.8673 16.973 22.8673 14.7328 22.8673H11.5328C9.2926 22.8673 8.1725 22.8673 7.31685 22.4313C6.5642 22.0478 5.95228 21.4359 5.56879 20.6833C5.13281 19.8276 5.13281 18.7075 5.13281 16.4673V13.2673C5.13281 11.0271 5.13281 9.90699 5.56879 9.05135C5.95228 8.2987 6.5642 7.68678 7.31685 7.30328C8.1725 6.86731 9.2926 6.86731 11.5328 6.86731Z"></path>
                            </svg>
                            <div className="text-[13px] leading-[14.3px] text-[rgb(142,142,142)]">어떤 이야기를 나누고 싶나요?</div>
                        </button>
                        <div className="hidden">
                            {/* 모바일 사이즈 대체 아이콘 */}
                        </div>
                    </div>
                    <div className="relative flex left-[52px] top-[-4px] w-[calc(100%-52px)] gap-[4px]">
                        {/* 프로덕트 공유 버튼 */}
                        <Link className="items-center flex py-[4px] pr-[8px] pl-[4px] 
                            text-[12px] leading-[13.2px] decoration-[rgba(0,0,0,0.5)] decoration-none 
                            text-[rgba(0,0,0,0.5)] bg-[rgb(255,255,255)] cursor-pointer
                            transition=all transition-delay-0 transition-duration-200 ease-in-out rounded-[8px] gap-[2px]" 
                            href="#"
                        >
                            <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-[#2f80ed]"><path d="M13.9912 13.0566L22.3408 8.38086C22.2002 8.24023 22.0332 8.12598 21.8135 8.01172L15.6523 4.54883C15.1074 4.24121 14.5449 4.08301 14 4.08301C13.4463 4.08301 12.8838 4.24121 12.3389 4.54883L6.17773 8.01172C5.9668 8.12598 5.79102 8.24023 5.65039 8.38086L13.9912 13.0566ZM13.3496 23.2959V14.1992L5.06152 9.52344C5.01758 9.69922 5 9.88379 5 10.1035V17.1348C5 18.3916 5.43945 18.8926 6.29199 19.376L13.0947 23.1904C13.1738 23.2344 13.2617 23.2783 13.3496 23.2959ZM14.6416 23.2959C14.7295 23.2783 14.8086 23.2344 14.8965 23.1904L21.6992 19.376C22.5518 18.8926 22.9912 18.3916 22.9912 17.1348V10.1035C22.9912 9.88379 22.9736 9.69922 22.9297 9.52344L14.6416 14.1992V23.2959Z"></path>
                            </svg>
                            프로덕트 공유
                        </Link>
                    </div>
                </div>
                <div className="relative flex flex-col w-full">
                    {/* 포스트 분류 및 정렬 */}
                    <div className="relative items-center flex justify-between">
                        {/* 탭 랲퍼 */}
                        <div className="relative items-center flex gap-[24px]">
                            {/* 좌측 랲퍼 */}
                            <div className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                    text-[rgb(142,142,142)] cursor-pointer
                                    transition-all transition-delay-0 transition-duration-100 ease-out
                                    hover:text-[rgb(109,85,255)] 
                                `}>전체</div>
                            <div className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                    text-[rgb(142,142,142)] cursor-pointer
                                    transition-all transition-delay-0 transition-duration-100 ease-out 
                                    hover:text-[rgb(109,85,255)] 
                                `}>프로덕트</div>
                            <div className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                    text-[rgb(142,142,142)] cursor-pointer
                                    transition-all transition-delay-0 transition-duration-100 ease-out 
                                    hover:text-[rgb(109,85,255)] 
                                `}>메이커로그</div>
                            <div className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                    text-[rgb(142,142,142)] cursor-pointer
                                    transition-all transition-delay-0 transition-duration-100 ease-out 
                                    hover:text-[rgb(109,85,255)] 
                                `}>클럽</div>
                        </div>
                        <div className="relative items-center flex">
                            {/* 우측 랲퍼 */}
                            <button className="relative flex py-[4px] text-[16px] text-start text-[rgb(0,0,0)] rounded-[8px] cursor-default">
                                <div className={`relative items-center flex justify-center py-[4px] px-[6px] z-1
                                        text-[12px] font-medium leading-[13.2px] whitespace-nowrap text-[rgba(0,0,0,0.4)] cursor-pointer rounded-[6px]
                                        transtion-all transition-delay-0 transition-duration-100 ease-out
                                    `}>추천</div>
                                <div className={`relative items-center flex justify-center py-[4px] px-[6px] z-1
                                        text-[12px] font-medium leading-[13.2px] whitespace-nowrap text-[rgba(0,0,0,0.4)] cursor-pointer rounded-[6px]
                                        transtion-all transition-delay-0 transition-duration-100 ease-out
                                    `}>최신</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {/* 메인 포스트 */}
                    <div>
                        {/* 모든 포스트 랲퍼?? 뷰포트 알아보기 */}
                        <div>
                            {/* 리스트 */}
                            <div>
                                {/* 게시글 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Right />
        </main>
    );
};

export default Main;