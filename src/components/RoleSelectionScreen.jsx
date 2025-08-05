import React, { useState } from "react";

export default function RoleSelectionScreen() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-[#eae1ca] flex flex-col items-center px-5 pt-[61px] pb-[24px] font-sf text-white">
      {/* Заголовок */}
      <h1 className="text-[36px] font-bold leading-[43px] w-[355px] text-left">
        Добро Пожаловать
      </h1>

      {/* Подзаголовок */}
      <p className="mt-[51px] w-[388px] text-[20px] leading-[24px] text-left">
        Выберите, кто вы — клиент или мастер?
      </p>

      {/* Иконки выбора */}
      <div className="flex gap-4 mt-[72px]">
        {/* Клиент */}
        <div
          onClick={() => setSelected("client")}
          className={`flex flex-col items-center cursor-pointer transition-all rounded-xl overflow-hidden ${
            selected === "client" ? "ring-4 ring-[#fe99a9]" : ""  }`}
        >
          <img
            src="/icons/client.png"
            alt="Клиент"
            className="w-[214px] h-[286px] object-cover"
          />
          <span className="mt-[10px] text-[36px] leading-[43px]">Клиент</span>
        </div>

        {/* Мастер */}
        <div
          onClick={() => setSelected("master")}
          className={`flex flex-col items-center cursor-pointer transition-all rounded-xl overflow-hidden ${
            selected === "master" ? "ring-4 ring-[#fe99a9]" : ""  }`}
        >
          <img
            src="/icons/master.png"
            alt="Мастер"
            className="w-[214px] h-[286px] object-cover"
          />
          <span className="mt-[10px] text-[36px] leading-[43px]">Мастер</span>
        </div>
      </div>

      {/* Кнопка */}
      <button
        disabled={!selected}
        className="mt-auto w-[370px] h-[103px] bg-[#fe99a9] rounded-full text-white text-[36px] font-bold disabled:opacity-40"
        onClick={() => console.log("Выбранная роль:", selected)}
      >
        Продолжить
      </button>
    </div>
  );
}
