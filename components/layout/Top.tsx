'use client';

import Link from 'next/link';
import React, {useState, useEffect,useRef} from 'react';
import Button from '../common/Top/Button';
import HoverLink from '../common/Top/HoverLink';
import InfoNav from '../common/Top/InfoNav';

const Top = () => {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef2 = useRef<HTMLDivElement>(null);
    const [isExtended, setExtended] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

    const handleToggleOutside = (event: MouseEvent) => {
        if (componentRef2.current && !componentRef2.current.contains(event.target as Node)) {
            setIsVisible(false);
        }
    }

    const handleClickInside = () => {
        setExtended(true);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setExtended(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleToggleOutside);
        return () => {
            document.removeEventListener('click', handleToggleOutside);
        }
    }, []);

    return (
        <div className={`top
            sticky w-full bg-[rgba(255,255,255,0.72)] top-0 shadow-sm z-[50]
            
        `}>
            <div className="px-4 items-center justify-between relative flex mx-auto h-[52px] max-w-[1280px] min-h-[48px]
                    max-md:px-[11.2px]
                "
            >
                {/* 탑_이너래퍼 */}
                <div className="items-center flex flex-row mr-1 w-full">
                    {/* 탑_좌측 */}
                    <div className="flex justify-center pb-1">
                        {/* 사이트 로고 */}
                        <Link href="/">
                            <img className="block max-md:hidden self-center mt-0.5 h-6 max-w-none overflow-clip align-middle cursor-pointer" src="/images/logo_disquiet_dark.25ed11dd7a1fc29c88b98e5487322540.svg"></img>
                            <img className="hidden max-md:block self-center h-[24px] pl-[2px] max-w-none overflow-clip align-middle curdor-pointer" src="/images/logo_symbol.908118e7d652d5bd862c86ea0505e739.svg"></img>
                        </Link>
                    </div>
                    <div ref={componentRef} className="w-full z-[100]">
                        {/* 검색창 래퍼(확장 스크립트 적용시 너비 변화 감안) */}
                        <div className={`${isExtended ? 'max-w-[96%]' : 'max-w-[196px]' } relative flex flex-col ml-6
                                transition-all duration-200 delay-0 ease-out
                                max-md:ml-[12px]
                            `}
                        >
                            <form className={`${isExtended ? "bg-[rgba(255,255,255,1)] shadow-[0_0_0_3px_rgba(109,85,255,0.4)]" : "bg-[rgba(245,245,247,1)]"} flex mt-0 py-1.5 pl-2 pr-3 
                                    border rounded-[10px] border-[rgb(245,245,247)]
                                    transition-all duration-100 delay-0 ease-out
                                    max-lg:mr-[8px]
                                `}
                            >
                                {/* 검색창 */}
                                <svg className="h-5 w-5 mr-1 min-h-5 min-w-5 overflow-hidden align-middle fill-[rgb(142,142,142)]" 
                                    width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* 돋보기 아이콘 */}
                                    <path d="M6.89336 11.7948C7.93159 11.7948 8.88933 11.4648 9.68611 10.9175L12.5433 13.7746C12.6962 13.9276 12.8974 14 13.1066 14C13.5573 14 13.8873 13.6539 13.8873 13.2113C13.8873 13.002 13.8149 12.7928 13.662 12.6479L10.829 9.80684C11.4326 8.98592 11.7867 7.97988 11.7867 6.89336C11.7867 4.19718 9.58954 2 6.89336 2C4.20524 2 2 4.18914 2 6.89336C2 9.58954 4.19718 11.7948 6.89336 11.7948ZM6.89336 10.5956C4.87324 10.5956 3.1992 8.92153 3.1992 6.89336C3.1992 4.87325 4.87324 3.1992 6.89336 3.1992C8.92152 3.1992 10.5875 4.87325 10.5875 6.89336C10.5875 8.92153 8.92152 10.5956 6.89336 10.5956Z"></path>
                                </svg>
                                <input onClick={handleClickInside}
                                    className="flex w-full text-[13px] leading-[14.3px] text-black bg-transparent text-start cursor-text placeholder-[rgb(142,142,142)] focus:outline-none" 
                                    id="search"
                                    type="text"
                                    autoComplete='off'
                                    placeholder={isFocused ? '' : '디스콰이엇 검색하기'}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                >
                                    {/* 검색창 */}
                                </input>
                            </form>
                            <div className={` ${isExtended ? 'flex' : 'hidden'} absolute items-center bottom-auto flex-col left-0 max-h-[605px] 
                                    overflow-x-hidden overflow-y-auto pb-2 px-[14px] pt-[14px] top-[37px] w-full z-[2]
                                    bg-[rgba(245,245,247,0.72)] border-[1px] border-[rgb(224,224,224)]
                                    shadow-[0_2px_6px_0_rgba(0,0,0,0.1)]
                                    backdrop-blur-[20px] backdrop-saturate-[180%]
                                    rounded-[16px]
                                `}
                            >
                                {/* 검색결과 미리보기 창 */}
                                {/* backdrop-filter 설정 시, 하위 요소들이 backdrop-filter 컨테이너에 종속되므로 backdrop-filter가 적용된 요소의 하위 요소에 중복 적용 안됨 -> 해당 요소에 가상 요소 적용해서 컨테이너 분리 */}
                                <div className="my-[16px] mx-0 w-full
                                        text-[14px] leading-[16.8px] text-center break-keep text-[rgb(142,142,142)]
                                    "
                                >
                                    {/* 이너 */}
                                    메이커나 프로덕트, 메이커로그를 검색해보세요 🔍
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-center flex flex-row">
                    {/* 탑_우측 */}
                    <div ref={componentRef2}
                        onClick={handleToggle}
                        className="hidden max-lg:flex w-[32px] items-center justify-center h-[32px] w-[32px] ml-[4px] bg-[rgba(0,0,0,0)] cursor-pointer rounded-[320px]
                            hover:bg-[rgb(246,246,248)]
                        "
                    >
                        {/* 오른쪽 메뉴 토글 버튼 */}
                        <svg className={`${isVisible ? 'block' : 'hidden'} h-5 w-5 stroke-[rgb(142,142,142)]`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {/* X모양 아이콘 */}
                            <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                        </svg>
                        <svg className={`${isVisible ? 'hidden' : 'block'} h-5 w-5 stroke-[rgb(142,142,142)]`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    </div>
                    <div className={`${isVisible ? 'block' : 'hidden'} min-lg:flex relative items-center h-full
                            max-lg:absolute max-lg:flex-col max-lg:top-[56px] max-lg:right-[0.7rem] max-lg:p-[4px] 
                            max-lg:h-fit
                            max-lg:bg-[rgb(255,255,255)] max-lg:shadow-[0_1px_6px_rgba(0,0,0,0.1)]
                            max-lg:rounded-[16px]
                            max-sd:right-[8px]
                        `}
                    >
                        {/* 컬럼 랲퍼 */}
                        <div className={`${isExtended ? 'lg:hidden' : 'lg:flex'} flex-row mr-2 transition-all duration-100 delay-0 ease-out
                                max-lg:flex-col max-lg:mr-0 max-lg:w-[216px] 
                                max-sd:w-[calc(-24px+100vw)]
                            `}
                        >
                            {/* 내비게이션 리스트 */}
                            <div className="relative cursor-default
                                items-center flex flex-col ml-4 pt-[16px] pb-[15px] text-[13px] leading-[1.6em] justify-start
                                text-[rgb(112,112,112)] border-b-[rgba(0,0,0,0)] border-b-[2px]
                                whitespace-nowrap
                                transition-all duration-100 delay-0 ease-out gap-0.5 ${className}
                                min-lg:hover:decoration-[rgb(109,85,255)] min-lg:hover:text-[rgb(109,85,255)] min-lg:hover:border-b-[rgba(109,85,255,1)]
                                max-lg:justify-start max-lg:m-0 max-lg:py-[6px] max-lg:px-[8px] max-lg:w-full
                                max-lg:text-[rgba(0,0,0,0.6)]
                                max-lg:hover:bg-[rgb(246,246,246)] max-lg:hover:text-[rgb(0,0,0)]
                                max-lg:hover:rounded-[12px]
                                max-lg:flex-row
                                max-lg:gap-0
                                group
                                "
                            >
                                {/* 사이트 소개 */}
                                <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" 
                                    className="max-lg:block hidden w-[24px] h-[24px] mr-[4px] overflow-hidden fill-[rgba(0,0,0,0.3)]"
                                >
                                    <path d="M13.9944 23C18.9096 23 23 18.9182 23 14C23 9.08179 18.8984 5 13.9833 5C9.07925 5 5 9.08179 5 14C5 18.9182 9.09041 23 13.9944 23ZM13.9944 21.3048C9.9486 21.3048 6.71641 18.0595 6.71641 14C6.71641 9.94053 9.93746 6.69517 13.9833 6.69517C18.0402 6.69517 21.2836 9.94053 21.2947 14C21.3059 18.0595 18.0514 21.3048 13.9944 21.3048ZM13.9053 11.0112C14.6074 11.0112 15.1536 10.4424 15.1536 9.75093C15.1536 9.04833 14.6074 8.49071 13.9053 8.49071C13.2142 8.49071 12.657 9.04833 12.657 9.75093C12.657 10.4424 13.2142 11.0112 13.9053 11.0112ZM12.4898 18.829H16.0341C16.4353 18.829 16.7585 18.539 16.7585 18.1375C16.7585 17.7472 16.4353 17.4461 16.0341 17.4461H15.0532V13.2751C15.0532 12.7286 14.7857 12.3717 14.2842 12.3717H12.657C12.2557 12.3717 11.9437 12.6729 11.9437 13.0632C11.9437 13.4758 12.2557 13.7658 12.657 13.7658H13.4706V17.4461H12.4898C12.0885 17.4461 11.7653 17.7472 11.7653 18.1375C11.7653 18.539 12.0885 18.829 12.4898 18.829Z"></path>
                                </svg>
                                <div className="flex text-[13px] leading-[20.8px] whitespace-nowrap text-[rgba(0,0,0,0.6)] items-center gap-[2px]">사이트 소개</div>
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
                                <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" 
                                    className="max-lg:block hidden w-[24px] h-[24px] mr-[4px] overflow-hidden fill-[rgba(0,0,0,0.3)]"
                                >
                                    <path d="M13.9912 22.7422C18.9746 22.7422 23.0879 18.6289 23.0879 13.6543C23.0879 8.67969 18.9658 4.56641 13.9824 4.56641C9.00781 4.56641 4.90332 8.67969 4.90332 13.6543C4.90332 18.6289 9.0166 22.7422 13.9912 22.7422ZM13.9912 20.9316C9.95703 20.9316 6.73145 17.6885 6.73145 13.6543C6.73145 9.62012 9.95703 6.38574 13.9824 6.38574C18.0166 6.38574 21.2598 9.62012 21.2686 13.6543C21.2773 17.6885 18.0254 20.9316 13.9912 20.9316ZM16.1797 13.2236C17.085 13.2236 17.8496 12.4062 17.8496 11.3691C17.8496 10.3496 17.085 9.56738 16.1797 9.56738C15.2656 9.56738 14.501 10.3672 14.501 11.3691C14.5098 12.4062 15.2656 13.2236 16.1797 13.2236ZM11.3633 13.3115C12.1543 13.3115 12.8311 12.6084 12.8311 11.6943C12.8311 10.8154 12.1543 10.1299 11.3633 10.1299C10.5811 10.1299 9.9043 10.8242 9.9043 11.7031C9.9043 12.6084 10.5723 13.3115 11.3633 13.3115ZM9.06934 17.0908H12.1895C11.7588 16.458 12.2422 15.2012 13.1738 14.4717C12.708 14.1729 12.1191 13.9443 11.3633 13.9443C9.50879 13.9443 8.30469 15.3154 8.30469 16.4404C8.30469 16.8535 8.50684 17.0908 9.06934 17.0908ZM13.5781 17.0908H18.7637C19.4492 17.0908 19.6865 16.8799 19.6865 16.4932C19.6865 15.4297 18.333 13.9619 16.1797 13.9619C14.0176 13.9619 12.6553 15.4297 12.6553 16.4932C12.6553 16.8799 12.9014 17.0908 13.5781 17.0908Z"></path>
                                </svg>
                                <div className="flex text-[13px] leading-[20.8px] whitespace-nowrap text-[rgba(0,0,0,0.6)] items-center gap-[2px]">메이커 클럽</div>
                            </HoverLink>
                            <HoverLink href="#"> 
                                {/* 채용 공고 */}
                                <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" 
                                    className="max-lg:block hidden w-[24px] h-[24px] mr-[4px] overflow-hidden fill-[rgba(0,0,0,0.3)]"
                                >
                                    <path d="M9.62305 4.47852H18.3154C18.2539 3.69629 17.7881 3.27441 16.9355 3.27441H10.9941C10.1416 3.27441 9.67578 3.69629 9.62305 4.47852ZM8.11133 7.03613H19.8184C19.6953 6.20117 19.2734 5.71777 18.333 5.71777H9.59668C8.65625 5.71777 8.23438 6.20117 8.11133 7.03613ZM9.05176 24.0869H19.1592C20.8379 24.0869 21.8223 23.1025 21.8223 21.2305V11.2812C21.8223 9.40918 20.8379 8.43359 18.9395 8.43359H9.05176C7.15332 8.43359 6.16895 9.40039 6.16895 11.2812V21.2305C6.16895 23.1113 7.15332 24.0869 9.05176 24.0869ZM16.584 17.46C15.5381 17.46 14.6592 16.5371 14.6592 15.3506C14.6504 14.1816 15.5557 13.2764 16.5928 13.2764C17.6299 13.2764 18.5088 14.1641 18.5088 15.3418C18.5088 16.5371 17.6299 17.46 16.584 17.46ZM11.0557 17.5742C10.1504 17.5742 9.37695 16.7744 9.37695 15.7285C9.36816 14.709 10.1504 13.9268 11.0557 13.9268C11.9609 13.9268 12.7344 14.7002 12.7344 15.7197C12.7344 16.7744 11.9697 17.5742 11.0557 17.5742ZM9.07812 22.417C8.22559 22.417 7.80371 22.0039 7.80371 21.125V20.1055C8.33984 19.1914 9.51758 18.3828 11.0557 18.3828C11.7939 18.3828 12.3828 18.5586 12.9189 18.8838C12.0664 19.5254 11.4951 20.7646 11.4951 21.6875C11.4951 21.9775 11.5391 22.2324 11.6621 22.417H9.07812ZM12.998 22.417C12.8398 22.3906 12.6113 22.1445 12.6113 21.7227C12.6113 20.167 14.1494 18.4004 16.584 18.4004C18.1836 18.4004 19.5547 19.2002 20.1963 20.29V21.125C20.1963 22.0039 19.6865 22.417 18.9307 22.417H12.998Z"></path>
                                </svg>
                                <div className="flex text-[13px] leading-[20.8px] whitespace-nowrap text-[rgba(0,0,0,0.6)] items-center gap-[2px]">채용 공고</div>
                            </HoverLink>
                        </div>
                        <div className="h-4 ml-4 mr-4 w-px bg-[rgb(234,234,236)]
                                max-lg:h-px max-lg:w-[calc(100%-8px)] max-lg:mx-0 max-lg:my-1
                            "
                        >
                            {/* 세퍼레이터 */}
                        </div>
                        <div className="flex flex-row
                                max-lg:flex-col max-lg:p-[4px] max-lg:mt-[6px] max-lg:w-full
                                max-lg:gap-[6px]
                            "
                        >
                            {/* 로그인/회원가입 버튼 */}
                            <Button className="hover:bg-[rgb(234,234,236)]">
                                {/* 로그인 */}
                                로그인
                            </Button>
                            <Button className="bg-[rgba(109,85,255,1)] border-[rgba(109,85,255,1)] text-white
                                    hover:bg-[rgb(255,255,255)] hover:text-[rgb(109,85,255)]
                                    hover:shadow-[0_0_0_3px_rgba(109,85,255,0.4)]"
                            >
                                {/* 회원가입 */}
                                회원가입
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;