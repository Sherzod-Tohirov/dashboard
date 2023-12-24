import { Header } from "./Header";
import { OverallDataList } from "./OverallDataList";
export const Layout = () => {
  return (
    <>
      <div className="flex w-full flex-col py-[30px] pl-[30px] pr-[33px]">
        <Header />
        <OverallDataList />
      </div>
    </>
  );
};
