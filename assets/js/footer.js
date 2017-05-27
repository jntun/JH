import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Footer extends Component {
    render() {
        return (
            <div id="footer" className="footer">
                <p id="footer-text">
                    Made by <strong>Justin Tunheim</strong><br />
                </p>
            </div>
        )
    }
}

ReactDOM.render(<Footer />, document.getElementById('footer-container'))