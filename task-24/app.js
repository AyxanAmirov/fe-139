const data = [
  { name: "Bitcoin", ticker: "BTC", value: "9685", change: "2.83%" },
  { name: "Ethereum", ticker: "ETH", value: "210.5", change: "6.17%" },
  { name: "Ripple", ticker: "XRP", value: "0.2812", change: "2.47%" },
  { name: "Bitcoin Cash", ticker: "BCH", value: "441.4", change: "5.01%" },
  { name: "Bitcoin SV", ticker: "BSV", value: "303.17", change: "5.53%" },
  { name: "Litecoin", ticker: "LTC", value: "74.935", change: "4.25%" },
  { name: "Tether", ticker: "USDT", value: "0.9994", change: "-1.7%" },
  { name: "EOS", ticker: "EOS", value: "4.6161", change: "3.15%" },
  { name: "Binance Coin", ticker: "BNB", value: "19.824", change: "-3.82%" },
  { name: "Cardano", ticker: "ADA", value: "0.060389", change: "2.93%" },
  { name: "Tezos", ticker: "XTZ", value: "2.1247", change: "6.12%" },
  {
    name: "Ethereum Classic",
    ticker: "ETC",
    value: "12.5988",
    change: "4.09%",
  },
  { name: "Stellar", ticker: "XLM", value: "0.07034", change: "-4.10%" },
  { name: "Monero", ticker: "XMR", value: "79.523", change: "3.45%" },
  { name: "TRON", ticker: "TRX", value: "0.020881", change: "5.21%" },
];

const tableBody = document.querySelector("#tableBody");
const nameBtn = document.querySelector(".nameHead");
const searchName = document.querySelector("#searchName")
const searchTicker = document.querySelector('#searchTrim')






runEvents()
function runEvents(){
  searchName.addEventListener("keyup",searchCoinName)
 
}

data.forEach((coin) => {
  addUi(coin);
});

function addUi(param) {

  const changeBackground = param.change.includes("-") ? "red" : "green";
  tableBody.innerHTML += `
  <tr>
  <td>${param.name}</td>
  <td>${param.ticker}</td>
  <td>${param.value}</td>
  <td style="color: ${changeBackground};">${param.change}</td>
  </tr>
  `;
}


function arrange() {
  data.sort((a, b) => a.name.localeCompare(b.name));
  refreshTable();
}
function floor() {
  data.sort((a, b) => b.name.localeCompare(a.name));
  refreshTable();
}
let ex = Boolean()
function main() {
  if(ex === true){
    floor();
    ex = false
    return ex
  }else{
    arrange();
    ex = true
    return ex
  }
  
}

function refreshTable() {
  tableBody.innerHTML = "";
  data.forEach((coin) => {
    addUi(coin);
  });
}


function searchCoinName(e){
  let coinName = e.target.value.toLowerCase().trim()
  let searched = data.filter(coin=>coin.name.toLowerCase().includes(coinName)|| coin.ticker.toLowerCase().trim().includes(coinName))
  tableBody.innerHTML = "";
  searched.forEach(coin=>{
    
    addUi(coin)
   })
  
}

