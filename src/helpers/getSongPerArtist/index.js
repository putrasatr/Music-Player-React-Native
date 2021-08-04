export function getSongPerArtist(data) {
    const obj = {}
    const result = {}
    data.forEach((item, i) => {
        if (obj[item.artist]) {
            obj[item.artist] = [[...(obj[item.artist]), item], true]
        } else {
            obj[item.artist] = [[item], false]
        }
    });
    let i = 0
    for (const key in obj) {
        if (obj[key][1]) {
            result[key] = obj[key][0];
        }
    }
    return new Promise(resolve => {
        resolve(result)
    })
}