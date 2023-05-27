import React from 'react';
import {userServices} from "./services/user.services";


const App = () => {
    return (
            userServices.getAll().then(value => value.data).then(characters => {
                for (let character of characters) {
                    console.log(character.name)
                }
            })

    );
};

// 1. Описати всю сім'ю сімпсонів (5 персонажів)
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів

// userService.getall().then(value=>value.data).then(value=> {
//     for (let oser of users) {
//         user. - і тут після точки бачимо всі поля юзера (city,geo,street ...)
//         console.log(user.email)
//     }
// })

export default App;
