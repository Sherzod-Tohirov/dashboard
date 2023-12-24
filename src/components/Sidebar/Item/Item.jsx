export const Item = ({ el }) => {
  return (
    <li>
      <button
        className="
     relative
     flex 
     w-full 
     items-center 
     gap-6 
     py-[18px] 
     pl-[32px] 
     pr-[24px] 
     text-[#A4A6B3]
     transition
     before:absolute
     before:left-0 
     before:h-full
     before:bg-[#DDE2FF]
     hover:bg-[#3E4049]
     hover:text-[#DDE2FF]
     hover:before:w-[3px]
     "
      >
        <img src={el?.img} alt={el.title} width="16" height="16" />
        <span className="tracking-[0.2px] text-inherit">{el.title}</span>
      </button>
    </li>
  );
};
