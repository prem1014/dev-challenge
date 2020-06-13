/* create a map to hole mid price */
const app = {
    drawMidPrice: (items) => {
        /* draw sparkline graph for mid price */
        items.forEach((price, index) => {
            const exampleSparkline = document.getElementById('midPrice' + index);
            const midPrice = (Number(price.bestBid) + Number(price.bestAsk))/2
            Sparkline.draw(exampleSparkline, app.getMidPriceArray('midPrice' + index, midPrice, app.midPriceMap));
        });
    },
    getMidPriceArray: (elemId, val, midPrice) => {
        let currentMidPrice = midPrice.get(elemId);
        if (typeof currentMidPrice === 'undefined') {
            currentMidPrice = [0];
          midPrice.set(elemId, currentMidPrice);
        }
        currentMidPrice.push(val);
        return currentMidPrice;
    },
    midPriceMap: new Map()
}
module.exports = {
    drawMidPrice: app.drawMidPrice
}