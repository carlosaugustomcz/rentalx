

interface ICreateUserDTO{
    name: string;
    password: string;
    email: string;
    driver_lincense: string;
    id?: string;
    avatar?: string;
}

export { ICreateUserDTO }