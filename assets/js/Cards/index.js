import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import SearchDropdown from './SearchDropdown'
import SearchHelp from './SearchHelp'

class CardViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {cards: [], searchValue: ''}
    }

    requestCards = () => {
        $.ajax({
            url: this.props.url,
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
        this.setState({searchValue:e.target.value.toLowerCase()})
    }

    render() {
        var cardCount = 0;
        if(this.state.cards) {
            var displayCards = this.state.cards.map(
               (card) => {

                   if(card.unit_name.toLowerCase().indexOf(this.state.searchValue) !== -1 || 
                      card.ability_1_name.toLowerCase().indexOf(this.state.searchValue) !== -1 ||
                      card.ability_2_name.toLowerCase().indexOf(this.state.searchValue) !== -1 ||
                      card.ability_3_name.toLowerCase().indexOf(this.state.searchValue) !== -1 ||
                      card.ability_4_name.toLowerCase().indexOf(this.state.searchValue) !== -1 ||
                      card.faction.toLowerCase().indexOf(this.state.searchValue) !== -1 ||
                      card.race.toLowerCase().indexOf(this.state.searchValue) !== -1 ||
                      card.classification.toLowerCase().indexOf(this.state.searchValue) !== -1 ||
                      card.type.toLowerCase().indexOf(this.state.searchValue) !== -1 ||
                      card.nature.toLowerCase().indexOf(this.state.searchValue) !== -1 ||
                      card.type.toLowerCase().indexOf(this.state.searchValue) !== -1 ||
                      card.size.toLowerCase().indexOf(this.state.searchValue) !== -1
                      ) {
                        cardCount++;
                        return <Card key={card.id} {...card} />
                    }
                }
            )
        }
        return (
            <div>
                <div className="main-center" id="card-search">
                    <SearchHelp cardCount={cardCount} />
                    <input onChange={this.handleSearchChange} type="text" placeholder="Search here" />
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