export interface User {
    firstname: string;
    lastname: string;
    imageUrl: string;
}
export interface Register {
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    password: string;
    password_confirmation: string
}