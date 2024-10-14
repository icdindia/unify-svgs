// Replace with your actual Alpha Vantage API key
const apiKey = 'K6YMITEN76FFZH32';
const symbol = 'BSE.SFL';  // SFL.BO often works for Indian stocks (BSE). 
// NSE may not be directly supported, but you can try BSE equivalent.

// Function to get real-time stock data
async function getStockData() {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // Handle the data (e.g., extract the latest price)
    // const timeSeries = data['Time Series (5min)'];
    // const latestTimestamp = Object.keys(timeSeries)[0];
    // const latestData = timeSeries[latestTimestamp];
    
    // console.log('Latest stock data:', latestData);
    // document.getElementById("stock-price").innerHTML = `Price: ${latestData['4. close']}`;
  } catch (error) {
    // console.error('Error fetching stock data:', error);
  }
}

// Call the function to display data
getStockData();
