
/* sort array by key */
const sortData = (items, key) => {
    items.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
    return items;
}

module.exports = sortData;