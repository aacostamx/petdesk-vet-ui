import Appointment from "../models/Appointment";
import { petDeskClient } from "./client.api";

export const fetchVetData = () => {
    return new Promise<Appointment[]>(
        (resolve, reject) => {
            let url = 'api/veterinarian';
            petDeskClient.get<any>(url).then((r) => {
                return resolve(r.data);
            }).catch((e) => {
                console.log(e)
                return reject(e);
            });
        });
};