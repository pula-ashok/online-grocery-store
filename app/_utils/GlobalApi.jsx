import axios from 'axios'

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api'
})

const getCategory=()=>axiosClient.get('/categories?populate=*')
const getSliders=()=>axiosClient.get('/sliders?populate=*').then(resp=>resp.data.data)
const getCategoryList=()=>axiosClient.get('/categories?populate=*').then(resp=>resp.data.data)

export {getCategory,getSliders,getCategoryList}