import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => (

    <Routes>
        {/* <Route path={"/about"} element={<AboutPage />} />//старый роут для сравнения
      <Route path={"/"} element={<MainPage />} /> */}
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>

                )}
            />
        ))}
    </Routes>

);
export default AppRouter;
