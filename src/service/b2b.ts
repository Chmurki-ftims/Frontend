import axios, {AxiosResponse} from 'axios'
import URL from './URL'

export default class B2B {
    static getAll(user_id: string): Promise<AxiosResponse<any>> {
        return axios.get(URL + '/b2b', {
            headers: {
                user_id: user_id
            }
        })
    }

    static create(
        user_id: string,
        title: string, 
        month: number, 
        value: number, 
        chorobowe: boolean, 
        zdrowotne: boolean, 
        praca_zam: boolean): Promise<AxiosResponse<any>> {
            return axios.post(URL + '/b2b', {}, {
                headers: {
                    user_id: user_id,
                    title: title,
                    month: month,
                    value: value
                }
            })
    }

    static delete(user_id: string, id: string): Promise<AxiosResponse<any>> {
        return axios.delete(URL + '/b2b', {
            headers : {
                user_id: user_id,
                id: id
            }
        })
    }
}