import React, { useEffect, useState } from "react"
import Navigation from "../Navigation/Navigation";
import Load from "../Load/Load";
import Price from "../Price/Price";
import PriceChart from "../Chart/Chart";

export default function Dashboard(){
    
    const [loading, setLoading] = useState(true);
    const [price, setPrice] = useState(null);
    const [currency, setCurrency] = useState("EUR")
    const [categories, setCategories] = useState(null)
    const [series, setSeries] = useState(null)

    const options = [
        { key: 'eur', value: 'EUR', text: 'EUR', symbol:'€'},
        { key: 'usd', value: 'USD', text: 'USD', symbol:'$'},
        { key: 'gbp', value: 'GBP', text: 'GBP', symbol:'£' },
      ];
      

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            const data = await res.json();
            setPrice(data.bpi);
            setLoading(false)
            getChart()
        }
        fetchData()
    }, [])

    const getChart = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7');
        const data = await res.json();
        console.log(data)
        const categories = data.prices.map(price => new Date(price[0]).toLocaleDateString());
        const series = data.prices.map(price => price[1]);
        setCategories({
            xaxis: {
                categories: categories
            }
        })
        setSeries([
            {
                name: "Price:",
                data: series
            }
        ])
        setLoading(false)
    }    

    const handleSelect = (event) => {
        const { value } = event.target;
        setCurrency(value);
    }
    
    return (
        <div>
          <Navigation name="Dashboard"/>
          {loading ? <Load /> :
            <div>
                <Price 
                handleSelect={handleSelect}
                options={options}
                currency={currency}
                price={price}
                />
                <PriceChart 
                categories={categories}
                series={series}
                />
            </div>
          }
        </div>
      )      
}