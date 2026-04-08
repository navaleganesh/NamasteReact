import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    render() {
        const { name, designation } = this.props;

        return (

            <div>
                <p>Name: {name}</p>
                <p>Designation : {designation}</p>
                <h1>{this.state.count}</h1>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >
                    Increment
                </button>
            </div>
        )
    }
}

export default UserClass;