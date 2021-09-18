export interface RoomModel{
    id: number;
    roomNumber: string;
    capacity: number;
    rent: number;
    onGoingBooking: number;
    closedBooking: number;
}