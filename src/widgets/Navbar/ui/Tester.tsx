// import {useState} from "react";
//
//
// const Tester=()=>{
//
//     const [isAuthModal,setIsAuthModal]=useState(false);
//     const toggleModal=()=>{
//     setIsAuthModal(!isAuthModal);
// }
//
//
//     return(
//         <>
//             {!isAuthModal && <p>14</p>}
//             <button onClick={toggleModal}>pop</button>
//         </>
//     )
// }
// export default Tester;

import { useState } from 'react';

const Tester = () => {
    const [tap, setTap] = useState(false);

    const onTap = () => {
        setTap(!tap);
    };

    return (
        <>
            {!tap && <p>goooooooooooooooooooooooool</p>}
            <button onClick={onTap}>+</button>
        </>
    );
};
export default Tester;
