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
                <div className="items-center flex flex-row mr-1 w-full">
                    <div className={styles.site_logo}>
                        <div>Disquiet*</div>
                    </div>
                </div>
                <div className="items-center justify-center flex flex-row">
                    <div className="align-middle text-center whitespace-nowrap">로그인</div>
                </div>
            </div>
        </div>
    );
};

export default Top;