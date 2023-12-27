export const resourceRepository = (endPoint) => {

    const exec = async () => {

        const resourcesEndPoint = 'api/unknown';

        const response = await fetch(`${endPoint}/${resourcesEndPoint}`);

        return await response.json();// esto es como viene del API REST
    }

    return exec;
}