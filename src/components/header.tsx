import { Buttonmulaidisini } from "./ui/buttonmulaidisini";
import { Buttonlogin } from "./ui/buttonlogin";
import { Buttoncumanstring } from "./ui/buttoncumanstring";
import Image from "next/image";
import Nagaforum from "/src/components/ui/asset/nagaforumiterasisemifinal.png"
import Link from 'next/link';

export function Header() {
  return <header className="container max-w-none flex justify-between h-20">
<div className="p-4 pl-60 w-1/3 text-left flex">
  <Image
    src={Nagaforum}
    width={30}
    height={8}
    alt="Rice"
  />
  
</div>

<div className= "p-4 flex">
<div>
    <Buttoncumanstring text={"Semua Path Belajar"}/>
  </div>
<div>
    <Buttoncumanstring text={"Tentang Kami"}/>
  </div>
{/* <div>
    <Buttoncumanstring text={"Forum Diskusi"}/>
  </div> */}
  <div>
  <Link href={{
              pathname: '/forum',
              query: { name: 'test' },
                }}>
                  <Buttoncumanstring text={"forum diskusi"}/>
                </Link>
  </div>
<div>
    <Buttoncumanstring text={"Sandbox"}/>
  </div>
<div>
    <Buttoncumanstring text={"Dukung Kami"}/>
  </div>
  <div className="w-2/3 ml-3 pl-4 border-l-4 border-black container text-center">
  <Buttonlogin text={"Login"}/>
  </div>

  </div>
  </header>
}
