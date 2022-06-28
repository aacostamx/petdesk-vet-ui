import Animal from "./Animal";
import { User } from "./User";

export default interface 
Appointment {
    appointmentId: number;
    appointmentType: string;
    createDateTime: Date;
    requestedDateTimeOffset: Date;
    user_UserId: number;
    user: User;
    animal_AnimalId: number;
    animal: Animal;
}