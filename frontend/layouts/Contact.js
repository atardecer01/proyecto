import { useState } from 'react';
import { Header2 } from "./partials/Header";
import Image from "next/image";
import axios from 'axios';
import Link from 'next/link';





const Contact = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [linkHref, setLinkHref] = useState("#");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos al backend
    // por ejemplo, usando una función de envío o una llamada a la API
    // utilizando el valor de 'email' y 'password'
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };



  const handleIncorrectCredentials = () => {
    // Aquí puedes mostrar el cuadro de diálogo o realizar otras acciones necesarias
    alert("Credenciales incorrectas");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
      try {
        const url = "http://localhost:4000/api/usuarios/login"
        const respuesta = await axios.post(url, { email, password });
        const condition = respuesta.data === "ok";
        console.log(condition);
    
        if (condition) {
          setLinkHref("/categories");
       
          window.location.href = "/categories";
        } else {
          setLinkHref("/contact");
          handleIncorrectCredentials();
         
          
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="w-full h-screen flex items-start">
    <div className="relative w-full h-full flex flex-col">
      <div className="absolute top-1/4 left-1/10"></div>
      <div className="w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/Login.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="w-full h-full object-cover"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          />
        </div>
      </div>
    </div>
    <div className="w-1/2 h-full bg-[#ffffff] flex flex-col p-20 justify-between space-y-4">
      <div className="w-full flex flex-col max-w-[550px]">
        <div className="w-full flex flex-col mb-4">
          <h3
            className="text-5xl text-[#49B675] font-semibold mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Bienvenidos!
          </h3>
          <p className="text-sm text-[#49B675] mb-2">
            Conoce sobre la civilización azteca.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
          className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-sm font-medium text-[#49B675] whitespace-nowrap cursor-pointer underline underline-offset-2">
          Olvidé mi contraseña
        </p>
        <div >
        <a href={linkHref}>
        <button className="py-2 px-4 bg-[#49B675] text-white rounded hover:bg-[#3F9256]" onClick={handleSubmit}>
         logearse
        </button>
      </a>
      </div>
      
      </div>
      
      
      { /* <div className="w-full flex items-center justify-center">
        <p className="text-sm font-normal text-[#49B675]">
          ¿No tienes cuenta?
          <span className="font-semibold underline underline-offset-3 cursor-pointer">
            Registrate
          </span>
        </p>
  </div>*/ }
    </div>
  </div>
  )
};

export default Contact;
