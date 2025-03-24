import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "../widgets/Sidebat/ui";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const Component=()=>{
  const { t, i18n } = useTranslation();

  return (
    <div>{t("перевод")}</div>
  )
}

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback=''>
       
        <Navbar />
        <Component/>
        <div className="content-page ">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
