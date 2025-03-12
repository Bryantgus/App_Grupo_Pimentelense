import "../../App.css"
import BarraInfo from "./BarraInfo";

export default function SideBarBarra({ isExiting, barraInfo }) {

  return (
    <div className={`square ${isExiting ? "exiting" : "in"} bg-neutral-400`}>
      <h4 className="text-center mt-4 text-center bg-zinc-300 mb-1 rounded-[5px] border-black border-[1px] text-[18px] font-semibold">Medidas totales de barra</h4>
        <BarraInfo info={barraInfo.totals}/>
        <BarraInfo info={barraInfo.barra}/>
    </div>
  );
}