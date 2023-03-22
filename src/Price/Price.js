import './style.css'


export default function Price(props){
    
    const options = props.options.map((option) => (
        <option key={option.key} value={option.value}>
            {option.text}
        </option>   
    ))
    
    return (
        <div className="price-container">
            <div className="form">
                <select onChange={props.handleSelect} options={props.options}>
                    {options}
                </select>
            </div>
            <div className='price'>
                <span>Bitcoin: &nbsp;</span>
                {props.price[props.currency].rate}
                {props.options.find((option) => option.value === props.currency).symbol}
            </div>
        </div>
    )
}