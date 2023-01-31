import Card from "./components/Card";
import  eth  from '../src/img/ETH.png';
import  bin  from '../src/img/Binance.png';
import  bit  from '../src/img/bitcoin.png';
import  shib  from '../src/img/shiba.png';
import  sol  from '../src/img/Solana.png';

function App() {
  return (
<div className=" bg-[#14172B] w-full  h-[2550px] lg:h-screen  relative">
    <div className="relative h-screem w-screen"> 
      <svg 
      className="absolute top-[25px] left-[100px]
      lg:top-[170px] lg:left-[80px] "
      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
<path d="M5.99998 14.6666H9.99998C13.3333 14.6666 14.6666 13.3333 14.6666 9.99998V5.99998C14.6666 2.66665 13.3333 1.33331 9.99998 1.33331H5.99998C2.66665 1.33331 1.33331 2.66665 1.33331 5.99998V9.99998C1.33331 13.3333 2.66665 14.6666 5.99998 14.6666Z" stroke="#DC1FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

<svg 
 className="absolute top-[31px] left-[105.5px]
 lg:top-[176.5px] lg:left-[85.5px]  "
 xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
<path d="M0.886658 4.66003L2.47332 2.60003C2.69999 2.30669 3.11999 2.25336 3.41332 2.48003L4.63332 3.44003C4.92666 3.66669 5.34666 3.61336 5.57332 3.32669L7.11332 1.34003" stroke="#DC1FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<h1 className="font-primary text-xl lg:text-[16px] text-[#ECF0FF] font-bold absolute top-[20px] left-[135px] lg:top-[167px] lg:left-[120px]">Trending Assets</h1>
</div>
<div className="flex flex-col gap-y-4 absolute top-[200px] lg:top-[250px] 
lg:flex-row lg:gap-x-12 bg-[#14172B] left-[150px] lg:left-[110px]">
  <Card 
  title1="Bitcoin (BTC)"
  title2="Price"
  price1="$31,812.80"
  price2="$60,000"
  subprice1 = "+10%"
  subprice2=""
  img1={sol}
  img2={eth}
  img3={bin}
 img = {bit}
  />

  <Card 
  title1="Solana (SOL)"
  title2="Price"
  price1="$32.83"
  price2="$60,000"
  subprice1 = ""
    subprice2="-12.32%"
   img1={bit}
  img2={eth}
  img3={bin}
 img = {sol}
  />

  <Card 
  title1="Ethereum (ETH)"
  title2="Price"
  price1="$1,466.45"
  price2="$60,000"
  subprice1 = ""
    subprice2="-11.93%"
 img1={sol}
  img2={bit}
  img3={bin}
 img = {eth}
  />

  <Card 
  title1="Binance USD (BUSD)"
  title2="Price"
  price1="$1.00"
  price2="$60,000"
  subprice1 = "+0.26%"
    subprice2=""
   img1={sol}
  img2={eth}
  img3={bit}
 img = {bin}
  />

  <Card 
  title1="Shiba Inu (SHIB)"
  title2="Price"
  price1="$0.01948"
  price2="$60,000"
  subprice1 = ""
    subprice2="-8.1%"
  img1={sol}
  img2={eth}
  img3={bin}
 img = {shib}
  />
 
</div>
</div>
  );
}

export default App;
