import HeadCell from "../models/HeadCell";

export const getSearchHeader: HeadCell[] = [
  { id: "appointmentId", numeric: false, disablePadding: true, label: "Id" },
  { id: "appointmentType", numeric: false, disablePadding: true, label: "Type" },
  { id: "requestedDateTimeOffset", numeric: false, disablePadding: true, label: "Requested Date" },
  { id: "user_UserId", numeric: false, disablePadding: true, label: "User" },
  { id: "animal_AnimalId", numeric: false, disablePadding: true, label: "Animal" },
];
