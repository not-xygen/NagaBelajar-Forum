import Image from "next/image";
import Isoterrain from "/src/app/assets/isoterrain.png";
import Bincang from "/src/app/assets/bincangberbincang.png";
import { Tomboldonasi } from "@/components/ui/tomboldonasi";
import { Pelajarilebihlanjut } from "@/components/ui/pelajarilebihlanjut";
import Link from 'next/link';
import Forum from "./forum/page";
export default function Home() {
  return (
    <div>
    <section className="justify-center">
    <div className="py-16">
      <p className="text-black text-center font-extrabold justify-center text-6xl tracking-widest">Platform Belajar Pemrograman Efektif</p>
      <p className="text-black text-center font-extrabold justify-center text-6xl tracking-widest">Untuk Pemula</p>
      </div>

    <div className="justify-center text-center text-2xl">
      <p>Tingkatkan level pengetahuan Anda melalui sandbox dan aktif di forum. Pelajari</p>
      <div className="flex justify-center">
      <p>beragam topik dasar pemrograman menggunakan</p>
      <p className="font-extrabold pl-2">Python, HTML, CSS, Javascript,</p>
      <p className="pl-2">dan banyak lagi</p>
      </div>
    </div>

  </section>

  <section className="pt-48">
    <div className="justify-center">
      <Image
      src={Isoterrain}
      height={500}
      sizes="(max-width: 1980px) 100vw"
      alt="code terrain"/>
    </div>
  </section>

  <section className="text-center p-11 font-extrabold">ini kartu card</section>

  <section className="container max-w-none h-85 p-7 justify-between flex bg-black">
    <div className=" text-white pt-12 pl-32">
      <p className="font-bold text-3xl">Bingung saat NGODING karena</p>
      <p className="font-bold text-3xl">banyak error?</p>
        <div className="pt-2 pb-2">
          <p>Bertanyalah melalui forum diskusi terkait permasalahanmu dan</p>
          <p>akan segera dijawab oleh para developer ahli.</p>
        </div>
        <ul>
          <li>
            <Link href={{
              pathname: '/forum',
              query: { name: 'test' },
                }}>Forum</Link>
          </li>
        </ul>
    </div>
    <div className="pr-40">
      <Image
      src={Bincang}
      alt="bincang logo"
      width={300}
      height={300}
      />
    </div>
  </section>

  <section className="container max-w-none h-85 py-20">
    <div>
      <div className="text-center">
        <p className="text-black font-bold text-2xl py-5">Dukung Kami!</p>
        <p className="text-stone-500">Project NagaBelajar dibangun dan didanai oleh komunitas. Bergabunglah dengan kami</p>
        <p className="text-stone-500">dalam memberdayakan pelajar di Indonesia dengan mendukung Project NagaBelajar.</p>
      </div>
    </div>
    <div className="text-center space-x-3 space-y-4 px-4">
      <Pelajarilebihlanjut text={"Pelajari lebih lanjut"}/>
      <Tomboldonasi text={"Donasi Sekarang"}/>
    </div>
  </section>
  </div>


  );
}
