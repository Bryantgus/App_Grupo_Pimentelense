export default function BarraInfo({ info }) {
    return (
        <div className="flex flex-col justify-center content-center">
            {/* Renderizar los valores de totals dinámicamente */}
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-center mb-4 bg-zinc-300 mb-1 rounded-[5px] border-black border-[1px] text-[18px] font-semibold">Totales</h3>
                {Object.keys(info || {}).map(key => (
                    <div key={key} className="flex justify-between gap-15">
                        <span className="w-[80px] text-center bg-zinc-300 mb-1 rounded-[5px] border-black border-[1px] text-[18px] font-semibold">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                        <span className="w-[80px] text-center bg-zinc-300 mb-1 rounded-[5px] border-black border-[1px] text-[18px] font-semibold">
                            {info?.[key] ?? "N/A"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
