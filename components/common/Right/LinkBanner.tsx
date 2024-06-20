'use client'

import React, {useState, useEffect} from "react";
import Link from "next/link";

const images = [
    '/images/052024-maker-sprint-1.jpg',  // 배경 이미지 경로를 여기에 추가하세요
    '/images/052024-maker-sprint-2.jpg',
  ];

const LinkBanner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 2초마다 이미지 전환

        return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 클리어
    }, []);



    return (
        <div className="flex flex-col mb-[24px] w-full">
            {/* 배너1 */}
            <div className={`relative overflow-hidden p-3 z-1 bg-white rounded-[16px]
                    bg-center w-full h-full bg-cover bg-origin-border bg-no-repeat
                `}
                style={{backgroundImage: `url(${images[currentImageIndex]})`, }}
            >
                {/* 배너1 이너 랲퍼 */}
                <div className="pt-[60%] pb-2">
                    {/* 배너1 광고 이미지 표시 구역 */}
                </div>
                <Link href="#"
                    className="relative items-center flex justify-center p-1 z-2 w-full
                        text-[12px] font-medium leading-[12px] text-white
                        bg-[rgb(109,85,255)] border-[1px] border-[rgba(109,85,255,0.1)]
                        cursor-pointer
                        transition-all transition-delay-0 transition-duration-200 ease-in-out
                        backdrop-blur-[8px] rounded-[8px] gap-[4px]
                        group
                    "
                >
                    {/* 배너1 광고 링크 이동 */}
                    메이커 스프린트 15팀 보러가기
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor" 
                        className="relative h-[16px] w-[16px] text-[12px] font-medium leading-[12px] align-middle text-center
                            text-white fill-white cursor-pointer
                            transition-all transition-delay-0 transition-duration-100 ease-out
                            origin-left group-hover:translate-x-[10px]
                        "
                    ><path d="M3.74989 9.75004L12.1274 9.75004L8.46739 13.41C8.17489 13.7025 8.17489 14.1825 8.46739 14.475C8.75989 14.7675 9.23239 14.7675 9.52489 14.475L14.4674 9.53254C14.7599 9.24004 14.7599 8.76754 14.4674 8.47504L9.53239 3.52504C9.23989 3.23254 8.76739 3.23254 8.47489 3.52504C8.18239 3.81754 8.18239 4.29004 8.47489 4.58254L12.1274 8.25004L3.74989 8.25004C3.33739 8.25004 2.99989 8.58754 2.99989 9.00004C2.99989 9.41254 3.33739 9.75004 3.74989 9.75004Z" fill="currentColor"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default LinkBanner;