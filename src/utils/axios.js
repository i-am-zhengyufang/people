import axios from "axios"
import { Loading } from "element-ui"



const BASE_URL = "https://geo.datav.aliyun.com/areas_v2/bound/"
let reWithLoad = createRequest()
export default reWithLoad
function createRequest() {
    const instance = axios.create({
        baseURL: BASE_URL,
        time: 5000
    })
    instance.interceptors.request.use(handleLoading)
    instance.interceptors.response.use(handleLoadRes, handleLoadErr)
    return instance
}
let loading
let loadCnt = 0
function handleLoading(config) {
    if (!loading) {
        loading = Loading.service({
            target: 'body',
            background: 'transparent',
            text: '载入中',
        })
    }
    loadCnt++
    return config
}
function handleLoadRes(result) {
    handleCommonLoad()
    return result
}

function handleLoadErr(error) {
    handleCommonLoad()
    throw error
}

function handleCommonLoad() {
    loadCnt--
    if (loadCnt === 0) {
        loading.close()
        loading = null
    }
}