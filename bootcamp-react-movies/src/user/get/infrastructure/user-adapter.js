import { toUser } from "../domain/user";

export const singleUserAdapter = (externalData) => {
    /* entra
    {
        "data": {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
        }
    
    const id = externalData.data.id;
    const name = externalData.data.first_name;
    const lastName = externalData.data.last_name;
    const avatar = externalData.data.avatar;
    */
    const { first_name, last_name, email, avatar } = externalData.data;

    /*
    sale
    {
        email: email,
        name: first_name,
        lastName: last_name,
        avatar: avatar
    }
    */
    return toUser(first_name, last_name, email, avatar);
}