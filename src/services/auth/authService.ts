import { LoginDto } from "./AuthDto";
import $api from "../../api";

export async function loginCompany(dto: LoginDto) {
    const response = await $api.post('/auth/login-company', {...dto});
    localStorage.setItem('token', response.data.accessToken);
    
    console.log(response.data)
    return response.data;
}

export async function loginWorker(dto: LoginDto) {
    const response = await $api.post('/auth/login-worker', {...dto});
    localStorage.setItem('token', response.data.accessToken);
    
    console.log(response.data);
    return response.data;
}

export async function registerCompany(companyName: string, email: string, password: string) {
    console.log(companyName, email, password)
    const response = await $api.post('/auth/registration-company', {companyName, email, password, role: 'company'});
    localStorage.setItem('token', response.data.accessToken);
    const userString = JSON.stringify(response.data)
    localStorage.setItem("user", userString)
    console.log(response.data)
    return response.data;
}

export async function registerWorker(firstName: string, lastName: string, email: string, password: string){
    const response = await $api.post('/auth/registration-worker', {firstName, lastName, email, password});
    localStorage.setItem('token', response.data.accessToken);
    const userString = JSON.stringify(response.data)
    localStorage.setItem("user", userString)
    console.log(response.data);
    return response.data;
}

export async function logout () {
    const response = await $api.post('/auth/logout');
    
    if(response){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
    console.log(response);
    return response.data;
}

export async function refresh() {
    const token = await $api.post('/auth/refresh');
    return token;
}
