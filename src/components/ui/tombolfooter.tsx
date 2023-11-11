export function Tombolfooter({ text }: { text: String }) {
    return <button className="tracking-wide text-white capitalize justify-start font-regular hover:text-stone-400 " style={{ whiteSpace: 'nowrap'}}>{text}</button>;
}