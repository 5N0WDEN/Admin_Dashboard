import Logo from '../../assets/images/logo.png';

import { MyContext } from '../../App';
import { useContext } from 'react';
import { useEffect } from 'react';

const Login = () => {

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setisHideSidebarAndHeader(true); 
    }, [])

    return (
        <section className="loginSection">
            <div className="loginBox">
                <div className='logo'>
                    <img src={Logo}/>
                </div>
            </div>
        </section>

    )
}

export default Login;