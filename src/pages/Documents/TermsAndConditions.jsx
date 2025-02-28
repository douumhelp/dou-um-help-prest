// src/pages/TermsAndConditions.js

import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Termos e Condições</h2>
        
        <p className="text-gray-600 mb-6">
          Ao utilizar nosso site, você concorda com os seguintes termos:
        </p>
        
        <ul className="text-left text-gray-600 mb-6 space-y-3">
          <li>1. Você não deve usar nosso site para fins ilegais.</li>
          <li>2. Respeitamos sua privacidade e não coletamos informações sem sua permissão.</li>
          <li>3. Podemos alterar esses termos a qualquer momento, por isso recomendamos revisar periodicamente.</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
