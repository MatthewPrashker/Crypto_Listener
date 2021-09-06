import React from 'react';

class Currency_List extends React.Component {

    constructor(props) {
        super(props)
        this.setState ({
            alert : false,
        })
    }

    componentDidUpdate(prevProps) {
        //TODO API Request here
    }


    render() {

        const number_display = "The number of tracked currencies is ".concat(this.props.list.length);
        
            
        return (
            <div>
                <h1>
                    Tracked Currencies:
                </h1>
                <div>
                    {number_display}
                </div>
                <div>
                    <ul>
                        {this.props.list.map( currency => (
                            <li key = {currency}>
                                {currency}
                                <button  onClick = {() => this.props.untrack(currency)}>
                                    Untrack Currency
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

}

export default Currency_List
