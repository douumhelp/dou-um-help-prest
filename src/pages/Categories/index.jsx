import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";

const categories = {
    "Serviço Doméstico": ["Encanador", "Eletricista", "Pintor", "Pedreiro", "Diarista", "Jardinagem", "Design de Interiores", "Instalador de eletrônicos (Antena, TV a cabo)", "Carpinteiro"],
    "Serviços de Software": ["Programação Front End", "Programador Backend", "Gestão de Projeto", "Suporte em TI", "Tester de Software", "Analista de Software", "Consultor de Software"],
    "Serviço Online": ["Editor de Vídeo", "Editor de Imagem", "Redator", "Media Design", "Filmagem (Cameraman)", "Áudio", "Tradutor"],
    "Serviço Veicular": ["Mecânico De Carro", "Manobrista", "Elétrica Mecânica", "Mecânico de Moto", "Gasolina (pessoa que dá um help levando gasolina no galão)"],
    "Serviço de Pet": ["Cuidador de Pet", "Hospedagem de Pet", "Vacinação de Pet", "Adestrador", "Tosador"],
    "Serviço Humano": ["Cuidador de Idosos", "Cuidador de criança", "Professor Ensino Fundamental I", "Professor Ensino Fundamental II", "Professor Ensino Médio", "Professor Ensino Faculdade", "Cuidador de pessoa com Deficiência", "Acompanhante"],
    "Serviços Comercial": ["Vendedor", "Diarista Comercial", "Segurança", "Garçom", "Cozinheiro", "Personal Training", "Contador", "Produtor de Festa"],
    "Outros": ["Outros"]
};

export default function Categories() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (category) => {
        setSelectedCategories((prev) => 
            prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
        );
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
            <h2 className="font-bold mb-6 text-center text-gray-700" style={{ fontSize: "2rem" }}>Selecione suas Categorias</h2>
            <p className="text-gray-500 text-center mb-4">Escolha os serviços que você deseja oferecer no Dou um Help!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(categories).map(([category, services]) => (
                    <div key={category} className="p-4 border rounded-xl bg-gray-50">
                        <div 
                            className="flex items-center gap-3 cursor-pointer transition-all duration-200 hover:bg-yellow-100 p-2 rounded"
                            onClick={() => toggleCategory(category)}
                        >
                            <FontAwesomeIcon icon={selectedCategories.includes(category) ? faCheckSquare : faSquare} className="text-yellow-500 text-2xl"/>
                            <span className="text-gray-800 font-medium">{category}</span>
                        </div>
                        {selectedCategories.includes(category) && (
                            <ul className="mt-2 pl-6 text-gray-600">
                                {services.map(service => (
                                    <li key={service} className="list-disc">{service}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <button className="mt-6 w-full bg-[#FACC15] text-black py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-yellow-500 transition-all duration-200" onClick={() => console.log(selectedCategories)}>
                Continuar
            </button>
        </div>
    );
}