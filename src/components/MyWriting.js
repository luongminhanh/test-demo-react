import React from 'react'
// (event)=>this.handleName(event) để hạn chế lỗi
class MyWriting extends React.Component {
    state = {
        name: "Minh Anh",
        age: 20,
        address: 'Hà Nội'
    }
    handleClick = () => {
        console.log('hello');
    }
    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    handleAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <p>Xin chào part 2!</p>
                <p>Mình tên là: {this.state.name}</p>
                <p>Mình đến từ {this.state.address}</p>
                <p>Năm nay mình {this.state.age} tuổi</p>
                <button onClick={this.handleClick}>Click me</button>
                <form onSubmit={this.handleSubmit}>
                    <label>Họ Tên: </label>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleName(event)} />
                    <label>Địa chỉ: </label>
                    <input type="text" onChange={this.handleAddress} />
                    <label>Tuổi: </label>
                    <input type="text" onChange={this.handleAge} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyWriting;