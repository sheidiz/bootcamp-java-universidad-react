import { get } from "../infrastructure/fetch-user-repository";
import { singleUserAdapter } from "../infrastructure/user-adapter";

export const getUser = async (url) => {//url viene desde la UI

    //dentro no busca el mismo los datos
    //delaga en la funcion "repositoy"
    const userExternalData = await get(url);
    const res = await userExternalData.json();

    //ahora convierto la respuesta usando el adapter
    const userDomain = singleUserAdapter(res);

    return userDomain;

    //TODO: CLOJURES
}