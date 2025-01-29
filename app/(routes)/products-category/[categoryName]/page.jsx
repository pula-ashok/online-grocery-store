import { getCategoryList, getProductByCategory } from '@/app/_utils/GlobalApi'
import React from 'react'
import TopCategoryList from './_components/TopCategories'
import ProductList from '@/app/_components/ProductList'

const ProductCategory = async({params}) => {
    const productList=await getProductByCategory(await params?.categoryName)
    const categoryList=await getCategoryList()
  return (
    <div>
      <h2 className='p-4 bg-primary text-white font-bold text-3xl text-center'>{params?.categoryName}</h2>
      <TopCategoryList categoryList={categoryList} selectedCategory={await params?.categoryName}/>
      <div className="p-5 md:p-10">
      <ProductList productList={productList}/>
      </div>
    </div>
  )
}

export default ProductCategory