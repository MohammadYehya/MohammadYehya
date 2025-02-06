import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { data } from "@/lib/data/config";

export default function Skills() {
  return (
    <div className="my-10 w-full flex justify-center">
      <div className="flex px-4 md:w-[80%] justify-center flex-col">
        <h1 className="text-7xl font-bold flex justify-center mb-5">Skills</h1>
        {data.NavItems.Skills.content.map((item, index) => (
          <div className="">
            <div className="flex justify-center items-center mt-10">
              <div className="w-[50px] border flex"></div>
              <div className="flex text-sm px-4 text-gray-400">
                {item.group}
              </div>
              <div className="border flex flex-1"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-y-2 md:gap-x-2 mt-4">
              {item.content.map((name, index) => (
                <Card
                  key={index}
                  className="flex md:flex-1 w-full md:min-w-[30%] md:max-w-[30%] p-5 items-center"
                >
                  <div className="font-bold">{name}</div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
