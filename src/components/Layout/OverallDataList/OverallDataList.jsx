import { Card } from "../Card";
import { OVERALL_DATA as data } from "../../../CONSTANTS";
export const OverallDataList = () => {
  return (
    <ul className="mb-[30px] flex flex-wrap items-center justify-between gap-[30px] min-[1800px]:justify-center">
      {data.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </ul>
  );
};
