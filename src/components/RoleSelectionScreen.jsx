import React, { useState } from 'react';

const RoleSelectionScreen = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleContinue = () => {
    if (selectedRole) {
      console.log(`Выбрана роль: ${selectedRole}`);
      // Здесь будет переход дальше
    }
  };

  const getCardClasses = (role) => {
    return `flex flex-col items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
      selectedRole === role ? 'bg-pink-100 ring-4 ring-pink-300' : 'bg-white'
    }`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf8f4] px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-[#1e1e1e] mb-2 text-center">Добро пожаловать</h1>
        <p className="text-[#555] text-sm mb-6 text-center">Выберите, кто вы — клиент или мастер?</p>

        <div className="flex justify-center gap-4 mb-6">
          <div onClick={() => setSelectedRole('client')} className={getCardClasses('client')}>
            <img src="/icons/client-3d.png" alt="Клиент" className="w-20 h-20 mb-2" />
            <span className="font-medium text-[#1e1e1e]">Клиент</span>
          </div>

          <div onClick={() => setSelectedRole('master')} className={getCardClasses('master')}>
            <img src="/icons/master-3d.png" alt="Мастер" className="w-20 h-20 mb-2" />
            <span className="font-medium text-[#1e1e1e]">Мастер</span>
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedRole}
          className={`w-full py-3 rounded-full text-white font-semibold text-lg transition-all duration-300 ${
            selectedRole ? 'bg-pink-400 hover:bg-pink-500' : 'bg-pink-200 cursor-not-allowed'
          }`}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default RoleSelectionScreen;
