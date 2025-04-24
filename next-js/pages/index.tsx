import React, { useState } from 'react';
import Link from 'next/link';

type WeatherData = {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
};

const HomePage = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');

  const getWeather = async () => {
    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();

      if (res.ok) {
        setWeather(data);
        setError('');
      } else {
        setError(data.error || 'Gagal mengambil data cuaca');
        setWeather(null);
      }
    } catch {
      setError('Terjadi kesalahan');
      setWeather(null);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Selamat Datang di Website Saya!</h1>
      <p className="mb-4">Ini adalah halaman utama.</p>

      <Link href="/about" className="text-blue-600 underline mb-6 block">
        Tentang Kami
      </Link>

      <div className="border p-4 rounded bg-gray-50">
        <h2 className="text-lg font-semibold mb-2">Cek Cuaca</h2>
        <input
          type="text"
          placeholder="Masukkan nama kota"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={getWeather}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Cek
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {weather && (
          <div className="mt-4">
            <h3 className="text-xl font-bold">{weather.name}</h3>
            <p>Suhu: {weather.main.temp}°C</p>
            <p>Cuaca: {weather.weather[0].description}</p>
            <p>Angin: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
