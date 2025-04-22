import React, { useState } from 'react';
import './App.css';

import dmj from './assets/dmj.svg';
import sbd from './assets/sbd.svg';
import os from './assets/os.svg';
import logo from './assets/logo.svg';

const praktikumData = [
  {
    title: 'DMJ (Desain dan Manajemen Jaringan Komputer)',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.orem ipsum dolor sit amet, consectetuer adipiscing elit., sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    image: dmj,
    bgColor: 'bg-blue-50',
  },
  {
    title: 'SBD (Sistem Basis Data dan Praktikum)',
    description: 'MempLorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.elajari ERD, query SQL, serta membangun frontend sederhana.',
    image: sbd,
    bgColor: 'bg-green-50',
  },
  {
    title: 'OS (Sistem Operasi)',
    description: 'Menjelajahi konsep dasaLorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.r sistem operasi, proses, memori, dan manajemen file.',
    image: os,
    bgColor: 'bg-yellow-50',
  },
];

function Card({ title, description, image, bgColor, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${bgColor} cursor-pointer w-full shadow-md hover:scale-[1.02] transition-transform duration-300 py-12 px-6 my-14`}
    >
      <img src={image} alt={title} className="w-full h-48 object-contain mb-6" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
}

function Detail({ item, onBack }) {
  return (
    <div className="max-w-3xl mx-auto">
      <button onClick={onBack} className="text-blue-600 mb-4 hover:underline">
        ← Kembali ke Home
      </button>
      <div className="bg-white shadow-md p-6">
        <img src={item.image} alt={item.title} className="w-full h-64 object-contain mb-4 bg-gray-50" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-100 p-6 overflow-y-auto">
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-12 h-12 cursor-pointer" onClick={() => setSelected(null)} />
          <div>
            <h1 className="text-3xl font-bold text-blue-700">Praktikum Netlab</h1>
            <p className="text-gray-600">List Praktikum Netlab</p>
          </div>
        </div>
      </header>

      {selected ? (
        <Detail item={selected} onBack={() => setSelected(null)} />
      ) : (
        <div className="flex flex-col">
          {praktikumData.map((item, index) => (
            <Card key={index} {...item} onClick={() => setSelected(item)} />
          ))}
        </div>
      )}

      <footer className="mt-20 text-center text-sm text-gray-500">
        © 2025 Samih Bassam - SBD Modul 8
      </footer>
    </div>
  );
}
