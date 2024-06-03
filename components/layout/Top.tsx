import Link from 'next/link';
import React from 'react';
import styles from '@/styles/components/Top.module.css';
import Button from '../common/Top/Button';
import HoverLink from '../common/Top/HoverLink';
import InfoNav from '../common/Top/InfoNav';

const Top = () => {
    return (
        <div className="
            sticky h-full bg-white top-0 bg-opacity-75 shadow-sm z-50
            backdrop-blur-xl backdrop-saturate-150 backdrop-brightness-100
        ">
            <div className="px-4 w-full justify-between relative flex h-[52px] max-w-[1280px] min-h-[48px]">
                {/* 탑_이너래퍼 */}
                <div className="items-center flex flex-row mr-1 w-full">
                    {/* 탑_좌측 */}
                    <div className="flex justify-center pb-1">
                        {/* 사이트 로고 */}
                        <Link href="/">
                            <img className="self-center mt-0.5 h-6 max-w-none overflow-clip align-middle cursor-pointer" src="/images/logo_disquiet_dark.25ed11dd7a1fc29c88b98e5487322540.svg"></img>
                        </Link>
                    </div>
                    <div className="w-full">
                        {/* 검색창 래퍼(확장 스크립트 적용시 너비 변화 감안) */}
                        <div className="relative flex flex-col ml-6 max-w-[192px]
                            transition-all duration-200 delay-0 ease-out"
                        >
                            <form className="w-full flex mt-0 py-1.5 pl-2 pr-3 
                                bg-[rgb(245,245,247)] border rounded-[10px] border-[rgb(245,245,247)] 
                                transition-all duration-100 delay-0 ease-out
                                "
                            >
                                {/* 검색창 */}
                                <svg className="h-5 w-5 mr-1 min-h-5 min-w-5 overflow-hidden align-middle fill-[rgb(142,142,142)]" 
                                    width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* 돋보기 아이콘 */}
                                    <path d="M6.89336 11.7948C7.93159 11.7948 8.88933 11.4648 9.68611 10.9175L12.5433 13.7746C12.6962 13.9276 12.8974 14 13.1066 14C13.5573 14 13.8873 13.6539 13.8873 13.2113C13.8873 13.002 13.8149 12.7928 13.662 12.6479L10.829 9.80684C11.4326 8.98592 11.7867 7.97988 11.7867 6.89336C11.7867 4.19718 9.58954 2 6.89336 2C4.20524 2 2 4.18914 2 6.89336C2 9.58954 4.19718 11.7948 6.89336 11.7948ZM6.89336 10.5956C4.87324 10.5956 3.1992 8.92153 3.1992 6.89336C3.1992 4.87325 4.87324 3.1992 6.89336 3.1992C8.92152 3.1992 10.5875 4.87325 10.5875 6.89336C10.5875 8.92153 8.92152 10.5956 6.89336 10.5956Z"></path>
                                </svg>
                                <input className="flex w-full text-[13px] leading-[14.3px] text-black bg-transparent text-start cursor-text" 
                                    id="search"
                                    type="text"
                                    placeholder="디스콰이엇 검색하기"
                                >
                                    {/* 검색창 */}
                                </input>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="hidden">
                    {/* 오른쪽 메뉴 토글(반응형) */}
                </div>
                <div className="items-center justify-center flex flex-row">
                    {/* 탑_우측 */}
                    <div className="relative flex items-center h-full">
                        {/* 컬럼 랲퍼 */}
                        <div className="flex flex-row mr-2 transition-all duration-100 delay-0 ease-out">
                            {/* 내비게이션 리스트 */}
                            <div className="relative cursor-default
                                items-center flex flex-col ml-4 pt-[16px] pb-[15px] text-[13px] leading-[1.6em]
                                text-[rgb(112,112,112)] border-b-[rgba(0,0,0,0)] border-b-[2px]
                                whitespace-nowrap cursor-pointer 
                                transition-all duration-100 delay-0 ease-out gap-0.5 ${className}
                                hover:decoration-[rgb(109,85,255)] hover:text-[rgb(109,85,255)] hover:border-b-[rgba(109,85,255,1)]
                                group
                                "
                            >
                                {/* 사이트 소개 */}
                                <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="hidden"><path d="M13.9912 22.7422C18.9746 22.7422 23.0879 18.6289 23.0879 13.6543C23.0879 8.67969 18.9658 4.56641 13.9824 4.56641C9.00781 4.56641 4.90332 8.67969 4.90332 13.6543C4.90332 18.6289 9.0166 22.7422 13.9912 22.7422ZM13.9912 20.9316C9.95703 20.9316 6.73145 17.6885 6.73145 13.6543C6.73145 9.62012 9.95703 6.38574 13.9824 6.38574C18.0166 6.38574 21.2598 9.62012 21.2686 13.6543C21.2773 17.6885 18.0254 20.9316 13.9912 20.9316ZM16.1797 13.2236C17.085 13.2236 17.8496 12.4062 17.8496 11.3691C17.8496 10.3496 17.085 9.56738 16.1797 9.56738C15.2656 9.56738 14.501 10.3672 14.501 11.3691C14.5098 12.4062 15.2656 13.2236 16.1797 13.2236ZM11.3633 13.3115C12.1543 13.3115 12.8311 12.6084 12.8311 11.6943C12.8311 10.8154 12.1543 10.1299 11.3633 10.1299C10.5811 10.1299 9.9043 10.8242 9.9043 11.7031C9.9043 12.6084 10.5723 13.3115 11.3633 13.3115ZM9.06934 17.0908H12.1895C11.7588 16.458 12.2422 15.2012 13.1738 14.4717C12.708 14.1729 12.1191 13.9443 11.3633 13.9443C9.50879 13.9443 8.30469 15.3154 8.30469 16.4404C8.30469 16.8535 8.50684 17.0908 9.06934 17.0908ZM13.5781 17.0908H18.7637C19.4492 17.0908 19.6865 16.8799 19.6865 16.4932C19.6865 15.4297 18.333 13.9619 16.1797 13.9619C14.0176 13.9619 12.6553 15.4297 12.6553 16.4932C12.6553 16.8799 12.9014 17.0908 13.5781 17.0908Z"></path></svg>
                                사이트 소개
                                <div className="hidden absolute box-content flex flex-col p-1 top-[calc(100%+2px)] w-fit
                                    bg-[rgb(255,255,255,0.72)] border-[rgba(0,0,0,0.06)] border-px shadow-[0_0_12px_rgba(0,0,0,0.04)]
                                    transtion-all duration-100 delay-0 ease-out
                                    rounded-[12px] backdrop-blur-[20px] backdrop-saturate-[1.8] backdrop-brightness-[1.1]
                                    group-hover:flex
                                    "
                                >
                                    {/* 사이트 소개 플로팅 리스트 */}
                                    <InfoNav href="#">제품 기능</InfoNav>
                                    <InfoNav href="#">Ethos</InfoNav>
                                    <InfoNav href="#">커뮤니티 가이드라인</InfoNav>
                                </div>
                            </div>
                            <HoverLink href="#">
                                {/* 메이커 클럽 */}
                                메이커 클럽
                            </HoverLink>
                            <HoverLink href="#"> 
                                {/* 채용 공고 */}
                                채용 공고
                            </HoverLink>
                        </div>
                        <div className="h-4 ml-4 mr-4 w-px bg-[rgb(234,234,236)]">
                            {/* 세퍼레이터 */}
                        </div>
                        <div className="flex flex-row">
                            {/* 로그인/회원가입 버튼 */}
                            <Button className="hover:bg-[rgb(234,234,236)]">
                                {/* 로그인 */}
                                로그인
                            </Button>
                            <Button className="bg-[rgb(109,85,255)] border-[rgb(109,85,255)] text-white
                                    hover:bg-[rgb(255,255,255)] hover:text-[rgb(109,85,255)]
                                    hover:shadow-[0_0_0_3px_rgba(109,85,255,0.4)]"
                            >
                                {/* 회원가입 */}
                                회원가입
                            </Button>
                        </div>
                    </div>
                    <div>
                        {/* 내비게이션 리스트 */}
                        <div>
                            {/* 사이트 소개 세부 내비게이션 리스트 */}
                        </div>
                    </div>
                    <div>
                        {/* 세퍼레이터 */}
                    </div>
                    <div>
                        {/* 로그인/회원가입 버튼 */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;