

const Box = ({value,isActive,onClick}) => {

  return (
    <button
     onClick={()=> onClick(value)}
     className={`font-extrabold w-10 lg:w-16 h-10 lg:h-16 border-2 text-xl border-slate-800 ${isActive? "bg-black text-white": "bg-white text-black"}`}
     >
      {value}
    </button>
  )
}

export default Box
