import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
const [collapsed, setCollapsed]=useState(false)

const onToggle=()=>{
    setCollapsed(value=>!value)
}
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]:collapsed}, [className])}>
        <button onClick={onToggle}>toggle</button>
        </div>
    );
};
