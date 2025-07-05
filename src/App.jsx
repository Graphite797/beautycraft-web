import { useState } from 'react';

const mastersData = [
  { id: 1, name: 'Анна', service: 'Маникюр', rating: 4.8 },
  { id: 2, name: 'Елена', service: 'Макияж', rating: 4.5 },
  { id: 3, name: 'Ирина', service: 'Парикмахер', rating: 4.9 },
];

function App() {
  const [masters] = useState(mastersData);

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Каталог мастеров BeautyCraft</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {masters.map((master) => (
          <li key={master.id} style={{ marginBottom: 20, padding: 10, border: '1px solid #ccc', borderRadius: 8 }}>
            <h2>{master.name}</h2>
            <p>Услуга: {master.service}</p>
            <p>Рейтинг: {master.rating}</p>
            <button style={{ padding: '8px 12px', cursor: 'pointer' }}>Заказать</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
