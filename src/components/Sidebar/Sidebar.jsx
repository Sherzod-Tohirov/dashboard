import Logo from "../../assets/svg/logo.svg";
import { SIDEBAR_ELEMENTS as elements } from "../../CONSTANTS";
import { Item } from "./Item";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar h-screen min-w-[255px] max-w-[50vw] gap-[59px] overflow-auto bg-[#363740] pt-[37px]">
        <a className="flex pl-8" href="#">
          <img src={Logo} alt="Dashboard logo" />
        </a>
        <ul className="mt-[59px] list-none border-b-[1px] border-[#dfe0eb0f] pb-4">
          {elements.slice(0, 6).map((el) => {
            return <Item key={el.id} el={el} />;
          })}
        </ul>
        <ul className="list-none border-[#dfe0eb0f] pt-4">
          {elements.slice(6).map((el) => {
            return <Item key={el.id} el={el} />;
          })}
        </ul>
      </div>
    </>
  );
};
