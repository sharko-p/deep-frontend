import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwither } from 'shared/ui/LangSwither/LangSwither';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((value) => !value);
    };

    const toggle = 'toggle';
    return (
        <div
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <Button onClick={onToggle}>{toggle}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwither className={cls.lang} />
            </div>
        </div>
    );
};
