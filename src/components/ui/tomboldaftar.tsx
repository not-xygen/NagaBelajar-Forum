export function Tomboldaftar({ text }: { text: String }) {
    return <button className="tracking-wide text-black capitalize hover:border-b border-black justify-start font-regular hover:text-stone-400 " style={{ whiteSpace: 'nowrap'}}>{text}</button>;
}