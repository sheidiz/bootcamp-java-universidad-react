export const loginRepository = (urlBase) => {
    const loginEndpoint = 'api/login';

    const exec = async (username,password) => {
        const data = {
            "email": username,
            "password": password
        };
        //email: "eve.holt@reqres.in", password: "cityslicka"
        const ret = await fetch(`${urlBase}/${loginEndpoint}`,{
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body:  JSON.stringify(data)
        });
        if(ret.status != 200) {
            throw new Error('Username or password invalid');
        }
        return await ret.json();
    }

    return exec;
}