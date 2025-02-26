import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask"

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const topics = [
    { id: 1, name: "Precisa de ajuda? A gente dá um help!" },
    { id: 2, name: "Serviços rápidos, práticos e sem dor de cabeça" },
    { id: 3, name: "Profissionais confiáveis para o que você precisar" },
    { id: 4, name: "Seu problema resolvido com um clique" },
    { id: 5, name: "Pequenos reparos, grandes soluções" },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 shadow-2xl rounded-2xl bg-white">
        <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
          <img src="/logo.png" alt="Dou Um Help" className="w-32 md:w-48 mx-auto md:mx-0" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-black">DOU UM HELP!</h2>
          <ul className="space-y-2 text-gray-700">
            {topics.map((topic) => (
              <li key={topic.id} className="font-semibold flex items-center justify-center md:justify-start">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-yellow-400" />
                {topic.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black">Cadastro</h2>
          <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Nome"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Sobrenome"
            />
            <input
              type="text"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="CNPJ"
            />
            <input
              type="(99) 99999-9999"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Telefone"
            />
            <input
              type="(99) 99999-9999"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Celular"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Senha"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Confirme sua Senha"
            />
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition shadow-md"
              >
                Cadastrar
              </button>
            </div>
          </form>
          <p className="text-center text-gray-700 text-sm mt-4">
            Já tem uma conta? <a href="#" onClick={(e) => {e.preventDefault(); navigate('/')}} className="text-yellow-500 font-semibold underline">Faça login aqui!</a>
          </p>
        </div>
      </div>
    </div>
  );
}
