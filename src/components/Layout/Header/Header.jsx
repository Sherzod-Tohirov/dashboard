import search from "../../../assets/svg/search.svg";
import bell from "../../../assets/svg/bell.svg";
import user from "../../../assets/png/user.png";

export const Header = () => {
  return (
    <>
      <header className="header mb-[54px] flex w-full justify-between">
        <h1 className="text-2xl font-bold tracking-[0.3px]">Overview</h1>
        <div className="flex items-center">
          <div className="mr-8 flex items-center gap-6 border-r-[1px] border-[#DFE0EB] pb-3 pr-8 pt-1">
            <button>
              <img src={search} alt="search" width="16" height="16" />
            </button>
            <button>
              <img src={bell} alt="bell" width="16" height="16" />
            </button>
          </div>
          <button className="flex items-center gap-[14px]">
            <span className="text-sm font-semibold tracking-[0.2px] text-[#252733]">
              Jones Ferdinand
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#DFE0EB] p-[2px]">
              <img
                className="rounded-full"
                src={user}
                alt="User avatar"
                width="40"
                height="40"
              />
            </div>
          </button>
        </div>
      </header>
    </>
  );
};
