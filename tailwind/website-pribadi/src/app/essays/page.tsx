import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Esai',
  description: 'Halaman untuk menampilkan daftar artikel yang telah ditulis.',
  openGraph: {
    title: 'Esai',
    description: 'Halaman untuk menampilkan daftar artikel yang telah ditulis.',
  },
};

type EssayItemProps = {
  title: string;
  description: string;
  date: string;
  url: string;
};

function EssayItem({ title, description, date, url }: EssayItemProps) {
  return (
    <li>
      <a href={url} className="block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors duration-200">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">{description}</p>
        <time className="text-sm text-gray-500">{date}</time>
      </a>
    </li>
  );
}

// app/essays/page.tsx (lanjutan)

export default function Essays() {
  const essays = [
    {
      title: 'Mengenal Konsep React Hooks',
      description: 'Eksplorasi mendalam tentang useState, useEffect, dan custom hooks dalam React.',
      date: '2025-06-01',
      url: '/essays/react-hooks',
    },
    {
      title: 'Optimalisasi Performa di Next.js',
      description: 'Teknik-teknik untuk meningkatkan kecepatan dan responsivitas aplikasi Next.js Anda.',
      date: '2025-05-15',
      url: '/essays/nextjs-performance',
    },
    {
      title: 'Memulai dengan Tailwind CSS',
      description: 'Panduan cepat untuk mengintegrasikan dan menggunakan Tailwind CSS dalam proyek Anda.',
      date: '2025-04-20',
      url: '/essays/tailwind-css',
    },
    {
      title: 'Pengantar App Router di Next.js 13+',
      description: 'Memahami dasar-dasar App Router dan bagaimana ia mengubah cara kita membangun aplikasi Next.js.',
      date: '2025-03-10',
      url: '/essays/app-router-nextjs',
    },
  ];

  return (
    <div className="mt-16 px-8">
      <header className="mb-10">
        <h1 className="font-bold text-4xl text-zinc-800">Kumpulan Esai</h1>
        <p className="text-base mt-6 text-zinc-600">Berikut adalah daftar artikel dan tulisan yang telah saya buat.</p>
      </header>

      <div className="mt-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essays.map((essay, index) => (
            <EssayItem
              key={index}
              title={essay.title}
              description={essay.description}
              date={essay.date}
              url={essay.url}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
   