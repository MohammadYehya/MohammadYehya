import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { data } from "@/lib/data/config";

export default function Projects() {
  return (
    <div className="my-10 w-full flex justify-center">
      <div className="flex px-4 md:px-14 justify-center flex-col">
        <h1 className="text-7xl font-bold flex justify-center mb-5">
          Projects
        </h1>
        <div className="flex flex-wrap justify-center gap-y-2 md:gap-x-2">
          {data.NavItems.Projects.content.map((item, index) => {
            return (
              <Card key={index} className="flex md:flex-1 flex-col w-full md:min-w-[300px] md:max-w-[300px] p-5 ">
                <div className="font-bold mb-4">{item.title}</div>
                <Separator />
                <div>{item.type}</div>
                <div>{item.description}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
