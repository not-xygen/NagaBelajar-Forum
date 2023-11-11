export function Buttonlogin({ text }: { text: String }) {
    return <button className="px-6 py-2 font-medium tracking-wide text- capitalize transition-colors duration-300 transform rounded-lg hover:bg-zinc-500 focus:outline-none focus:ring focus:ring-black focus:ring-opacity-90" style={{ whiteSpace: 'nowrap'}}>{text}</button>;
}