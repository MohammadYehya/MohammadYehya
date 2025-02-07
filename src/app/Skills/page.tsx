import { Card } from "@/components/ui/card";
import { data } from "@/lib/data/config";

export default function Skills() {
  return (
    <div className="my-10 w-full flex justify-center">
      <div className="flex px-4 md:w-[80%] justify-center flex-col">
        <h1 className="text-7xl font-bold flex justify-center mb-5">Skills</h1>
        {data.NavItems.Skills.content.map((item, index) => (
          <div className="" key={index}>
            <div className="flex justify-center items-center mt-10">
              <div className="w-[50px] border flex"></div>
              <div className="flex text-sm px-4 text-gray-400">
                {item.group}
              </div>
              <div className="border flex flex-1"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-y-2 md:gap-x-2 mt-4">
              {item.content.map((details, index) => (
                <Card
                  key={index}
                  className={`flex flex-col lg:flex-1 w-full md:min-w-[49%] md:max-w-[49%] lg:min-w-[30%] lg:max-w-[30%] p-5 h-20 hover:h-28 group items-center transition-all duration-300 ease-in-out`}
                >
                  <div className="font-bold items-start flex w-full">
                    {details.name}
                  </div>
                  <div
                    className={`group-hover:flex text-transparent group-hover:text-black transition-all duration-500 ease-in-out`}
                  >
                    Proficiency: {details.proficiency}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
