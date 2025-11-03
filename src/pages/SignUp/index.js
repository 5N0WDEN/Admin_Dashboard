import Logo from '../../assets/images/logo.png';
import Pattern from '../../assets/images/pattern.webp';
import { MyContext } from '../../App';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";

import googleIcon from '../../assets/images/googleIcon.png'

const SignUp = () => {
    const context = useContext(MyContext);
        const [isShowPassword, setisShowPassword] = useState(false);
        const [isShowPasswordConform, setisShowPasswordConform] = useState(false);
        const [inputIndex, setInputIndex] = useState(null);
    
        useEffect(()=>{
            context.setisHideSidebarAndHeader(true); 
        }, [])
    
        const focusInput = (index) => {
            setInputIndex(index);
        }
    return (
        <>
            <img src={Pattern} className='loginPattern' alt='background-image'/>
            <section className="loginSection">
                <div className="loginBox mt-0">
                    <div className='wrapper card border'>
                        <div className='logo text-center mb-3'>
                            <img src={Logo} width='60px' alt='utify-logo'/>
                            <h5 className='font-weight-bold'>SignUp to Utify</h5>
                        </div>
                        <form>
                            <div className={`form-group position-relative ${inputIndex===0 && 'focus'}`}>
                                <span className='icon'><FaCircleUser/></span>
                                <input type='text' className='form-control' placeholder='enter your email'
                                onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)}/>
                            </div>
                            <div className={`form-group position-relative ${inputIndex===0 && 'focus'}`}>
                                <span className='icon'><MdEmail/></span>
                                <input type='text' className='form-control' placeholder='enter your email'
                                onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)}/>
                            </div>

                            <div className={`form-group position-relative ${inputIndex===1 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill/></span>
                                <input type={`${isShowPassword===true ? 'text' : 'password'}`} className='form-control' placeholder='enter your password'
                                onFocus={()=>focusInput(2)} onBlur={()=>setInputIndex(null)}/>
                                <span className='toggleShowPassword' onClick={()=>{setisShowPassword(!isShowPassword)}}>
                                    {
                                        isShowPassword === true ?
                                        <IoEyeOff /> : <IoEye />
                                    }
                                    
                                </span>
                            </div>
                            <div className={`form-group position-relative ${inputIndex===1 && 'focus'}`}>
                                <span className='icon'><IoShieldCheckmark/></span>
                                <input type={`${isShowPassword===true ? 'text' : 'password'}`} className='form-control' placeholder='enter your password'
                                onFocus={()=>focusInput(3)} onBlur={()=>setInputIndex(null)}/>
                                <span className='toggleShowPassword' onClick={()=>{setisShowPassword(!isShowPassword)}}>
                                    {
                                        isShowPassword === true ?
                                        <IoEyeOff /> : <IoEye />
                                    }
                                    
                                </span>
                            </div>

                            <div className='form-group'>
                                <Button className='btn-blue btn-big w-100'>Sign In</Button>
                            </div>

                            <div className='form-group text-center mb-0'>
                                <Link to={'/forgot-password'} className='link'>FORGOT PASSWORD</Link>
                                <div className='d-flex align-items-center 
                                justify-content-center or mt-3 mb-3'>
                                    <span className='line'></span>
                                    <span className='txt'>or</span>
                                    <span className='line'></span>
                                </div>

                                <Button variant="outlined" className='w-100 btn-lg btn-big
                                loginWithGoogle'>
                                <img src={googleIcon} width='25px' alt='google-icon'/> &nbsp; Sign In with Google
                                </Button>
                            </div>

                        </form>
                        <div className='mt-3'>
                            <span className='text-center'>
                                Don't hava an account?
                                <Link to={'/signUp'} className='link color ml-2'>
                                Register</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;