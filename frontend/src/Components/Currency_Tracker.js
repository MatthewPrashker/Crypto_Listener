import React from 'react';

class Currency_Tracker extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            alert: false,
            value: '',
            alert_price: -1,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const val = parseInt(this.state.value)
        if(val <= 0) {
            alert("Alert Prices must be positive")
            this.setState({
                value: '',
            })
        } else {
            this.setState({
                value: '',
                alert_price: this.state.value,
            });
        }
    }

    render() {
        var alert_message;
        if(this.state.alert_price === -1) {
            alert_message = "There is currently no alert-price for this currency";
        } else{
            alert_message = "Alert Price is: ".concat(this.state.alert_price);
        }

        return (
            <div>
                {this.props.currency}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        {alert_message}
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Change Alert Price"/>
                </form>
            </div>

        );
    }

}

export default Currency_Tracker;