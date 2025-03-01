import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [hashPassword, setPassword] = useState("");
  const navigate = useNavigate();
  const apiUrl = "http://localhost:3000"

  const handleLogin = async () => {
    const user = {email, hashPassword}

    try {
        const response = await axios.post(`${apiUrl}/auth/login`,user)
        console.log(response.data);
        

      } catch (err) {
        console.error("Erro ao fazer login:", err)
      }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-lg p-10 space-y-6 shadow-2xl rounded-2xl border border-gray-300 bg-white flex flex-col items-center">
        <img src="/logo.png" alt="Dou Um Help" className="w-50" />
        <h2 className="text-center text-3xl font-extrabold text-black">Login</h2>
        <form className="w-full space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`area-texto w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 ${email ? 'border-yellow-500 focus:ring-yellow-500' : 'border-gray-300 focus:ring-[#FDE018]'}`}
            placeholder="Email"
          />
          <input
            type="password"
            value={hashPassword}
            onChange={(e) => setPassword(e.target.value)}
            className={`area-texto w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 ${hashPassword ? 'border-yellow-500 focus:ring-yellow-500' : 'border-gray-300 focus:ring-[#FDE018]'}`}
            placeholder="Senha"
          />
          <div className="w-full text-right">
            <a href="#" onClick={(e) => {e.preventDefault(); navigate('/forgot-password')}}  className="text-gray-500 text-sm underline">Esqueceu sua senha?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition shadow-md"
            onClick={(e) => {
              e.preventDefault(); 
              handleLogin();
            }}
          >
          Login
          </button>
        </form>
        <p className="text-center text-gray-700 text-sm">
          Você ainda não tem uma conta no Dou um Help? <p>Não perca tempo, <a href="#" onClick={(e) => {e.preventDefault(); navigate('/register')}} className="text-yellow-500 font-semibold underline">Cadastre-se agora!</a></p>
        </p>
      </div>
    </div>
  );
}