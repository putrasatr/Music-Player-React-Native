//play
export const play = async (playback, uri) => {
    try {
        return await playback.loadAsync(
            { uri },
            { shouldPlay: true, }
        )

    } catch (error) {
        console.log("error AUC", error)
    }
}
//pause
export const pause = async (playbackObj) => {
    try {
        return await playbackObj.setStatusAsync({ shouldPlay: false })
    } catch (error) {
        console.log(error)
    }
}
//resume
export const resume = async (playbackObj) => {
    try {
        return await playbackObj.playAsync()
    } catch (error) {
        console.log(error)

    }
}
//select Another audio
export const playAnotherAudio = async (playbackObj, uri) => {
    try {
        await playbackObj.stopAsync()
        await playbackObj.unloadAsync()
        return await play(playbackObj, uri)
    } catch (error) {
        console.log(error)
    }
}