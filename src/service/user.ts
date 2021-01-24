import axios, {AxiosResponse} from 'axios'
import URL from './URL'

export default function createTable(id: string): Promise<AxiosResponse<any>> {
    return axios.post(URL + '/createtable', {}, {
        headers: {
            user_id: id
        }
    })
}