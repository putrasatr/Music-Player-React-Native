import { DrawerScreen } from "../../routers"
import { PlayRoom, SearchScreen, SongsListRoom,OnBoardingScreen } from ".."

export const StackRouter = [
    { name: "HomeScreen", Component: DrawerScreen },
    { name: "SearchScreen", Component: SearchScreen },
    { name: "PlayRoomScreen", Component: PlayRoom },
    { name: "SongsListScreen", Component: SongsListRoom },
    // { name: "OnBoardingScreen", Component: OnBoardingScreen}
]