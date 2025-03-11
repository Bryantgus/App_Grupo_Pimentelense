export default function BarraInfo({ barra, totals }) {
    return (
        <div className="flex flex-col jusfify-center content-center">
            {/* Renderizar los valores de totals dinámicamente */}
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-center mb-4 text-center bg-zinc-300 mb-1 rounded-[5px] border-black border-[1px] text-[18px] font-semibold">Totales</h3>
                {Object.keys(totals).map(key => (
                    <div key={key} className="flex justify-between gap-15 ">
                        <span className="w-[80px] text-center bg-zinc-300 mb-1 rounded-[5px] border-black border-[1px] text-[18px] font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        <span className="w-[80px] text-center bg-zinc-300 mb-1 rounded-[5px] border-black border-[1px] text-[18px] font-semibold">{totals[key]}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col justify-center items-center">
                <h3 className="text-center mb-4 text-center bg-zinc-300 mb-1 rounded-[5px] border-black border-[1px] text-[18px] font-semibold">Barra</h3>
                {Object.keys(barra).map(key => (
                    <div key={key} className="flex justify-between gap-15">
                        <span className="w-[80px] text-center bg-zinc-300 mb-1 rounded-[5px] border-black border-[1px] text-[18px] font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        <span className="w-[80px] text-center bg-zinc-300 mb-1 rounded-[5px] border-black border-[1px] text-[18px] font-semibold">{barra[key]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
