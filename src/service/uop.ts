import axios, {AxiosResponse} from 'axios'
import URL from './URL'
const uop = '/uop'

export default class UOP {
    static getAll(user_id: string): Promise<any> {
        return axios.get(URL + uop, {
            headers: {
                user_id: user_id
            }
        })
    }

    static create(
        user_id: string,
        month: number,
        value: number,
        title: string
    ): Promise<AxiosResponse<any>> {
        return axios.post(URL + uop, {}, {
            headers: {
                user_id: user_id,
                month: month,
                value: Math.round(value),
                title: title
            }
        })
    }

    static delete(user_id: string, id: string): Promise<AxiosResponse<any>> {
        return axios.delete(URL + uop,{
            headers: {
                user_id: user_id,
                id: id
            }
        })
    }
}