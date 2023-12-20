export const getValor = () => {
    const appInLocal = localStorage.getItem('app');
    if (appInLocal)
        return JSON.parse(appInLocal).valor;
    else
        return 0;
}

export const getPersona = () => {
    const appInLocal = localStorage.getItem('app');
    if (appInLocal)
        return JSON.parse(appInLocal).persona;
    else
        return {};
}

export default class Auto {
    constructor(marca) {
        this.marca = marca;
    }
    acelerar = () => {
        console.log(`${this.marca} aclerando`);
    }
}