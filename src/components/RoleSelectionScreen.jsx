import { useState } from "react";

export default function RoleSelectionScreen() {
  const [selected, setSelected] = useState("");

  return (
    <div className="h-screen flex flex-col justify-between items-center bg-[#fdf8f4] px-4 py-6">
      {/* Верх */}
      <div className="text-center">
        <h1 className="text-[36px] leading-[43px] text-black font-bold">Добро пожаловать</h1>
        <p className="text-[20px] mt-2 text-black">Выберите, кто вы — клиент или мастер?</p>
      </div>

      {/* Центр — аватарки */}
      <div className="flex gap-4">
        <div
          onClick={() => setSelected("client")}
          className={`flex flex-col items-center cursor-pointer transition-all rounded-xl overflow-hidden ${
            selected === "client" ? "ring-4 ring-[#fe99a9]" : ""
          }`}
        >
          <img src="/icons/client.png" alt="Клиент" className="w-[214px] h-[286px] object-cover" />
          <span className="mt-[10px] text-[36px] leading-[43px] text-black">Клиент</span>
        </div>

        <div
          onClick={() => setSelected("master")}
          className={`flex flex-col items-center cursor-pointer transition-all rounded-xl overflow-hidden ${
            selected === "master" ? "ring-4 ring-[#fe99a9]" : ""
          }`}
        >
          <img src="/icons/master.png" alt="Мастер" className="w-[214px] h-[286px] object-cover" />
          <span className="mt-[10px] text-[36px] leading-[43px] text-black">Мастер</span>
        </div>
      </div>

      {/* Низ — кнопка */}
      <button
        disabled={!selected}
        className="w-[343px] h-[56px] bg-[#fe99a9] rounded-full text-white text-[20px] font-medium disabled:opacity-50"
        onClick={() => console.log("Выбранная роль:", selected)}
      >
        Продолжить
      </button>
    </div>
  );
}
