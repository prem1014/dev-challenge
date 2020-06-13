const dataTable = require('./data-table/data-table');
const MidPrice = require('../utility/mid-price/mid-price');
const TradingService = require('../service/trading/trading.service');
const sortData = require('../utility/sort');

const initApp = () => {
    const DATA_PATH = '/fx/prices';
    let stompClInstance = null;
    let prices = [];
    let app = document.getElementById('app');
    let tableHeaders = [
        {
            displayName: 'Name'
        },
        {
            displayName: 'Best Bid'
        },
        {
            displayName: 'Best Ask'
        },
        {
            displayName: 'Open Bid'
        },
        {
            displayName: 'Open Ask'
        },
        {
            displayName: 'Last Change Ask'
        },
        {
            displayName: 'Last Change Bid'
        },
        {
            displayName: 'Mid Price Graph'
        }
    ]

    const onSubcribeSuccess = (message) => {
        // hide loader once data is available
        document.getElementById('loader').style.display = 'none';

        prices.push(JSON.parse(message.body));

        // sort prices by lastChangeBid
        prices = sortData(prices, 'lastChangeBid');

        // check if data table is already created and remove it
        if(document.getElementById('dataTable')) {
            document.getElementById('dataTable').remove();
        }

        // create data table with latest data coming from server
        let table = dataTable.createTable(tableHeaders, prices);
        app.appendChild(table);

        // calculate midprice and draw the sparkline graph
        MidPrice.drawMidPrice(prices);

        // set page title
        document.getElementById('headerText').innerHTML = 'List Of Prices ' + '(' + prices.length + ')';
    }

    /* hadnle success response from server */
    const onStompClientInitSuccess = () => {
        stompClInstance && stompClInstance.subscribe(DATA_PATH, onSubcribeSuccess)
    }

    /* hadnle error response from server */
    const onStompClientInitError = (error) => {
        // hide loader once if there is any error while connecting to server
        document.getElementById('loader').style.display = 'none';
        alert(error && error.headers && error.headers.message)
    }

    /* init and subscribe to stomp client to get data*/
    stompClInstance = TradingService.initStompClinet();
    stompClInstance && stompClInstance.connect({}, onStompClientInitSuccess, onStompClientInitError);
    
}

module.exports = initApp;