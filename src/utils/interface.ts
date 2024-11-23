export interface IRegisterUser {
    fullName: string
    email: string
    password: string
}

export interface ILoginUser {
    email: string
    password: string
}

export interface ILogOutUser {
    refreshToken: string
}
