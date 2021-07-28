import {
    Settings
} from "../"

import {
    TabScreen
} from "../../routers"
export const DrawerRouters = [
    { name: "Home Screen", Component: TabScreen, iconName: "home", title: "Home" },
    { name: "Setting Screen", Component: Settings, iconName: "github", title: "Setting" }
]