import { useState } from 'react';

const RoleSelectionScreen = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1ed] px-4 font-sf">
      <div className="bg-[#f4f1ed] rounded-3xl shadow-md p-8 w-full max-w-sm flex flex-col items-center">

        <h1 className="text-2xl font-bold text-[#1e1e1e] mb-2 text-center">Добро пожаловать</h1>
        <p className="text-[#555] text-sm mb-6 text-center">Выберите, кто вы — клиент или мастер</p>

        <div className="flex gap-4 mb-8">
          <div
            onClick={() => setSelectedRole('client')}
            className={`flex flex-col items-center bg-white rounded-2xl px-4 py-5 w-32 cursor-pointer transition 
              ${selectedRole === 'client' ? 'ring-2 ring-pink-400' : 'hover:shadow'}`}
          >
            <img src="/icons/client-3d.png" alt="Клиент" className="w-14 h-14 mb-2" />
            <span className="text-sm font-semibold text-[#1e1e1e]">Клиент</span>
          </div>

          <div
            onClick={() => setSelectedRole('master')}
            className={`flex flex-col items-center bg-white rounded-2xl px-4 py-5 w-32 cursor-pointer transition 
              ${selectedRole === 'master' ? 'ring-2 ring-pink-400' : 'hover:shadow'}`}
          >
            <img src="/icons/master-3d.png" alt="Мастер" className="w-14 h-14 mb-2" />
            <span className="text-sm font-semibold text-[#1e1e1e]">Мастер</span>
          </div>
        </div>

        <button
          disabled={!selectedRole}
          className={`w-full py-3 rounded-2xl text-white font-semibold text-base transition
            ${selectedRole ? 'bg-[#ff4d8b] hover:bg-[#ff327b]' : 'bg-pink-200 cursor-not-allowed'}`}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default RoleSelectionScreen;
