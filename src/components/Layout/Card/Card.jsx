export const Card = ({ data }) => {
  return (
    <li className="group flex w-[258px] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-[1px] border-[#DFE0EB] bg-white px-8 py-6 transition hover:border-[#3751FF] hover:outline hover:outline-2 hover:outline-[#DDE2FF]">
      <h3 className="m-0 text-[19px] font-bold leading-normal tracking-[0.4px] text-[#9FA2B4] transition group-hover:text-[#3751FF]">
        {data?.title}
      </h3>
      <strong className="text-[40px] font-bold leading-normal tracking-[1px] text-[#252733] transition group-hover:text-[#3751FF]">
        {data?.amount}
      </strong>
    </li>
  );
};
