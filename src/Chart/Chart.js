import Chart from "react-apexcharts"

export default function PriceChart(props){
    return (
        props.categories && props.series ? (
            <Chart 
                options={props.categories}
                series={props.series}
                type="line"
                width="1200"
                height="400"
            />
        ) : null
    )
}
