import type { Metadata } from 'next';
import Image from 'next/image';
import profilePic from '../../public/images/profile.png';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
  },
};

export default function Home() {
  return (
    <div className="mt-16 px-8">
      <header className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={profilePic}
            alt="Foto Profil"
            layout="fill" 
            objectFit="cover" 
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="font-bold text-4xl text-zinc-800 mb-2">Tentang Saya</h1>
          <p className="text-base text-zinc-600">
            Halo! Saya Balqis, seorang mahasiswa dengan passion dalam menciptakan pengalaman digital yang menarik dan responsif. Saya memiliki ketertarikan pada [React, Next.js, dan Tailwind CSS].
          </p>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="font-bold text-2xl text-zinc-800 mb-4">Keahlian</h2>
        <ul className="flex flex-wrap gap-3">
          <li className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">React.js</li>
          <li className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Next.js</li>
          <li className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</li>
          <li className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript/TypeScript</li>
          <li className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Git</li>
        </ul>
      </section>

    <section>
        <h2 className="font-bold text-2xl text-zinc-800 mb-4">Kontak & Media Sosial</h2>
        <ul className="space-y-2 text-zinc-600">
          <li>
            Email: <a href="mailto:emailanda@example.com" className="text-teal-500 hover:underline">balqis@gmail.com</a>
          </li>
          <li>
            LinkedIn: <a href="https://linkedin.com/in/namaanda" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">linkedin.com/in/balqis</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/namaanda" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">github.com/balqis</a>
          </li>
          {/* Tambahkan link media sosial lainnya */}
        </ul>
      </section>
    </div>
  );
}