import React, { useState } from "react";

export default function App() {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole) {
      // Здесь можно добавить переход на следующий экран
      console.log("Выбранная роль:", selectedRole);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f0eb] px-4">
      <div className="w-full max-w-sm rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-2">Добро пожаловать</h1>
        <p className="text-center text-gray-600 mb-6">
          Выберите, кто вы — клиент или мастер
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <div
            onClick={() => handleSelect("client")}
            className={`cursor-pointer rounded-2xl p-4 w-32 text-center transition-all ${
              selectedRole === "client"
                ? "border-2 border-pink-400 bg-white"
                : "bg-white border border-transparent"
            }`}
          >
            <img src="/icons/client.png" alt="Клиент" className="mb-2" />
            <span className="font-medium">Клиент</span>
          </div>

          <div
            onClick={() => handleSelect("master")}
            className={`cursor-pointer rounded-2xl p-4 w-32 text-center transition-all ${
              selectedRole === "master"
                ? "border-2 border-pink-400 bg-white"
                : "bg-white border border-transparent"
            }`}
          >
            <img src="/icons/master.png" alt="Мастер" className="mb-2" />
            <span className="font-medium">Мастер</span>
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedRole}
          className={`w-full py-3 text-white rounded-2xl transition-all ${
            selectedRole
              ? "bg-pink-500 hover:bg-pink-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
}
