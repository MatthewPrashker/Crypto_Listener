import React from 'react';

class Currency_List extends React.Component {

    constructor(props) {
        super(props)
        this.setState ({
            alert : false,
        })
    }


    render() {

        const display = 'hello';
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
                    {this.props.list}
                </div>
            </div>
        );
    }

}

export default Currency_List
