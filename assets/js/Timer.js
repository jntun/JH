import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Timer extends Component {

constructor(props) {
    super(props);
}

componentDidMount() {
    setInterval(
        () => {
            console.log('Test')
        },
        3000
    )
}

    render() {
        return
    }
}

ReactDOM.render(<Timer />, document.getElementById('container'))