import axios, {AxiosResponse} from "axios";
import {ICharacter} from "../interfaces/user.interface";
export const userServices={
    getAll:():Promise<AxiosResponse<ICharacter[]>> => axios('https://rickandmortyapi.com/api/character'),
    getById:(id:number):Promise<AxiosResponse<ICharacter>> => axios('https://rickandmortyapi.com/api/character/'+id)
}





// const userService:()={
//     getAll:():Promise<Axios.Response<IUser[]>>
//         =>axios('https://jsonplaceholder.typicode.com/users'),
//     getById:(id:number)
// }
//
// або можно створити свій тип
// type IRes<T> = Promise<Axios.Response<T>>
// тепер можемо переписати на коротчу надпись
//
// export const userService:()={
//     getAll:():IRes<IUser[]>=>axios('https://jsonplaceholder.typicode.com/users'),
//     getById:(id:number):IRes<IUser> => axios('https://jsonplaceholder.typicode.com/users/'+id),
// }
