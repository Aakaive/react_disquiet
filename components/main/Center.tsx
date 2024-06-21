'use client';

import React, { useState } from "react";
import { Virtuoso } from 'react-virtuoso';
import MakePost from "../common/Center/PublishPost";

const loadMoreItems = (startIndex: number, endIndex: number, setItems: React.Dispatch<React.SetStateAction<string[]>>) => {
    const newItems = Array.from({ length: endIndex - startIndex }, (_, index) => `Item ${startIndex + index + 1}`);
    setItems((prevItems) => [...prevItems, ...newItems]);
};

const Center = () => {
    const [items, setItems] = useState<string[]>(Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`));

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
                <Virtuoso
                    useWindowScroll
                    style={{ height: '100%', width: '100%' }}
                    totalCount={items.length}
                    itemContent={(index) => <div className="h-[220px] py-[10px]">{items[index]}</div>}
                    endReached={(endIndex) => loadMoreItems(endIndex, endIndex + 20, setItems)}
                />
            </div>
        </div>
    );
};

export default Center;
