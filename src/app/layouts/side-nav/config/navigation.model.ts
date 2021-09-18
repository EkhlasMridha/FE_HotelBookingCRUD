export interface NavigationModel {
    name: string;
    route: string;
    matIcon?: string;
    localIcon?: string;
}

export const NavConfigs: NavigationModel[] = [
    {
        name: "Dashboard",
        route: "dashboard",
        matIcon: "home"
    },
    {
        name: "Manage Booking",
        route: "booking",
        matIcon:"ballot"
    },
    {
        name: "Manage Rooms",
        route: "room",
        matIcon:"bed"
    },
    {
        name: "Settings",
        route: "setting",
        matIcon:"engineering"
    }
];