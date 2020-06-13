
const addItemsToDataTable = (items, tblBody) => {
    /* create table body based items */
    items && items.length > 0 && items.forEach((item, index) => {
        const dataRow = document.createElement('tr');

        /* iterate over item keys and map values to cell */
        for (key in item) {
            const cell = document.createElement('td');
            const cellText = document.createTextNode(item[key]);
            cell.appendChild(cellText);
            dataRow.appendChild(cell);
        }

        /* create a cell in each row to draw sparkline graph */
        const td = document.createElement('td');
        const sparkLine = document.createElement('span');
        sparkLine.id = 'midPrice' + index;
        td.appendChild(sparkLine);
        dataRow.appendChild(td);

        /* append dataRow to tbody */
        tblBody.appendChild(dataRow);
    });

    return tblBody;
}

const createTable = (headers, items) => {
    const tbl = document.createElement('table');
    const tblBody = document.createElement('tbody');
  
    const theader = document.createElement('thead');
    const thRow = document.createElement('tr');

    /* create table headers from headers array */
    headers && headers.length > 0 && headers.forEach( header => {
        const th = document.createElement('th');
        var thtext = document.createTextNode(header.displayName);
        th.appendChild(thtext);
        thRow.appendChild(th);
    })
    theader.appendChild(thRow);

    /* append table header to table */
    tbl.appendChild(theader);

    /* append data row to table */
    tbl.appendChild(addItemsToDataTable(items, tblBody));

    tbl.className = 'table table-hover';
    tbl.id = 'dataTable';

    return tbl;
}

module.exports = {
    createTable: createTable,
};