import { Tombolfooter } from "./ui/tombolfooter";
import Image from "next/image";
import Nagaforum from "/src/components/ui/asset/nagaforumiterasisemifinal.png";

export function Footer() {
  return <footer className="container max-w-none h-96 justify-center bg-black">

    <div className="pt-6 pl-40 pr-40 pb-14 text-center justify-between flex">
      <div>
        <div className="flex">
          <div>
          <Image
    src={Nagaforum}
    width={100}
    height={100}
    alt="Naga"
  />
          </div>
          <div className="text-white font-extrabold p-11 text-4xl">NAGAFORUM</div>
        </div>
        <div className="pt-10 text-start">
          <p className="text-white text-xl">Pendidikan koding berkualitas dan interaktif</p>
          <p className="text-white text-xl">yang dikelola oleh Mahasiswa ITK dan komunitas.</p>
        </div>
      </div>



      <div className="text-white text-start flex">
        <div>
          <p className="pb-3">Tentang</p>
          <Tombolfooter text={"Tentang Kami"}/>
        </div>
        <div className="pl-10">
          <p className="pb-3">Dukungan</p>
          <div>
          <Tombolfooter text={"FAQ"}/>
          </div>
          <div>
          <Tombolfooter text={"Contribute"}/>
          </div>
          <div>
          <Tombolfooter text={"Kontak Kami"}/>
          </div>
        </div>
        <div className="pl-10">
          <p className="pb-3">Panduan</p>
          <Tombolfooter text={"Panduan Komunitas"}/>
        </div>
        <div className="pl-10">
          <p className="pb-3">Legalisasi</p>
          <Tombolfooter text={"Tentang Kami"}/>
        </div>
      </div>
    </div>

    <div className=" border-t-white text-center border-t-2 text-white">
      <p className="p-4 text-xl">made with love from Kalimantan</p>
    </div>
  </footer>;
}