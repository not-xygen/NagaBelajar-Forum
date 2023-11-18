export function Tombolsidebar({ text }: { text: String }) {
    return (
        <button className="w-full py-3 font-medium text-start pl-4 tracking-wide text-black capitalize transition-colors duration-300 transform bg-white rounded-lg hover:bg-zinc-300 hover:border-black focus:bg-black hover:text-black focus:border-black focus:text-white" style={{ whiteSpace: 'nowrap'}}>
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-zinc-500 w-2 group-hover:bg-white transition group-focus:bg-white"></div>
            <span className="mx-4 font-medium">{text}</span>
        </button>
    );
 }
 

