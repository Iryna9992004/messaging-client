import $api from "../api";

export async function updateWorkerData(dto: {email:string, firstName?: string, lastName?: string}) {
    const response = await $api.patch('/worker/update', {...dto});
    return response;
}
