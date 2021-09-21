
function superbowlWin(array) {
    const result = array.find(function(record) { return record.result === "W"})
    if (result) {
        return result.year
    } else {
        return undefined
    }
}