'use client'

import React, { useState } from "react";
import TopicButton from "@/components/common/Left/TopicButton";

const Left = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="relative flex flex-col h-full mt-[24px] mb-[32px] gap-[32px] w-[226px] max-1160:w-[180px] max-lg:hidden">
            {/* 왼쪽 상자 배치 */}
            <div className={`sticky top-[92px]`}>
                {/* 왼쪽 상자 */}
                <div className={`${isVisible ? "max-h-[512px]" : "max-h-[164px]"} items-center flex flex-col p-[8px] 
                        rounded-[16px] bg-[rgb(255,255,255)]
                        transition-all transition-delay-0 transition-duration-400 ease-out
                    `}
                >
                    {/* 상자 내용물 배치 */}
                    <div className="flex flex-col w-full gap-[8px]">
                        {/* 상자 내용물 랲퍼 */}
                        <div className="items-center flex gap-[4px] cursor-pointer"
                            onClick={handleToggle}
                        >
                            {/* 토글 (화살표 트랜스폼 로테이트 추가해야 함)*/}
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                className={`${isVisible ? "rotate-90" : "rotate-0"}
                                    fill-[rgb(196,196,196)] 
                                    transition-all transition-delay-0 transition-duration-100 ease-out cursor-pointer
                                `}
                            >
                                <path d="M14.959 12.0393C15.3281 11.8284 15.3193 11.2922 14.959 11.0813L9.89648 8.09302C9.50977 7.87329 9 8.05786 9 8.48853V14.6233C9 15.054 9.4834 15.2649 9.89648 15.0188L14.959 12.0393Z"></path>
                            </svg>
                            <div className="text-[13px] font-medium leading-[19.5px] cursor-pointer">토픽</div>
                        </div>
                        <div className={`${isVisible ? 'flex' : 'hidden'} w-full`}>
                            {/* 토픽 리스트 박스 (늘어나고 줄어들고 있어서 트랜스폼 필요한듯)*/}
                            <div className={` relative items-center flex flex-col mb-[8px] w-full`}>
                                {/* 리스트 배치 */}
                                <div className={`relative flex flex-col h-full left-[4px] max-h-[400px]
                                        overflow-x-auto overflow-y-scroll w-[calc(100%+8px)]
                                        transition-all transition-delay-0 transition-duration-300 ease-in-out
                                        gap-[2px] topic-list
                                    `}
                                >
                                    {/* 리스트 랲퍼 */}
                                    <TopicButton><span>🌕</span>전체</TopicButton>
                                    <TopicButton><span>📡</span>플랫폼</TopicButton>
                                    <TopicButton><span>📷</span>라이프스타일</TopicButton>
                                    <TopicButton><span>💰</span>금융</TopicButton>
                                    <TopicButton><span>👫</span>소셜</TopicButton>
                                    <TopicButton><span>🎙</span>미디어</TopicButton>
                                    <TopicButton><span>✏️</span>교육</TopicButton>
                                    <TopicButton><span>🚲</span>생산성</TopicButton>
                                    <TopicButton><span>🔗</span>블록체인</TopicButton>
                                    <TopicButton><span>💻</span>노코드</TopicButton>
                                    <TopicButton><span>🤖</span>인공지능</TopicButton>
                                    <TopicButton><span>🏘</span>커뮤니티</TopicButton>
                                    <TopicButton><span>📊</span>분석</TopicButton>
                                    <TopicButton><span>🎨</span>디자인</TopicButton>
                                    <TopicButton><span>🧑‍💻</span>개발</TopicButton>
                                    <TopicButton><span>🔮</span>마케팅</TopicButton>
                                    <TopicButton><span>🎮</span>게임</TopicButton>
                                    <TopicButton><span>💳</span>이커머스</TopicButton>
                                </div>
                                <div className="absolute bottom-[-4px] h-[14px] w-full bg-scroll bg-clip-border
                                        bg-[rgba(0,0,0,0)] bg-origin-padding bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,1)]
                                        bg-left-top
                                    "
                                >
                                    {/* 리스트 하단 오버레이(나머지 항목 반투명하게) */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left;