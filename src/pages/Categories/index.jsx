import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]); 
  const [selected, setSelected] = useState([]); 
  const token = localStorage.getItem("token");
  const apiUrl = "http://localhost:3000";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(response.data); 
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategories(); 
  }, [token]); 

  const toggleCategory = (category) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="font-bold mb-6 text-center text-gray-700" style={{ fontSize: "2rem" }}>
        Selecione suas Categorias
      </h2>
      <p className="text-gray-500 text-center mb-4">
        Escolha os serviços que você deseja oferecer no Dou um Help!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-4 flex items-center gap-3 border rounded-xl cursor-pointer transition-all duration-200 bg-gray-50 hover:bg-yellow-100"
            onClick={() => toggleCategory(category.name)}
          >
            <FontAwesomeIcon
              icon={selected.includes(category.name) ? faCheckSquare : faSquare}
              className="text-yellow-500 text-2x1"
            />
            <span className="text-gray-800 font-medium">{category.name}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-6 w-full bg-[#FACC15] text-black py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-yellow-500 transition-all duration-200"
        onClick={() => console.log(selected)}
      >
        Continuar
      </button>
    </div>
  );
}
