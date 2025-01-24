import { Button } from "@/components/ui/button";
import Slider from "./_components/Slider";
import { getCategoryList, getProductList, getSliders } from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Image from "next/image";
import Footer from "./_components/Footer";

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
      {/* banner */}
      <Image src={'/banner.png'} alt='banner' width={1000} height={200} className="w-full h-[400px] object-contain"/>
      {/* footer  */}
      <Footer/>
    </div>
  );
}
