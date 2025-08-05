import React, { useState } from "react";

export default function RoleSelectionScreen() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#eae1ca] px-6 py-10 font-sf">
      {/* Заголовок */}
      <div className="text-center">
        <h1 className="text-white text-2xl font-bold mb-2">Добро пожаловать</h1>
        <p className="text-white text-sm">Выберите, кто вы — клиент или мастер</p>
      </div>

      {/* Выбор */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <div
          onClick={() => setSelected("client")}
          className={`flex flex-col items-center cursor-pointer transition-all ${
            selected === "client" ? "ring-4 ring-[#fe99a9] rounded-xl" : ""
          }`}
        >
          <img
            src="/icons/client.png"
            alt="Клиент"
            className="w-[120px] h-[160px] object-cover rounded-xl"
          />
          <span className="text-white text-lg font-bold mt-2">Клиент</span>
        </div>

        <div
          onClick={() => setSelected("master")}
          className={`flex flex-col items-center cursor-pointer transition-all ${
            selected === "master" ? "ring-4 ring-[#fe99a9] rounded-xl" : ""
          }`}
        >
          <img
            src="/icons/master.png"
            alt="Мастер"
            className="w-[120px] h-[160px] object-cover rounded-xl"
          />
          <span className="text-white text-lg font-bold mt-2">Мастер</span>
        </div>
      </div>

      {/* Кнопка */}
      <button
        className="bg-[#fe99a9] text-white text-lg font-bold w-full py-4 rounded-full mt-10 disabled:opacity-50"
        disabled={!selected}
        onClick={() => {
          console.log("Выбранная роль:", selected);
        }}
      >
        Продолжить
      </button>
    </div>
  );
}
