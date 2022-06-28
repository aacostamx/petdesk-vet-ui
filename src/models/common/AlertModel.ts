export default interface AlertModel{
    message?: string;
    severity?: "error" | "success" | "info" | undefined;
}