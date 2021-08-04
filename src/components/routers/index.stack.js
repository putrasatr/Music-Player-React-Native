import { DrawerScreen } from "../../routers"
import { PlayRoom,SearchScreen} from ".."

export const StackRouter = [
    { name: "HomeScreen", Component: DrawerScreen },
    { name: "SearchScreen", Component: SearchScreen },
    { name: "PlayRoomScreen", Component: PlayRoom }
]