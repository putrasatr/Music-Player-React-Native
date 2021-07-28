export function FilterFile(media) {
    let filterAudio;
    filterAudio = media.assets.filter((item) => {
        const newFilename = item.filename.replace(/.mp3|.m4a/ig, "")
        item.filename = newFilename
        let arr = item.filename.split("-")
        arr.forEach((i, idx) => {
            if (idx)
                item.title = i.trim()
            else item.artist = i.trim()
        })
        if (isNaN(item.filename[0])) return item
    })
    filterAudio.sort((a, b) => (
        a.filename.toLocaleLowerCase() > b.filename.toLocaleLowerCase()
    ))
    return new Promise(resolve => {
        resolve(filterAudio)
    })
}