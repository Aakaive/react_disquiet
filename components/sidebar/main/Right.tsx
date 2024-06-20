'use client'

import React, {useState, useEffect} from "react";
import LinkBanner from "@/components/common/Right/LinkBanner";
import TrendingProduct from "@/components/common/Right/TrendingProduct";
import JoinMaker from "@/components/common/Right/JoinMaker";
import TrendingMakerlog from "@/components/common/Right/TrendingMakerlog";
import LinkCommunity from "@/components/common/Right/LinkCommunity";
import LinkInstallApp from "@/components/common/Right/InstallationApp";
import RightFooter from "./RightFooter";

const Right = () => {
    return (
        <div className="mt-[32px] min-w-[246px] max-lg:hidden">
            {/* 우측 배치 */}
            <div className="relative flex flex-col h-full gap-[8px]">
                {/* 우측 랲퍼 */}
                <LinkBanner />
                <TrendingProduct />
                <JoinMaker />
                <div className="sticky top-[92px]">
                    {/* 하단 스크롤 시 스틱키 배너 */}
                    <TrendingMakerlog />
                    <LinkCommunity />
                    <LinkInstallApp />
                    <RightFooter />
                </div>
            </div>
        </div>
    );
};

export default Right;

