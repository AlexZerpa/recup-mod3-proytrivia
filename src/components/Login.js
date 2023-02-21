import React from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";


const Login = () =>{

    const {register, handleSubmit, formState:{errors}} = useForm()
    const customSubmit = (data,e)=>{
        console.log(data)
        Swal.fire({
            icon:"success",
            title:"Inicio de sesion exitoso"
        })
        e.target.reset()
    }
    return(
        <>  
           
            <h2 className="h2">Inicio de Sesion Usuario</h2>
            <form onSubmit={handleSubmit(customSubmit)} className='form-react'>
                <div className="form-group">
                <div className='form-control'>
                        <label>Correo</label>
                        
                        <input type="text" 
                        placeholder="ejemplo@gmail.com"
                        {...register('correo',
                        {required:{value:true,
                            message:"El correo es Obligatorio"},
                        pattern:{
                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "El formato no es correcto"
                        }                  
                        })}/>
                        {errors.correo && <small className='fail'>{errors.correo.message}</small>}
                </div>
                <div className='form-control'>
                    <label>Contraseña</label>
                    <input type="password" 
                    placeholder='Contraseña'
                    {...register('password',{
                        required:{
                            value: true,
                            message: "El campo es requerido"
                        },
                        minLength:{
                            value: 8,
                            message: "La contraseña debe tener al menos 8 caracteres"
                        }
                    })}/>
                    {errors.password && <small className='fail'>{errors.password.message}</small>}
                </div>
                <button type='submit'>Iniciar Sesion</button>
                <button type='submit'>Registrar</button>       
                </div>
                  
            </form>
        

        </>
    )
}

export default Login
