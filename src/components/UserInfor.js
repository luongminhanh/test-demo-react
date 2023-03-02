import React from 'react'


class UserInfor extends React.Component {
    state = {
        name: 'Anh',
        address: 'Ha Noi',
        age: 20
    };
    
    handleClick = (event) => {
        console.log("click me button");
        console.log(event.target);
        console.log(this.state.address);
        console.log("My name is: ", this.state.name);
        this.setState({
            name: "Luong Minh Anh",
            age: Math.floor((Math.random() * 100)+1)
        })
    }
 
    handleOnMouseOver(event) {
        console.log(event.pageX);
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
        this.props.handleAddUser({
            id: Math.random()*100 + '-random',
            name: this.state.name,
            age: this.state.age
        })
    }

    handleOnChangeInput = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        console.log(event.target.value);
        this.setState({
            age: event.target.value
        })
    }
    render() {
        return (
            <div>
            My name is {this.state.name} and I'm from {this.state.address}, I'm {this.state.age}
            <button onClick={this.handleClick}>Click me</button>
            <form onSubmit = {(event) => this.handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                value={this.state.name}
                type = "text"
                onChange={(event) => this.handleOnChangeInput(event)}
                />
                <label>Your age: </label>
                <input
                value={this.state.age}
                type = "text"
                onChange={(event) => this.handleOnChangeAge(event)}
                />
                <button>Login</button>
            </form></div>
        )
    }
}

export default UserInfor;