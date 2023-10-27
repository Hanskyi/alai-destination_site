export interface IUser {
    email: string;
    displayName: string;
    avatar?: string;
    role: string;
    password: string;
    token: string;
    googleID?: string;
}