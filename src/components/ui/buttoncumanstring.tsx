export function Buttoncumanstring({ text }: { text: String }) {
    return <button className="px-4 py-2 tracking-wide text-zinc-500 capitalize font-bold hover:border-b border-black focus:border-b-4 focus:ring-black focus:ring-opacity-90" style={{ whiteSpace: 'nowrap'}}>{text}</button>;
}