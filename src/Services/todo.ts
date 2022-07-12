import axiosInstance from "./axiosInstance";

export function getTodo() {

    return new Promise((resolve, reject) =>
        axiosInstance.get('/todos').then(response => {

            resolve(response.data)

        }).catch((error) => {

            reject(error);

        })
    );

}
