import { AxiosResponse } from 'axios'

const axiosBaseQuery =
    ({ environment = 'dev' }) =>
    async ({ url = '', headers, method, data, params }: any, {}: {}) => {
        const baseUrl = BASE_URL[environment]
        if (!baseUrl) {
            throw new Error(`Invalid environment:${environment}`)
        }
        // const auth=getState();
        const { auth } = getState()?.authReducer ?? {}
        const { token } = auth ?? {}
        let browserUrl: string = ''
        if (url) {
            browserUrl = `${baseUrl}${url}`
        }
        headers = {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
        }
        const [error, response]: any? = await axios({
            url: browserUrl,
            headers,
            method,
            data,
            params,
        })
        if (error) {
            if (axios.isAxiosError(error)) {
                if (error?.response?.status === 401) {
                    alert('logout')
                    // await dispatch(logoutUser());
                    return {}
                }
                return {
                    data: undefined,
                    error: {
                        status: error?.code ?? 'Unknown',
                        data: error?.message ?? 'Unknown error',
                    },
                }
            } else {
                return {
                    data: undefined,
                    error: {
                        status: 'Unknown',
                        data: 'An unexpected error occurred',
                    },
                }
            }
        }

        if (
            response.status === 200 &&
            response.data.status === 'UNAUTHORIZED' &&
            response.data.code === 401
        ) {
            alert('logout')
        }
        return { data: response?.data, error: undefined }
    }

export default axiosBaseQuery
