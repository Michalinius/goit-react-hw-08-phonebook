import React from 'react';

class Statistics extends React.Component {

    render() {

        return (
            <>
                <div>
                    <p>Good: {this.props.good}</p>
                    <p>Neutral: {this.props.neutral}</p>
                    <p>Bad: {this.props.bad}</p>
                    <p>Total: {this.props.total} </p>
                    <p>Positive feedback: {this.props.percentage.toFixed(2)} %</p>
                </div>
            </>
        )
    }
}

export default Statistics;
