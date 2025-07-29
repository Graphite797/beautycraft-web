import React, { useState } from 'react';

const RoleSelectionScreen = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleContinue = () => {
    if (selectedRole) {
      // Здесь должен быть переход на следующую вкладку или маршрут
      console.log(`Пользователь выбрал роль: ${selectedRole}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf8f4] px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-[#1e1e1e] mb-2 text-center">Добро пожаловать</h1>
        <p className="text-[#555] text-sm mb-6 text-center">Выберите, кто вы – клиент или мастер</p>

        <div className="flex justify-center gap-4 mb-6">
          <div
            onClick={() => setSelectedRole('client')}
            className={`flex flex-col items-center p-4 rounded-xl cursor-pointer transition border-2 ${selectedRole === 'client' ? 'border-pink-400' : 'border-transparent'}`}
          >
            <img
              src="/icons/client-3d.png"
              alt="Клиент"
              className="w-20 h-20 mb-2"
            />
            <span className="font-medium text-[#1e1e1e]">Клиент</span>
          </div>

          <div
            onClick={() => setSelectedRole('master')}
            className={`flex flex-col items-center p-4 rounded-xl cursor-pointer transition border-2 ${selectedRole === 'master' ? 'border-pink-400' : 'border-transparent'}`}
          >
            <img
              src="/icons/master-3d.png"
              alt="Мастер"
              className="w-20 h-20 mb-2"
            />
            <span className="font-medium text-[#1e1e1e]">Мастер</span>
          </div>
        </div>

        <button
          disabled={!selectedRole}
          onClick={handleContinue}
          className={`w-full py-3 rounded-2xl text-white font-semibold transition ${
            selectedRole ? 'bg-[#ff4d8b] hover:bg-[#ff327b]' : 'bg-pink-200 cursor-not-allowed'
          }`}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default RoleSelectionScreen;
