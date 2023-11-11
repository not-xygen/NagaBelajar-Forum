export function Buttonmulaidisini({ text }: { text: String }) {
    return <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-zinc-600 rounded-lg hover:bg-zinc-500 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-opacity-70" style={{ whiteSpace: 'nowrap'}}>{text}</button>;
}