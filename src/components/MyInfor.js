import React from 'react'
import './MyInfor.scss'
import logo from './../logo.svg'

class MyInfor extends React.Component {
    state = {
        isShow : true
    }
    handleHideShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        const { listUsers } = this.props;

        return (
            <div className='display-infor-container'>
                <img src={logo}/>
                <div onClick={this.handleHideShow}>
                    {this.state.isShow === true ? "Hide this element" : "Show this element"}
                </div>
                {(this.state.isShow &&
                <div>
                    {listUsers.map((element) => {
                        return (
                            <div key={element.id} className={element.age > 18 ? "green" : "red"}>
                                <h1>Ten toi la: {element.name}</h1>
                                <h1>Tôi năm nay {element.age} tuối</h1>
                            </div>
                        )
                    })}
                </div>)}
                <div>My name's {this.props.name}</div>
                <div>My age's {this.props.age} </div>
            </div>
        )
    }
}

export default MyInfor;