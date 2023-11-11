import { Tomboldiskusi } from "@/components/ui/tomboldiskusi"
export default function Forum() {
  return <div className="justify-start flex py-10">
    <section className="pl-60 pt-10">
      <div className="container-md max-w-none text-center">
        <Tomboldiskusi text={"Buat Diskusi"}/>
      </div>
      <div className="container pt-4">
        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Semua Diskusi</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Pertanyaan Saya</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Partisipasi Saya</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Jawaban Terbaik Saya</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Populer Minggu Ini</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Populer Sepanjang Masa</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Terselesaikan</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black  hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Belum Terselesaikan</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black  hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Pertanyaan Terlama</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black  hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Belum Ada Jawaban</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Papan Peringkat</span>
            </a>
        </nav>
      </div>
    </section>
    <section className="pt-10">
      <div className="pl-10">
        <p>place holder search bar</p>
      </div>
    </section>
  </div>
}