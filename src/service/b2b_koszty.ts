import axios, {AxiosResponse} from 'axios'
import URL from './URL'
const b2bkoszty = '/b2bkoszty'

export default class B2BKoszty {

    static getAll(user_id: string): Promise<any> {
        return axios.get(URL + b2bkoszty, {
            headers: {
                user_id: user_id
            }
        })
    }

    static create(
        user_id: string,
        month: number,
        value: number,
        title: string,
        VAT: number
    ): Promise<AxiosResponse<any>> {
        return axios.post(URL + b2bkoszty, {}, {
            headers: {
                user_id: user_id,
                month: month,
                value: Math.round(value),
                title: title,
                VAT: VAT * 100
            }
        })
    }

    static delete(user_id: string, id: string): Promise<AxiosResponse<any>> {
        return axios.delete(URL + b2bkoszty,{
            headers: {
                user_id: user_id,
                id: id
            }
        })
    }
}