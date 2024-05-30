import Link from 'next/link';
import React from 'react';
import styles from '@/styles/components/Top.module.css';

const Top = () => {
    return (
        <div className="
            sticky bg-white top-0 bg-opacity-75 shadow-sm z-50
            backdrop-blur-xl backdrop-saturate-150 backdrop-brightness-100
        ">
            <div className="px-4 w-full justify-between relative flex" style={{ maxWidth: '1280px', minHeight: '48px'}}>
                {/* 탑_이너래퍼 */}
                <div className="items-center flex flex-row mr-1 w-full">
                    {/* 탑_좌측 */}
                    <div className={styles.site_logo}>
                        {/* 사이트 로고 */}
                        <Link href="/">
                            Disquiet*
                        </Link>
                    </div>
                    <div className="">
                        {/* 검색창 */}
                    </div>
                </div>
                <div className="items-center justify-center flex flex-row">
                    {/* 탑_우측 */}
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