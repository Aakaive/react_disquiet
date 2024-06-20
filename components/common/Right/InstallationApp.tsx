import React, {useState, useEffect} from "react";

const LinkInstallApp = () => {
    return (
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
    );
};

export default LinkInstallApp;