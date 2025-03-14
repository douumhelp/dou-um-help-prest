import React, { useState } from 'react';
import { Bell, X, BellPlusIcon } from 'lucide-react';     

const NotificationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    "Você recebeu uma resposta do cliente. Dê uma olhada na sua caixa de entrada!",
    "Parabéns! Uma nova avaliação foi deixada para o seu serviço.",
    "Novo serviço disponível! Confira as novas oportunidades perto de você",
    "Você finalizou um serviço! Parabéns, aguarde a avaliação do cliente."
  ];

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button
        className="text-gray-700 hover:bg-gray-200 p-3 rounded-lg transition duration-300"
        onClick={toggleModal}
      >
        <Bell size={24} />
      </button>

      {isOpen && (
        <div
          id="modal-overlay"
          onClick={closeModal}
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full animate__animated animate__fadeIn"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800">Notificações</h2>
              <button onClick={toggleModal} className="text-gray-500 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>

            <div className="mt-4">
              <ul className="space-y-3">
                {notifications.map((notification, index) => (
                  <li key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition duration-200">
                    <div className="bg-yellow-500 text-white p-2 rounded-full">
                        <BellPlusIcon/>
                    </div>
                    <span className="text-gray-700">{notification}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={toggleModal}
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationModal;
