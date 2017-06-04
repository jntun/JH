import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { SplitButton, MenuItem } from 'react-bootstrap'
import Card from './Card'

class CardViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {cards: [], appendUrl: '', searchValue: ''}
    }

    requestCards = () => {
        $.ajax({
            url: this.props.url + this.state.appendUrl + this.state.searchValue,
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
        this.setState({searchValue:e.target.value})
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
                    <SplitButton title="Search by" key="1">
                        <MenuItem eventKey="2">Name</MenuItem>
                        <MenuItem eventKey="2">Something</MenuItem>
                    </SplitButton>
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