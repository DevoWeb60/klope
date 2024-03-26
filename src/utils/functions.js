export function isEmpty(value) {
    let empty = false

    if (value === 0) empty = true
    if (value === '') empty = true
    if (value === null) empty = true
    if (value === undefined) empty = true

    return empty
}