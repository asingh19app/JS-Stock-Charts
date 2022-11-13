async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    let stockData = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&apikey=247179fb92b04d81918866c805360b28',{
    

})
let stockDataText =  await stockData.json()

console.log(stockDataText)

let GME = stockData.GME
let MSFT = stockData.MSFT
let DIS = stockData.DIS
let BNTX = stockData.BNTX

const stocks = [GME, MSFT, DIS, BNTX];

// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array



}

main()
