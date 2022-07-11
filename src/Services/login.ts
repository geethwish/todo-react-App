export function getLoginDetails(data: object) {

    return new Promise((resolve) =>
        setTimeout(() => resolve(data), 3000)
    );

}
