import { toResourceEnity } from "../../infrastructure/resource-adapter";

export const findResource = (respository) => {

    //por medio de un repository que esta infrastructure
    const exec = async () => { 

        const response = await respository();//[]

        //adapto la respuesta
        const list = toResourceEnity(response);

        return list;
    }

    return exec;
} 