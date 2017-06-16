import React, {Component} from 'react';

export default class SearchHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
        }
    }

    toggleDisplay = (e) => {
        if(this.state.display) {
            this.setState({display:false});
        } else {
            this.setState({display:true});
        }
    }

    render() {
        let cardCountText = <p id="card-count">Cards found that match this search: <br/><strong>{this.props.cardCount}</strong></p>;

        if(this.state.display) {
            return (
                <div className="search-help-container">
                    <p onClick={(e) => this.toggleDisplay()}>Click this to hide me!</p>
                    <p id="search-info">Search for cards by typing any attribute on a card<br/>or leave blank to show all cards</p>
                    {cardCountText}
                </div>
            );
        } else {
            return (
            <div className="search-help-container-hidden">
                <p onClick={(e) => this.toggleDisplay()}>Show help</p>
                {cardCountText}
            </div>
            )
        }
    }
}