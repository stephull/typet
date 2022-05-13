import React from 'react';

class Test extends React.Component {
    render() {
        return(
            <>
                <small>Testing complete!</small>
                <small>If you're seeing this, this means the test is working.</small>
                <small>Test id: {this.props.id}</small>
            </>
        )
    }
}

export default Test;