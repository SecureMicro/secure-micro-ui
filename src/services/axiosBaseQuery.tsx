import axios from "axios";


interface AxiosbaseQueryOptions{
    enviornment:'dev' |'uat'
}
const axiosBaseQuery:any=
({enviornment="dev"}:AxiosbaseQueryOptions)=>
    async(
        {url='',method,service='',data,params,headers}:any,
        {

        }:{

        }
    ):Promise<any>=>{
        const baseUrl=BASE_URL[enviornment];
        const {token}=auth
        let browserUrl:string=''
        if(!baseUrl){
            throw new Error(`Invalid enviornment ${enviornment}`)
        }else if(url){
            browserUrl=`${baseUrl}${url}`
        }
        headers={
            ...headers,
            Authorization:token ? `Bearer ${token}`
        };
        try {
           const response:any=await axios({
            url:browserUrl,
            method,
            headers,
            params,
            data
           }) 
           if(response?.status===401 && response.data.status==="unauthorized"){
            alert('logout')
           }
           console.log('resp',response)
           return {data:response?.data ,error:undefined}
        } catch (error) {
            if(axios.isAxiosError())
        }
    }