export default function Header({ cantidad, changeCantidad, handleAnimation }) {
    console.log
    function handleCantidad(e) {
        const number = Number(e.target.value);
        if (number < 100) {
            changeCantidad(number);
        }
    }

    return (
        <div className="flex justify-between bg-zinc-300 border-[1px] mb-5 pb-1 content-center">
            <h2 className="text-[30px] inline">Desglose</h2>

            <div className="flex justify-center content-center gap-5">

                <button className="bg-neutral-400 hover:bg-zinc-500 rounded-[10px] h-[40px] mt-1 pl-1 pr-1" onClick={handleAnimation}>
                    Mostrar Barras
                </button>

                <div className="flex flex-col w-[140px] justify-center items-center bg-neutral-400 rounded-[10px] mt-1 pl-1 pr-1">
                    <label htmlFor="cantidad" className="inline text-center">Cantidad Desgloses</label>
                    <input
                        id="cantidad"
                        type="number" 
                        className="bg-white text-center w-[80px] mb-1 rounded-[10px]"
                        value={cantidad}
                        onChange={(e) => handleCantidad(e)}
                        autoComplete="off"
                    />
                </div>
            </div>
        </div>
    );
}
