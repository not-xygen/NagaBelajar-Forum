export function Pelajarilebihlanjut({ text }: { text: String }) {
    return <button className="px-2 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-white rounded-lg hover:bg-zinc-500 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-opacity-70" style={{ whiteSpace: 'nowrap'}}>{text}</button>;
}