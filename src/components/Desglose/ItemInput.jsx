
export default function ItemInput({ label, inputValue, number, id, changeInput, col }) {
    return (
        <div className={`${col && "flex-col"} flex gap-2`} >
                <label htmlFor={`${id}${number}`} className="font-bold flex justify-center items-center w-23 h-7 rounded-[7px] border-1 border-[black] bg-gray-300 mt-2">{label}</label>

                <input type="text" className="font-bold flex justify-center items-center w-23 h-7 rounded-[7px] border-1 border-[black] bg-gray-200 mt-2 focus:border-2 focus:w-23 focus:h-7 text-center text-[20px]"  
                id={`${id}${number}`} 
                value={inputValue}
                onChange={(e) => {changeInput(e.target.value, id)}}
                />
        </div>
    )
}
