export const loginUseCase = (repository,adapter) => {
    
    const exec = async (useranme,password) => {

        const response = await repository(useranme, password);

        const adapted = adapter(response);

        return adapted;
    }

    return exec;
}