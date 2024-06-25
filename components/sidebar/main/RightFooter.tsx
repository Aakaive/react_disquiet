'use client'

import React, {useState, useEffect} from "react";
import Link from "next/link";

const RightFooter = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    
    return (
        <div>
            {/* 푸터 */}
            <div className="items-center flex flex-row flex-wrap">
                {/* 랲퍼 */}
                <Link href={"#"} className="footer-item">슬랙봇</Link>
                <p className="footer-dot">•</p>
                <Link href={"#"} className="footer-item">매거진</Link>
                <p className="footer-dot">•</p>
                <Link href={"#"} className="footer-item">문의</Link>
                <p className="footer-dot">•</p>
                <Link href={"#"} className="footer-item">이용약관</Link>
                <p className="footer-dot">•</p>
                <Link href={"#"} className="footer-item">개인정보처리방침</Link>
                <p className="footer-dot">•</p>
                <Link href={"#"} className="footer-item">커뮤니티 가이드라인</Link>
                <p className="footer-dot">•</p>
                <Link href={"#"} className="footer-item">스토어</Link>
            </div>
            <div className="h-px my-2 mx-0 w-full bg-[rgb(234,234,236)]">
                {/* 세퍼레이터 */}
            </div>
            <div className="flex flex-col ml-[-4px] text-[12px] leading-[18px] text-[rgb(142,142,142)] gap-[4px]">
                {/* 사업자 정보 */}
                <div className="items-center flex leading-[13.2px] cursor-pointer" onClick={handleToggle}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
                            className={`${isToggled ? "rotate-90" : "rotate-0"} align-middle transition-all duration-100 ease-out fill-[rgb(196,196,196)]`}
                    >
                        <path d="M14.959 12.0393C15.3281 11.8284 15.3193 11.2922 14.959 11.0813L9.89648 8.09302C9.50977 7.87329 9 8.05786 9 8.48853V14.6233C9 15.054 9.4834 15.2649 9.89648 15.0188L14.959 12.0393Z"></path>
                    </svg>
                    디스콰이엇 사업자 정보.
                </div>
                <div className={`${isToggled ? "opacity-100 visible max-h-fit" : "opacity-0 invisible max-h-0"} items-center my-[2px] ml-2 mr-1 pl-[15px] overflow-hidden leading-[19.2px] transition-opacity duration-500 ease-in-out`}>
                    주식회사 디스콰이엇 / 대표자: 박현솔 / 사업자등록번호: 274-88-02252 / 통신판매업신고: 2023-서울강남-01585 / 서울특별시 강남구 역삼로 180 2층
                    <div className="mt-[8px]">© 2021 Disquiet</div>
                </div>
            </div>
        </div>
    );
};

export default RightFooter;