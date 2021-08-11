export function getSongPerArtist(data) {
    const obj = {}
    const result = {}
    data.forEach((item, i) => {
        obj[item.artist] = obj[item.artist] ? [...obj[item.artist], item] : [item]
    });
    let i = 0
    for (const key in obj) {
        if (obj[key].length > 1) {
            result[key] = obj[key];
            i++
        }
    }
    return new Promise(resolve => {
        resolve(result)
    })
}