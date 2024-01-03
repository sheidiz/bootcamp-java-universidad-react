import { createLoginDomain } from "../domain/login-domain";

export const toLogin = () => {
    
    const exec = (externalResponse) => {
        //name,lastName, email,avatar,token
        return createLoginDomain(
            'carlos',
            'lopez',
            'email@email.com',
            'https://reqres.in/img/faces/7-image.jpg',
            externalResponse.token,
        )
    }
    return exec;
}