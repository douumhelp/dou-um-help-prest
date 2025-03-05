import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


export default function Register() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [hashPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const apiUrl = "http://localhost:3000"
  
  const navigate = useNavigate();


  const topics = [
    { id: 1, name: "Precisa de ajuda? A gente dá um help!" },
    { id: 2, name: "Serviços rápidos, práticos e sem dor de cabeça" },
    { id: 3, name: "Profissionais confiáveis para o que você precisar" },
    { id: 4, name: "Seu problema resolvido com um clique" },
    { id: 5, name: "Pequenos reparos, grandes soluções" },
  ];

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleRegister = async () => {
    const formattedTelephone = mobile.replace(/\D/g, '');
    setTelephone("+55"+mobile)
    setUsername(firstName+lastName)

    const user = {username, firstName, lastName, email, hashPassword, telephone, cnpj}

    if(hashPassword==confirmPassword){
      try {
          const response = await axios.post(`${apiUrl}/auth/register/pj`,user)
          console.log(response.data);

        } catch (err) {
          console.error("Erro ao fazer o cadastro:", err)
          toast.error("Não conseguimos concluir seu cadastro. Verifique as informações e tente novamente.", err)
        }
    }else{
      toast.error("As senhas digitadas não coincidem. Verifique e tente novamente")
    }
  }

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
              className="campo-texto area-texto w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Nome"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="campo-texto area-texto w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Sobrenome"
            />
            <InputMask
              mask="99.999.999/9999-99"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              className="campo-texto area-texto w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="CNPJ"
            />
            <InputMask
              mask="(99) 9999-9999"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="campo-texto area-texto w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Telefone"
            />
            <InputMask
              mask="(99) 9 9999-9999"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="campo-texto area-texto w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Celular"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="campo-texto area-texto w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Email"
            />
            <input
              type="password"
              value={hashPassword}
              onChange={(e) => setPassword(e.target.value)}
              className="campo-texto area-texto w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Senha"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="campo-texto area-texto w-full px-4 py-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#FDE018]"
              placeholder="Confirme sua Senha"
            />
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault(); 
                  handleRegister();
                }}
                className="w-full bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition shadow-md">Cadastrar
              </button>
              <div className="flex items-center mt-4">
                <input id="link-checkbox" type="checkbox" checked={checked} onChange={handleCheckboxChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
                <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-500" >
                  Eu concordo com os <a href="#" onClick={(e) => {e.preventDefault(); window.open("/terms", "_blank"); }} className="text-yellow-500 underline" > termos e condições</a>
                </label>
              </div>
            </div>
          </form>
          <p className="text-center text-gray-700 text-sm mt-4"> Já tem uma conta?
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="text-yellow-500 font-semibold underline">Faça login aqui!</a>
          </p>   
        </div>
      </div>
      <ToastContainer 
          position="top-center" 
          autoClose={3000}        
          newestOnTop={false}  
          rtl={false}             
          pauseOnFocusLoss={false}
          draggable={false}    
        />
    </div>
  );
}
