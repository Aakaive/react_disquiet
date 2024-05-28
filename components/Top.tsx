import Link from 'next/link';
import styles from '@/styles/Top.module.css';

const Top = () => {
    return (
        <div className={styles.top}>
            <div className={styles.top_innerWrapper}>
                <div className={styles.nav_left}>
                    <div className={styles.site_logo}>
                        <div>Disquiet*</div>
                    </div>
                </div>
                <div className={styles.site_menu}>
                    <div>로그인</div>
                </div>
            </div>
        </div>
    );
};

export default Top;