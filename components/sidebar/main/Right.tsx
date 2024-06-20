'use client'

import React, {useState, useEffect} from "react";
import Link from "next/link";
import JoinMaker from "@/components/common/Right/JoinMakerItem";
import MakerLog from "@/components/common/Right/TrendingMakerlogItem";

import LinkBanner from "@/components/common/Right/LinkBanner";
import TrendingProduct from "@/components/common/Right/TrendingProduct";

interface Post {
    link: string;
    image: string;
    name: string;
    role: string;
}

const Right = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/data/post.json');
            const data: Post[] = await response.json();
            setPosts(data);
            setLoading(false);
        };
    
        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="mt-[32px] min-w-[246px] max-lg:hidden">
            {/* 우측 배치 */}
            <div className="relative flex flex-col h-full gap-[8px]">
                {/* 우측 랲퍼 */}
                <LinkBanner />
                <TrendingProduct />
                <div className="flex flex-col mb-[20px] gap-[14px]">
                    {/* 배너3 */}
                    <div>
                        {/* 헤더 */}
                        <div className="items-center flex flex-row h-[13px] w-full text-[13px] leading-[13px] font-medium gap-[4px]">
                            <div>🐣</div>
                            <div>새로 조인한 메이커</div>
                        </div>
                    </div>

                    <div className="flex flex-col p-1 bg-white rounded-[14px] gap-[4px]">
                        {/* 메이커 리스트(리스트 랲퍼)) */}
                        {posts.map((post) => (
                            // posts는 json으로부터 가져 온 데이터셋의 집합이므로 아래 컴포넌트 호출은 모든 데이터셋을 각기 전달한 컴포넌트를 호출함.
                            // json에 작성된 데이터셋이 2개라면, 해당 컴포넌트는 두번 호출되고, 3개라면 3번 호출됨.
                            <JoinMaker key={post.name} link={post.link} image={post.image} name={post.name} role={post.role} />
                        ))}
                        <Link href="#"
                            className="m-[6px] p-[6px] text-[12px] leading-[12px] text-center
                                decoration-[rgb(109,85,255)] whitespace-nowrap text-[rgb(109,85,255)]
                                bg-[rgb(240,238,255)] border-[1px] border-[rgba(109,85,255,0)]
                                transition-all transition-delay-0 transition-duration-100 ease-out
                                rounded-[8px]
                                hover:shadow-[0_0_0_3px_rgba(109,85,255,0.4)]
                            "
                        >
                            더보기
                        </Link>
                    </div>
                </div>
                <div className="sticky top-[92px]">
                    {/* 하단 스크롤 시 스틱키 배너 */}
                    <div className="flex flex-col mb-[24px]">
                        {/* 하단 배너1(트렌딩 메이커로그)*/}
                        <div className="items-center flex justify-between mb-[14px] leading-[16px]">
                            {/* 헤더 */}
                            <div className="mr-[6px] text-[13px] leading-[13px] font-medium">
                                {/* 타이틀 */}
                                ✍️ 트렌딩 메이커로그
                            </div>
                            <span className="relative items-center flex h-[14px] justify-center">
                                {/* 정보 아이콘 */}
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99566 14C7.955 14 8.85655 13.8178 9.7003 13.4535C10.5441 13.0892 11.2881 12.5832 11.9325 11.9356C12.5769 11.2879 13.0826 10.5419 13.4495 9.69764C13.8165 8.85336 14 7.95415 14 7C14 6.04585 13.8165 5.14664 13.4495 4.30235C13.0826 3.45807 12.5754 2.7121 11.9282 2.06444C11.2809 1.41677 10.5354 0.910778 9.69164 0.546474C8.84788 0.182158 7.94633 0 6.98699 0C6.03344 0 5.13478 0.182158 4.29103 0.546474C3.44727 0.910778 2.70465 1.41677 2.06315 2.06444C1.42167 2.7121 0.917438 3.45807 0.550463 4.30235C0.183488 5.14664 0 6.04585 0 7C0 7.95415 0.183488 8.85336 0.550463 9.69764C0.917438 10.5419 1.42311 11.2879 2.06748 11.9356C2.71187 12.5832 3.45594 13.0892 4.29969 13.4535C5.14345 13.8178 6.0421 14 6.99566 14ZM6.99566 12.6815C6.20969 12.6815 5.4743 12.5355 4.78948 12.2435C4.10464 11.9515 3.5036 11.5452 2.98637 11.0248C2.46914 10.5043 2.0646 9.90004 1.77276 9.2119C1.48091 8.52375 1.33499 7.78645 1.33499 7C1.33499 6.21355 1.47947 5.47625 1.76842 4.7881C2.05738 4.09996 2.46048 3.49566 2.97771 2.97521C3.49494 2.45477 4.09597 2.04853 4.78079 1.75651C5.46563 1.46448 6.20103 1.31847 6.98699 1.31847C7.77874 1.31847 8.51703 1.46448 9.20185 1.75651C9.88668 2.04853 10.4892 2.45477 11.0093 2.97521C11.5294 3.49566 11.9368 4.09996 12.2316 4.7881C12.5263 5.47625 12.6737 6.21355 12.6737 7C12.6737 7.78645 12.5278 8.52375 12.2359 9.2119C11.9441 9.90004 11.5395 10.5043 11.0223 11.0248C10.5051 11.5452 9.90257 11.9515 9.21485 12.2435C8.52714 12.5355 7.7874 12.6815 6.99566 12.6815Z" fill="#bbb"></path><path d="M5.82538 10.7559H8.58204C8.73807 10.7559 8.86955 10.7053 8.97647 10.6041C9.08339 10.5029 9.13684 10.3742 9.13684 10.2181C9.13684 10.0677 9.08339 9.94049 8.97647 9.8364C8.86955 9.73232 8.73807 9.68027 8.58204 9.68027H7.81919V6.43616C7.81919 6.22219 7.76718 6.0516 7.66316 5.92438C7.55913 5.79716 7.41177 5.73356 7.22106 5.73356H5.95542C5.79938 5.73356 5.66646 5.7856 5.55666 5.88969C5.44685 5.99378 5.39194 6.12099 5.39194 6.27134C5.39194 6.42748 5.44685 6.55759 5.55666 6.66168C5.66646 6.76577 5.79938 6.81782 5.95542 6.81782H6.58823V9.68027H5.82538C5.66935 9.68027 5.53643 9.73232 5.42662 9.8364C5.31682 9.94049 5.26192 10.0677 5.26192 10.2181C5.26192 10.3742 5.31682 10.5029 5.42662 10.6041C5.53643 10.7053 5.66935 10.7559 5.82538 10.7559ZM6.92631 4.67532C7.19793 4.67532 7.42621 4.5799 7.61114 4.38906C7.79607 4.19824 7.88854 3.96693 7.88854 3.69514C7.88854 3.42336 7.79607 3.19205 7.61114 3.00121C7.42621 2.81038 7.19793 2.71497 6.92631 2.71497C6.6547 2.71497 6.42498 2.81038 6.23715 3.00121C6.04933 3.19205 5.95542 3.42336 5.95542 3.69514C5.95542 3.96693 6.04933 4.19824 6.23715 4.38906C6.42498 4.5799 6.6547 4.67532 6.92631 4.67532Z" fill="#bbb"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="flex flex-col overflow-hidden p-1 bg-white rounded-[14px]">
                            {/* 바디(메이커로그 리스트) */}
                            <MakerLog link={"#"} rank={1} image={"#"} name={"이름"} tag={"#태그"} title={"메이커로그 제목"}></MakerLog>
                            <MakerLog link={"#"} rank={2} image={"#"} name={"이름"} tag={"#태그"} title={"메이커로그 제목"}></MakerLog>
                            <MakerLog link={"#"} rank={3} image={"#"} name={"이름"} tag={"#태그"} title={"메이커로그 제목"}></MakerLog>
                            <MakerLog link={"#"} rank={4} image={"#"} name={"이름"} tag={"#태그"} title={"메이커로그 제목"}></MakerLog>
                            <MakerLog link={"#"} rank={5} image={"#"} name={"이름"} tag={"#태그"} title={"메이커로그 제목"}></MakerLog>
                        </div>
                    </div>
                    <div className="mb-[24px]">
                        {/* 하단 배너2(커뮤니티) */}
                        <div className="flex mb-[14px] text-[13px] font-medium leading-[13px]">
                            {/* 헤더 */}
                            👋 커뮤니티
                        </div>
                        <div className="flex flex-col p-1 bg-white rounded-[16px]">
                            {/* 바디 */}
                            <Link href="#"
                                className="items-center p-[6px] w-full text-[13px] leading-[19.5px] decoration-[rgb(142,142,142)] text-[rgb(142,142,142)] bg-white border-[1px] border-[rgba(0,0,0,0)] cursor-pointer transition-all transition-duration-100 ease-out rounded-[12px] group hover:text-[rgb(109,85,255)] hover:bg-[rgb(246,246,248)] hover:decoration-[rgb(109,85,255)]"
                            >
                                <span className="relative items-center flex h-fit justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
                                        className="align-middle transition-all transtion-duration-100 ease-out fill-[rgb(142,142,142)] group-hover:fill-[rgb(109,85,255)]"
                                    ><path d="M9.67364 9.55029L9.03931 11.3238H10.3071L9.67364 9.55029Z"></path><path d="M12 2C5.92525 2 1 5.82513 1 10.5438C1 13.5945 3.05883 16.2715 6.15625 17.7823C4.9655 21.8274 4.93433 21.8456 5.136 21.9628C5.389 22.1092 5.71717 21.9583 10.0466 18.9531C10.6809 19.0413 11.3336 19.0876 12 19.0876C18.0748 19.0876 23 15.2625 23 10.5438C23 5.82513 18.0748 2 12 2ZM6.55317 12.9291C6.55317 13.2581 6.26808 13.5263 5.91883 13.5263C5.56958 13.5263 5.2845 13.2581 5.2845 12.9291V9.21484H4.2945C3.95075 9.21484 3.67208 8.94031 3.67208 8.60307C3.67208 8.26583 3.94983 7.9904 4.29358 7.9904H7.54317C7.88692 7.9904 8.16558 8.26492 8.16558 8.60216C8.16558 8.93941 7.886 9.21484 7.54317 9.21484H6.55317V12.9291ZM11.483 13.5181C10.823 13.5181 10.9449 13.0045 10.6406 12.4318H8.7055C8.40392 13 8.52217 13.5181 7.86308 13.5181C7.22783 13.519 7.116 13.1354 7.30942 12.5446L8.82742 8.60853C8.93467 8.30855 9.25917 8.0004 9.67258 7.9913C10.0869 8.0004 10.4123 8.30855 10.5187 8.60853C11.5206 11.6901 12.9515 13.519 11.483 13.5181V13.5181ZM15.0938 13.4345H13.0578C11.9954 13.4345 12.6417 12.0119 12.4501 8.6158C12.4501 8.27128 12.7407 7.9904 13.0982 7.9904C13.4557 7.9904 13.7463 8.27037 13.7463 8.6158V12.2882H15.0947C15.4302 12.2882 15.7024 12.5455 15.7024 12.8609C15.7015 13.1772 15.4293 13.4345 15.0938 13.4345V13.4345ZM20.0612 12.9636C20.0383 13.1281 19.9493 13.2763 19.8146 13.3763C18.9392 14.0317 18.292 12.121 17.4377 11.3119L17.2177 11.5292V12.8927C17.2177 13.2381 16.9335 13.5181 16.5824 13.5181C16.2323 13.5181 15.9481 13.2381 15.9481 12.8927V8.6158C15.9481 8.27128 16.2323 7.9904 16.5824 7.9904C16.9326 7.9904 17.2168 8.27037 17.2168 8.6158V9.95932C18.3873 9.08848 19.0363 7.53225 19.7761 8.26037C20.5021 8.97486 18.9987 9.60026 18.3763 10.462C19.8467 12.4727 20.1263 12.5227 20.0612 12.9636V12.9636Z"></path>
                                    </svg>
                                    <div className="mb-[2px] ml-2 w-full">
                                        카카오톡 오픈 채팅방
                                    </div>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="mb-[20px]">
                        {/* 하단 배너3(디스콰이엇 앱 설치) */}
                        <div className="flex mb-[14px] text-[13px] font-medium leading-[13px] ">
                            {/* 헤더 */}
                            📱 디스콰이엇 앱 설치
                        </div>
                        <div className="flex flex-col p-1 bg-white rounded-[14px]">
                            {/* 바디 */}
                            <div className="items-center flex py-1 pl-[6px] pr-2 text-[13px] leading-[19.5px] font-normal decoration-[rgb(142,142,142)] text-[rgb(142,142,142)] bg-white border-[1px] border-[rgba(0,0,0,0)] cursor-pointer transition-all transtion-duration-100 ease-out rounded-[10px] gap-[4px] hover:bg-[rgb(246,246,248)] hover:decoration-[rgb(109,85,255)] hover:text-[rgb(109,85,255)] group">
                                {/* ios/안드로이드 */}
                                <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" 
                                    className="h-[24px] w-[24px] align-middle fill-[rgb(142,142,142)] transition-all transition-duration-100 ease-out group-hover:fill-[rgb(109,85,255)]"
                                >
                                    <path d="M19.6634 16.4177L20.3567 14.6644H22.3586L21.4085 12.0048L22.5967 9L26 18.0361H23.4902L22.9086 16.4177H19.6634Z"></path><path d="M17.5222 18.0361L21.1655 9L18.7501 9.00001L16.2579 14.8393L14.4857 9.00002H12.6291L10.7262 14.8393L9.38424 12.1785L8.16982 15.9199L9.40282 18.0361H11.7798L13.4994 12.7995L15.1389 18.0361H17.5222Z"></path><path d="M4.29274 14.9341H5.78048C6.23114 14.9341 6.63244 14.8838 6.98438 14.7833L7.36913 13.5979L8.44444 10.285C8.36251 10.1552 8.26897 10.0324 8.16382 9.91668C7.61171 9.30555 6.80392 9 5.74043 9H2V18.0361H4.29274V14.9341ZM6.26199 11.0788C6.47765 11.2959 6.58546 11.5863 6.58546 11.9502C6.58546 12.3169 6.49063 12.6077 6.30098 12.8226C6.09307 13.0615 5.71024 13.1809 5.15251 13.1809H4.29274V10.7533H5.15883C5.67863 10.7533 6.04635 10.8618 6.26199 11.0788Z"></path>
                                </svg>
                                <div className="flex flex-1 items-center justify-between grow shrink basis-0">
                                    iOS / 안드로이드 PWA 앱
                                    <div data-state="closed">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99566 14C7.955 14 8.85655 13.8178 9.7003 13.4535C10.5441 13.0892 11.2881 12.5832 11.9325 11.9356C12.5769 11.2879 13.0826 10.5419 13.4495 9.69764C13.8165 8.85336 14 7.95415 14 7C14 6.04585 13.8165 5.14664 13.4495 4.30235C13.0826 3.45807 12.5754 2.7121 11.9282 2.06444C11.2809 1.41677 10.5354 0.910778 9.69164 0.546474C8.84788 0.182158 7.94633 0 6.98699 0C6.03344 0 5.13478 0.182158 4.29103 0.546474C3.44727 0.910778 2.70465 1.41677 2.06315 2.06444C1.42167 2.7121 0.917438 3.45807 0.550463 4.30235C0.183488 5.14664 0 6.04585 0 7C0 7.95415 0.183488 8.85336 0.550463 9.69764C0.917438 10.5419 1.42311 11.2879 2.06748 11.9356C2.71187 12.5832 3.45594 13.0892 4.29969 13.4535C5.14345 13.8178 6.0421 14 6.99566 14ZM6.99566 12.6815C6.20969 12.6815 5.4743 12.5355 4.78948 12.2435C4.10464 11.9515 3.5036 11.5452 2.98637 11.0248C2.46914 10.5043 2.0646 9.90004 1.77276 9.2119C1.48091 8.52375 1.33499 7.78645 1.33499 7C1.33499 6.21355 1.47947 5.47625 1.76842 4.7881C2.05738 4.09996 2.46048 3.49566 2.97771 2.97521C3.49494 2.45477 4.09597 2.04853 4.78079 1.75651C5.46563 1.46448 6.20103 1.31847 6.98699 1.31847C7.77874 1.31847 8.51703 1.46448 9.20185 1.75651C9.88668 2.04853 10.4892 2.45477 11.0093 2.97521C11.5294 3.49566 11.9368 4.09996 12.2316 4.7881C12.5263 5.47625 12.6737 6.21355 12.6737 7C12.6737 7.78645 12.5278 8.52375 12.2359 9.2119C11.9441 9.90004 11.5395 10.5043 11.0223 11.0248C10.5051 11.5452 9.90257 11.9515 9.21485 12.2435C8.52714 12.5355 7.7874 12.6815 6.99566 12.6815Z" fill="#bbb"></path><path d="M5.82538 10.7559H8.58204C8.73807 10.7559 8.86955 10.7053 8.97647 10.6041C9.08339 10.5029 9.13684 10.3742 9.13684 10.2181C9.13684 10.0677 9.08339 9.94049 8.97647 9.8364C8.86955 9.73232 8.73807 9.68027 8.58204 9.68027H7.81919V6.43616C7.81919 6.22219 7.76718 6.0516 7.66316 5.92438C7.55913 5.79716 7.41177 5.73356 7.22106 5.73356H5.95542C5.79938 5.73356 5.66646 5.7856 5.55666 5.88969C5.44685 5.99378 5.39194 6.12099 5.39194 6.27134C5.39194 6.42748 5.44685 6.55759 5.55666 6.66168C5.66646 6.76577 5.79938 6.81782 5.95542 6.81782H6.58823V9.68027H5.82538C5.66935 9.68027 5.53643 9.73232 5.42662 9.8364C5.31682 9.94049 5.26192 10.0677 5.26192 10.2181C5.26192 10.3742 5.31682 10.5029 5.42662 10.6041C5.53643 10.7053 5.66935 10.7559 5.82538 10.7559ZM6.92631 4.67532C7.19793 4.67532 7.42621 4.5799 7.61114 4.38906C7.79607 4.19824 7.88854 3.96693 7.88854 3.69514C7.88854 3.42336 7.79607 3.19205 7.61114 3.00121C7.42621 2.81038 7.19793 2.71497 6.92631 2.71497C6.6547 2.71497 6.42498 2.81038 6.23715 3.00121C6.04933 3.19205 5.95542 3.42336 5.95542 3.69514C5.95542 3.96693 6.04933 4.19824 6.23715 4.38906C6.42498 4.5799 6.6547 4.67532 6.92631 4.67532Z" fill="#bbb"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="items-center flex py-1 pl-[6px] pr-2 text-[13px] leading-[19.5px] font-normal decoration-[rgb(142,142,142)] text-[rgb(142,142,142)] bg-white border-[1px] border-[rgba(0,0,0,0)] cursor-pointer transition-all transtion-duration-100 ease-out rounded-[10px] gap-[4px] hover:bg-[rgb(246,246,248)] hover:decoration-[rgb(109,85,255)] hover:text-[rgb(109,85,255)] group">
                                {/* 구글 플레이스토어 */}
                                <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" 
                                    className="h-[24px] w-[24px] align-middle fill-[rgb(142,142,142)] transition-all transition-duration-100 ease-out group-hover:fill-[rgb(109,85,255)]"
                                >
                                    <path d="M14.4841 13.4211L16.788 11.0611L7.42031 6.11208C7.19408 5.99268 6.95204 5.97428 6.73258 6.03044L14.4841 13.4211ZM6.02711 6.7443C6.01065 6.81562 6 6.89017 6 6.96827V21.8278C6 21.9156 6.01162 21.9992 6.0326 22.0786L13.4265 14.5045L6.02711 6.7443ZM14.4709 15.5995L6.76001 22.7724C6.97204 22.8199 7.20344 22.7986 7.42031 22.684L16.6008 17.8338L14.4709 15.5995ZM21.484 13.5418L18.4216 11.924L15.634 14.5174L18.2167 16.9802L21.484 15.2539C22.172 14.8905 22.172 13.9056 21.484 13.5418Z"></path>
                                </svg>
                                구글플레이스토어 앱
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>
        </div>
    );
};

export default Right;

