export default function Header({ cantidad, handleCantidad }) {
    return (
        <div>
            <h2 className="text-center pt-5 pb-5 text-[30px]">Desglose</h2>
            <input type="text" value={cantidad} onChange={(e) => handleCantidad(e.target.value)}  />
        </div>
    )
}