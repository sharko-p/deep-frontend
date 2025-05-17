import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui';
import {Suspense, useState} from 'react';
import { AppRouter } from './providers/router';
import {Modal} from "shared/ui/Modal/Modal";

const App = () => {
    const { theme } = useTheme();
const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <button onClick={()=>setIsOpen(true)}>toggle</button>
                <Navbar />
                <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                   <p>vofkdkovodkkkkkkkkokooooooooooooooooooooooooooooooooooooooooooooooooosdovkksod</p>
                </Modal>
                <div className="content-page ">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
