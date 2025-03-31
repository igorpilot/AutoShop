import axios from 'axios'


export const API_URL ='https://shopdata-ed7258c952a5.herokuapp.com/api'
///'http://localhost:5000/api'

const $api = axios.create({withCredentials: true,
baseURL: API_URL})

$api.interceptors.request.use( (config) =>{
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    return config
})
$api.interceptors.response.use( (config) => {return config},
    async (error)=>{
        const originRequest=error.config
        if(error.response.status === 401 && error.config && !error.config.isRetry) {
            originRequest.isRetry = true
            try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
                localStorage.setItem('token', response.data.accessToken)
                return $api.request(originRequest)
            } catch (e) {console.log('не авторизований' +e)}
        }
    })

export default $api