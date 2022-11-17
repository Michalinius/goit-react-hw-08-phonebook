import React from "react";

class Notification extends React.Component {

    render() {
        return (
            <h1>{this.props.message}</h1>
        );
    }
}

export default Notification;
