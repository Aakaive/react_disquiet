import React from "react";
import Left from "../sidebar/main/Left";
import Right from "../sidebar/main/Right";
import Center from "./Center";

const Main = () => {

    return (
        <main className="relative grid m-0 max-w-[1280px] px-[16px] py-[8px] z-0 grid-cols-[2.5fr,7fr,3fr] gap-x-[64px]
                min-1280:mx-auto
                max-lg:grid-cols-[1fr]
            "
        >
            <Left />
            {/* 중앙도 컴포넌트 분리하고, 중앙 내부도 컴포넌트 분리하기(포스팅과 콘텐츠 표시 등등으로.) */}
            <Center />
            <Right />
        </main>
    );
};

export default Main;