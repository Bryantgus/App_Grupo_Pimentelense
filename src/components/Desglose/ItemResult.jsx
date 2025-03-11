export default function ItemResult({ label, value }) {
    return (
        <div className="flex gap-2">
            <span className="font-bold flex justify-center items-center w-23 rounded-[7px] border-1 border-[black] bg-gray-300">{label}</span>
            <span className="font-bold flex justify-center items-center w-23 rounded-[7px] border-1 border-[black] bg-gray-300">{value}</span>
        </div>
    );
}
