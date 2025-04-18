import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();

    // useEffect(() => {
    //     if (Math.random() < 0, 1) {
    //         throw new Error('jdiecj');
    //     }
    // }, []);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">

                <Navbar />

                <div className="content-page ">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
