import localesBottomTabEG from "./eg-EG/bottomTab"
import localesSettingsEG from "./eg-EG/settings"

import localesBottomTabID from "./id-ID/bottomTab"
import localesSettingsID from "./id-ID/settings"
/*
    English Language
*/
const eg = {
    ...localesBottomTabEG,
    ...localesSettingsEG
}

/*
    Indonesian Language
*/

const id = {
    ...localesBottomTabID,
    ...localesSettingsID
}

export default {
    eg, id
}