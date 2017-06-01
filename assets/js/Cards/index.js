import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'

class CardViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {cards: [], url: ''}
    }

    requestCards = () => {
        $.ajax({
            url: this.props.url + this.state.url,
            datatype: 'json',
            cache: false,
            success: (data) => {
                this.setState({cards:data})
            }
        })
    }

    componentDidMount() {
        this.requestCards();
        setInterval(this.requestCards, this.props.pollInterval)
    }

    handleSearchChange = (e) => {
        this.setState({url:e.target.value})
        this.requestCards()
    }

    render() {
        if(this.state.cards) {
            var displayCards = this.state.cards.map(
               (card) => {
                    return (
                        <Card key={card.id} {...card} />
                    )
                }
            )
        }

        return (
            <div>
                <div className="main-center" id="card-search">
                    <input onChange={this.handleSearchChange} type="text" placeholder="Search for a card" />
                </div>
                <div>
                    <div className="card-center">
                        {displayCards}
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<CardViewer url={'/heroscape/api/cards/'} pollInterval={3000}/>, document.getElementById('card-container'))