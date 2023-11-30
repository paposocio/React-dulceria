import '../../public/logResStyles.css'
import { useState } from 'react';
import { userLogin, userRegister } from '../api/api'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function LogRes() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [loginFormData, setLoginFormData] = useState({});
    const [registerFormData, setregisterFormData] = useState({
        createdAt: new Date().toISOString
    });
    const ruta = useNavigate();


    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const toggleSignUpActive = () => {
        setIsSignUpActive(!isSignUpActive);
    };
    
    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await userRegister(registerFormData);
            console.log(response.request.statusText);
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado correctamente',
                confirmButtonColor: '#ffab2d',
                confirmButtonText: 'Entendido'
            })
        } catch (error) {
            console.error(error.response.data.msg);
        }
    };

    const HandleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await userLogin(loginFormData);
            console.log(response.data.msg);
            ruta('/panel')
        } catch (error) {
            console.error(error.response.data.msg)

            if (error.response.data.msg === 'no existe el user') {
                Swal.fire({
                    icon: 'error',
                    title: 'Su usuario no aparece en nuestra base de datos, cree una cuenta o verifique la informacion',
                    confirmButtonColor: '#ffab2d',
                    confirmButtonText: 'Entendido'
                })
            }else if (error.response.data.msg === 'credenciales invalidas'){
                Swal.fire({
                    icon: 'warning',
                    title: 'Contraseña invalida',
                    confirmButtonColor: '#ffab2d',
                    confirmButtonText: 'Entendido'
                })
            }
        }
    };


    //asignacion de valores al json
    const HandleLoginChange = (event) => {
        setLoginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value,
        });
    };

    const handleRegisterChange = (event) => {
        setregisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <div className={`loginContainer ${isSignUpActive ? 'active' : ''}`}>
                <div className='forms'>
                    <div className='form login'>
                        <span className='title'>Iniciar Sesion {'('}Vendedores{')'} </span>
                        <form onSubmit={HandleLogin}>
                            <div className='input-field'>

                                <input type='email'
                                    onChange={HandleLoginChange}
                                    placeholder='Correo electronico'
                                    required='true'
                                    name='correoElectronico'
                                />

                                <i className='uil uil-envelope icon' />
                            </div>
                            <div className='input-field'>

                                <input
                                    type={passwordShown ? "text" : "password"}
                                    className='password'
                                    placeholder='Contraseña'
                                    required='true'
                                    name='contrasena'
                                    onChange={HandleLoginChange}
                                />

                                <i className='uil uil-lock icon' />
                                <i className={`uil ${passwordShown ? 'uil-eye' : 'uil-eye-slash'} showHidePw`} onClick={togglePasswordVisibility} />
                            </div>
                            <div className='checkbox-text'>
                                <div className='checkbox-content'>
                                    <input type='checkbox' id='logCheck' />
                                    <label htmlFor='logCheck' className='text'>
                                        Recordarme
                                    </label>
                                </div>
                                <a className='text'>
                                    Olvido su contraseña?
                                </a>
                            </div>
                            <div className='input-field button'>
                                <button className='logButton' type='submit'>Entrar</button>
                            </div>
                        </form>
                        <div className='login-signup'>
                            <span className='text'>No esta registrado? |<a className='text signup-link' onClick={toggleSignUpActive}> Cree su cuenta ahora</a></span>
                        </div>
                    </div>
                    {/* Registration Form */}
                    <div className='form signup'>
                        <span className='title'>Registro {'('}Vendedores{')'}</span>
                        <form onSubmit={handleRegister}>
                            <div className='input-field'>
                                <input type='text' name='userName' onChange={handleRegisterChange} placeholder='Nombre de usuario/tienda' required='true' />
                                <i className='uil uil-user' />
                            </div>
                            <div className='input-field'>
                                <input type='text' name='correoElectronico' onChange={handleRegisterChange} placeholder='Correo electronico' required='true' />
                                <i className='uil uil-envelope icon' />
                            </div>
                            <div className='input-field'>
                                <input
                                    type={passwordShown ? "text" : "password"}
                                    className='password'
                                    placeholder='Crea una contraseña'
                                    required='true'
                                    name='contrasena'
                                    onChange={handleRegisterChange}
                                />
                                <i className='uil uil-lock icon' />
                                <i className={`uil ${passwordShown ? 'uil-eye' : 'uil-eye-slash'} showHidePw`} onClick={togglePasswordVisibility} />
                            </div>
                            <div className='checkbox-text'>
                                <div className='checkbox-content'>
                                    <input type='checkbox' id='termCon' />
                                    <label htmlFor='termCon' className='text'>
                                        Acepto los terminos y condiciones
                                    </label>
                                </div>
                            </div>
                            <div className='input-field button'>
                                <button className='logButton' type='submit'>Crear cuenta</button>
                            </div>
                        </form>
                        <div className='login-signup'>
                            <span className='text'>
                                Usuario existente? |
                                <a className='text login-link' onClick={toggleSignUpActive}> Ingrese ahora</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogRes
