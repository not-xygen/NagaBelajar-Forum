import { Tomboldiskusi } from "./ui/tomboldiskusi"
import { Tombolsidebar } from "./ui/tombolsidebar"
export function Sidebar() {
    return (
    <div className="pl-40">
      <div className="container-md max-w-none text-center">
        <Tomboldiskusi text={"Buat Diskusi"}/>
      </div>
      <div className="container pt-4 ">
          <nav className="pb-2">
          <Tombolsidebar text={"Semua Diskusi"}/>
          </nav>

          <nav className="py-1">
          <Tombolsidebar text={"Pertanyaan Saya"}/>
          </nav>

          <nav className="py-1">
          <Tombolsidebar text={"Partisipasi Saya"}/>
          </nav>

          <nav className="py-1">
          <Tombolsidebar text={"Jawaban Terbaik saya"}/>
          </nav>

          <nav className="py-1">
          <Tombolsidebar text={"Populer Minggu ini"}/>
          </nav>

          <nav className="py-1">
          <Tombolsidebar text={"Populer Sepanjang Masa"}/>
          </nav>

          <nav className="py-1">
          <Tombolsidebar text={"Terselesaikan"}/>
          </nav>

          <nav className="py-1">
          <Tombolsidebar text={"Belum Terselesaikan"}/>
          </nav>

          <nav className="py-1">
          <Tombolsidebar text={"Pertanyaan Terlama"}/>
          </nav>
        
          <nav className="py-1">
          <Tombolsidebar text={"Belum Ada Jawaban"}/>
          </nav>
        
          <nav className="py-1">
          <Tombolsidebar text={"Papan Peringkat"}/>
          </nav>
      </div>
    </div>
    );
}
