import { Button } from "@/components/ui/button";
import Slider from "./_components/Slider";
import { getCategoryList, getProductList, getSliders } from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";

export default async function Home() {
  const sliderList=await getSliders()
  const categoryList=await getCategoryList()
  const productList=await getProductList()
  return (
    <div className="p-5 md:p-10 md:px-20">
      {/* slider  */}
      <Slider sliderList={sliderList}/>
      {/* category list  */}  
      <CategoryList categoryList={categoryList}/>
      {/* product list  */}
      <ProductList productList={productList}/>
    </div>
  );
}
