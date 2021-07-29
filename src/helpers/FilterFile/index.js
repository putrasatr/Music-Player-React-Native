export function FilterFile(assets) {
    let filterAudio;
    filterAudio = assets.filter((item) => {
        if (isNaN(item.filename[0])) {
            const newFilename = item.filename.replace(/.mp3|.m4a/ig, "")
            item.filename = newFilename
            let arr = item.filename.split("-")
            arr.forEach((i, idx) => {
                if (idx)
                    item.title = i.trim()
                else item.artist = i.trim()
            })
            return item
        }
    }).sort((a, b) => (
        a.filename.toLocaleLowerCase() > b.filename.toLocaleLowerCase()
    ))
    return new Promise(resolve => {
        resolve(filterAudio)
    })
}