async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    let stockData = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey='+ key)
let stockDataText =  await stockData.json()

console.log(stockDataText)

let GME = stockDataText.GME
let MSFT = stockDataText.MSFT
let DIS = stockDataText.DIS
let BNTX = stockDataText.BNTX

const stocks = [GME, MSFT, DIS, BNTX];




// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array



stocks.forEach(stock => stock.values.reverse())

new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.map(value => value.datetime),
        datasets: stocks.map(stock => ({
            label: stock.meta.symbol,
            data: stock.values.map(value => parseFloat(value.high)),
            backgroundColor: getColor(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol),
        }))
    }
});




new Chart(highestPriceChartCanvas.getContext('2d'),{
    type:'bar',
    data: {
        labels: stocks.map(stock => stock.meta.symbol),
        datasets: stocks.map(stock => ({
            label: stock.meta.symbol,
            data:[greatest(stock)],
            //chart.js expects an array -maybe
            backgroundColor : getColor(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol)
        }))
    }
})


// You can find documentation for bar charts in ChartJS's documentation.
// Unlike the line chart, the labels will be stock symbols, not dates.
// Unlike the line chart, you will only need one dataset; the data in that dataset will be an array of numbers representing the highest price for each stock.
// To calculate the highest stock price given a stock object (and its array of values), you may need to build a helper function, like we did for getColor. This time, the helper function would iterate over an array of stock values to find the highest one.


//It's safe to hard-code '0' here, since we know we will always have at least one stock, and all of the stocks will have data from the same days. So now we have an array of objects, each of which contain the current day. The next step is to turn that array of objects into an array of the dates they contain.


function greatest(stock) {

    let highest = 0
    stock.values.forEach(day => {
        if(day.high > highest) {
            highest = day.high
        
        }
        //for each item inthe array, those days hav various infos, comapres first day, then sets to that value and compares over gain until highets value is reached

    })
    console.log(highest)
return highest
}








}







function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}















main()
