import * as Yup from 'yup';

export enum AuthenticationActionTypes {
    LOGIN = '@@authentication/LOGIN',
}

export interface AuthenticationState {
    login: string,
    password: string,
    token: string,
}

export interface LoginState {
    login: string,
    password: string,
}

export const LoginSchema = Yup.object().shape({
    login: Yup.string().required(),
    password: Yup.string().min(8).max(255).required(),
});

