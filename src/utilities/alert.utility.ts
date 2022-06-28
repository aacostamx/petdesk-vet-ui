import AlertModel from "../models/common/AlertModel";

export const successAlert = (message?: string) : AlertModel => {
    if (message === undefined) message = "Successfull!";
    return {message: message, severity: "success"}
}