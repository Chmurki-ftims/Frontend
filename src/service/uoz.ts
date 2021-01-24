import { unstable_createMuiStrictModeTheme } from '@material-ui/core'
import axios, {AxiosResponse} from 'axios'
import URL from './URL'
const uoz = '/uoz'

export default class UOZ {
    static getAll(user_id: string): Promise<AxiosResponse<any>> {
        return axios.get(URL + uoz,{
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
        return axios.post(URL + uoz, {}, {
            headers: {
                user_id: user_id,
                month: month,
                value: Math.round(value),
                title: title
            }
        })
    }

    static delete(user_id: string, id: string): Promise<AxiosResponse<any>> {
        return axios.delete(URL + uoz, {
            headers: {
                user_id: user_id,
                id: id
            }
        })
    }
}