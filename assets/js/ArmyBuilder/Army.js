import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Army extends Component {
    constructor(props) {
        super(props);

        this.state = {data: []}
        this.loadArmysFromServer = this.loadArmysFromServer.bind(this)
    }

    loadArmysFromServer() {
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: (data) => {
                this.setState({data:data})
            }
        })
    }

    componentDidMount() {
        this.loadArmysFromServer();
        setInterval(this.loadArmysFromServer, this.props.pollInterval)
    }

    render() {
        if(this.state.data) {
            console.log('Receieved data');

            var armys = this.state.data.map(
                (army) => {
                    return (
                        <p key={army.id}> {army.name} </p>
                    )
                }
            )

            return (
                <div id='Armys'>
                    {armys}
                </div>
            )
        }
    }
}