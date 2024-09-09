import $api from "../api";

export async function updateCompanyData(dto: {email: string, companyName: string}) {
    const response = await $api.patch('/company/update', {...dto});
    return response;
}