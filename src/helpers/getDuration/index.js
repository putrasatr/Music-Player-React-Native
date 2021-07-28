function timeFormat(v) {
    const r = v > 0
        ? v < 10
            ? `0${v}`
            : v
        : "00"

    return r
}
export function secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);
    const result = `${timeFormat(h)}:${timeFormat(m)}:${timeFormat(s)}`
    if (result[0] === "0" && result[1] === "0")
        return result.slice(3)
    return result
}