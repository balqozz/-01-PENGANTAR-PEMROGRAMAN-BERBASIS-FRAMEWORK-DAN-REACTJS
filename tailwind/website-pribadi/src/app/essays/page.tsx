import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Esai',
  description: 'Halaman untuk menampilkan daftar artikel yang telah ditulis.',
  openGraph: {
    title: 'Esai',
    description: 'Halaman untuk menampilkan daftar artikel yang telah ditulis.',
  },
};

export default function Projects() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
      </header>
    </div>
  );
}
   