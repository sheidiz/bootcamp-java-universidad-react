export const toUser = (first_name, last_name,email,avatar) => {
    return {
        email: email,
        name: first_name,
        lastName: last_name,
        avatar: avatar
    };
}