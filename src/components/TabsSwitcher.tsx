import React, { FC, useState } from 'react';
import styles from './TabsSwitcher.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

export const TabsSwitcher: FC = () => {

    const [activeTab, setActiveTab] = useState<1 | 2>(1)

    const navigate = useNavigate()

    const handlerChangeTab = (tab: 1 | 2, link:string) => {
        setActiveTab(tab)
        navigate(link)
    }

    return (
        <div className={styles['main-block']}>
            <button onClick={()=>handlerChangeTab(1, '/decode')} className={styles['main-block__tab-block']}>
                <span className={styles[activeTab === 1 ? 'main-block__tab-block__tab_active' : 'main-block__tab-block__tab']}>Vin decoding</span>
                <div className={styles[activeTab === 1 ? 'main-block__tab-block__under-line_active' : 'main-block__tab-block__under-line']}></div>
            </button>
            <div className={styles['main-block__vertical-line']}/>
            <button onClick={()=>handlerChangeTab(2, '/variables')} className={styles['main-block__tab-block']}>
                <span className={styles[activeTab === 2 ? 'main-block__tab-block__tab_active' : 'main-block__tab-block__tab']}>Variables</span>
                <div className={styles[activeTab === 2 ? 'main-block__tab-block__under-line_active' : 'main-block__tab-block__under-line']}></div>
            </button>
        </div>
    );
};
