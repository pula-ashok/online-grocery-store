import { Button } from "@/components/ui/button";
import Slider from "./_components/Slider";
import { getSliders } from "./_utils/GlobalApi";

export default async function Home() {
  const sliderList=await getSliders()
  // console.log(sliderList)
  return (
    <div className="p-5 md:p-10 md:px-20">
      {/* slider  */}
      <Slider sliderList={sliderList}/>
    </div>
  );
}
