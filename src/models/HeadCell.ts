import Appointment from "./Appointment";

export default interface HeadCell{
    disablePadding: boolean;
    id: keyof Appointment;
    label: string;
    numeric: boolean;
}