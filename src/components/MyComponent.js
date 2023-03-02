import React from 'react'
import UserInfor from './UserInfor';
import MyInfor from './MyInfor';

class MyComponent extends React.Component {    
    state = {
        listUsers: [
            {id: 1, name: "Anh", age: 20},
            {id: 2, name: "Ha", age: 15},
            {id: 3, name: "Mai", age: 50}
        ]
    }
    handleAddUser = (userObj) => {
        console.log('hello');
        this.setState({
            listUsers : [userObj, ...this.state.listUsers]
        })
    }
    render() {
        return (
            <div>
                <UserInfor
                handleAddUser = {this.handleAddUser}
                ></UserInfor>
                <MyInfor listUsers = {this.state.listUsers}/>
            </div>
        );
    }
}

export default MyComponent;