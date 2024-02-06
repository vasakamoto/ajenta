export function epochToDate(epoch) {
    const dateObj = new Date(epoch);
    return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
}
