import { Button } from "@/components/ui/button";
import Slider from "./_components/Slider";
import { getCategoryList, getSliders } from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";

export default async function Home() {
  const sliderList=await getSliders()
  const categoryList=await getCategoryList()
  console.log(categoryList)
  return (
    <div className="p-5 md:p-10 md:px-20">
      {/* slider  */}
      <Slider sliderList={sliderList}/>
      <CategoryList categoryList={categoryList}/>
    </div>
  );
}
