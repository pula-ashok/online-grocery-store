import axios from 'axios'

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api'
})

const getCategory=()=>axiosClient.get('/categories?populate=*')
const getSliders=()=>axiosClient.get('/sliders?populate=*').then(resp=>resp.data.data)
const getCategoryList=()=>axiosClient.get('/categories?populate=*').then(resp=>resp.data.data)
const getProductList=()=>axiosClient.get('/products?populate=*').then(resp=>resp.data.data)
const getProductByCategory=(category)=>axiosClient.get(`/products?filters[categories][name][$in]=${category}&populate=*`).then(resp=>resp.data.data) || axiosClient.get(`/categories/${category}/products?populate=*`).then(resp=>resp.data.data)
const registerUser=(username,email,password)=>axiosClient.post('/auth/local/register',{username,email,password})
const signInUser=(email,password)=>axiosClient.post('/auth/local',{identifier:email,password})
const addToCart=(data,jwt)=>axiosClient.post('/user-carts',data,{headers:{Authorization:`Bearer ${jwt}`}})
const getCartItems=(jwt,userid)=>axiosClient.get(`/user-carts?filters[userid][$eq]=${userid}&populate=*`,{headers:{Authorization:`Bearer ${jwt}`}}).then(resp=>resp.data.data)

export {getCategory,getSliders,getCategoryList,getProductList,getProductByCategory,registerUser,signInUser,addToCart,getCartItems}
