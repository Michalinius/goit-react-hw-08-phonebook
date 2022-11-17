import React from 'react';

class FeedbackOptions extends React.Component {

    render() {

        return (
            <>
                <div className="buttons">
                    <button className="button" onClick={() => this.props.handleReviewClick("Good")}>Good</button>
                    <button className="button" onClick={() => this.props.handleReviewClick("Neutral")}>Neutral</button>
                    <button className="button" onClick={() => this.props.handleReviewClick("Bad")}>Bad</button>
                </div>
            </>
        )
    }
}

export default FeedbackOptions;
