import { entity } from "../domain/resource-domain"

export const toResourceEnity = (externalData) => {

    //aca retorna algo del dominio
    return externalData.data.map( x =>
        entity(x.id,x.name,x.year)
    ); // []
}