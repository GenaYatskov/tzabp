import { SearchInput } from '.components/SearchInput'
import { TabsSwitcher } from '.components/TabsSwitcher'
import React, { FC } from 'react'
import { Decode } from './Decode'
import { Outlet } from 'react-router-dom'

export const MainScreen:FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            padding: '25px',
            width: 'auto',
            height: 'auto',
        }}>
            <TabsSwitcher/>
            <Outlet/>
        </div>
    )
}