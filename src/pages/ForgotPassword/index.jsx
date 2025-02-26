import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-lg p-10 space-y-6 shadow-2xl rounded-2xl border border-gray-300 bg-white flex flex-col items-center">
        <img src="/logo.png" alt="Dou Um Help" className="w-50" />
        <h2 className="text-center text-3xl font-extrabold text-black">Esqueceu sua senha</h2>
        <form className="w-full space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 ${email ? 'border-yellow-500 focus:ring-yellow-500' : 'border-gray-300 focus:ring-[#FDE018]'}`}
            placeholder="Email"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition shadow-md"
          >
            Recuperar Senha
          </button>
        </form>
        <p className="text-center text-gray-700 text-sm">
            Após inserir seu e-mail e clicar no botão acima, verifique sua caixa de entrada. <strong>Você receberá um link válido por 60 minutos</strong> para redefinir sua senha.
        </p>
      </div>
    </div>
  );
}