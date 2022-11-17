import React from "react";

class Section extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </>
        );
    }
}

export default Section;
