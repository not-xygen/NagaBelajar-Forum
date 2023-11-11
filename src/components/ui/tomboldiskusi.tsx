export function Tomboldiskusi({ text }: { text: String }) {
    return <button className="w-full py-2 font-medium tracking-wide border-zinc-500 border-b-4 border-r-4 text-white capitalize shadow-md transition-colors duration-300 transform bg-black rounded-lg hover:bg-zinc-500 hover:border-black focus:bg-zinc-500 focus:border-black" style={{ whiteSpace: 'nowrap'}}>{text}</button>;
}