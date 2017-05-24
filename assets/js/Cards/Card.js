import React from 'react'
import ReactDOM from 'react-dom'

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {data: []}
        this.loadCardsFromServer = this.loadCardsFromServer.bind(this);
    }

    loadCardsFromServer() {
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
        this.loadCardsFromServer();
        setInterval(this.loadCardsFromServer, this.props.pollInterval)
    }

    render() {
        if(this.state.data) {
            
            console.log('Received data');
            
            var cards = this.state.data.map( 
                (card) => {
                    return (
                        <p key={card.id}> {card.unit_name} - {card.classification}</p>
                    )
                }
            )

            return (
                <div id='Cards'>
                    {cards}
                </div>
            )
        }
    }

}