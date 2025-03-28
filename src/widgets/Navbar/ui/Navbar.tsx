

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss'

interface NavbarProps{
    className?: string
}

 export const Navbar = ({className}:NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {},[className])}>

    <div className={cls.links}></div>
    <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>Главная</AppLink>
      <AppLink theme={AppLinkTheme.RED} to={"/about"}>О сайте</AppLink>
    </div>
  );
};

export default Navbar;


