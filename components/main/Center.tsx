import React from "react";
import MakePost from "../common/Center/PublishPost";

const Center = () => {
    return (
        <div className="relative mt-[32px] min-w-[478px] max-md:min-w-0">
            {/* 중앙 */}
            <MakePost />
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
            <div className="my-[32px] mx-0">
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
    );
};

export default Center;