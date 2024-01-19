import { Button } from "@/components/ui/button";
const HomeComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" justify-around p-5">
        <p className="font-manrope text-2xl p-3 ">
          Revolutionize Your Coding Experience with the Ultimate Code Editor
        </p>
        <h1 className="font-manrope text-7xl py-5">CodeLime</h1>
        <div className="m-4">
          <a href="/code">
            <Button className="p-6">Code Now</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
