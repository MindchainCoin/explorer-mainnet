import axios from 'axios';

const API_KEY = 'coinrankingd047dc230e2b59332b8cc15e37bb477497cc41230fb7cd5c';
const API_URL = 'https://api.coinranking.com/v2/coin/Au8mNo2ZIlJfL/price';

let mindCoinPrice = localStorage.getItem('mindCoinPrice') || null;

async function fetchMindCoinPrice() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-access-token': API_KEY
      }
    });
    const newPrice = response.data.data.price;
    if (newPrice !== mindCoinPrice) {
      const percentageChange = calculatePercentageChange(mindCoinPrice, newPrice);
      mindCoinPrice = newPrice;
      localStorage.setItem('mindCoinPrice', mindCoinPrice);
      console.log(`Percentage change: ${percentageChange}%`);
    }
  } catch (error) {
    console.log(error);
  }
}

function calculatePercentageChange(oldPrice, newPrice) {
  const difference = newPrice - oldPrice;
  return ((difference / oldPrice) * 100).toFixed(2);
}

fetchMindCoinPrice();
setInterval(fetchMindCoinPrice, 10000);

export { mindCoinPrice };
