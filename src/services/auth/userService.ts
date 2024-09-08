import $api from "../../api";

export async function findUserByEmailAndSendCode(email: string) {
    const response = await $api.get(`/user/find-user-by-email/${email}`);
    return response;
}

export async function sendVerificationCodeAgain(email: string) {
    const response = await $api.post('/user/send-verification-code', {email});
    return response;
}

export async function verifySentCode(email: string, code: string) {
    const response = await $api.post('/user/verify-sent-code', {email, code});
    return response;
}

export async function resetPass(email: string, newPassword: string) {
    const response = await $api.patch('/user/reset-user-password', {email, newPassword});
    return response;
}