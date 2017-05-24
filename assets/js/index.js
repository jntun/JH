var React = require('react')
var ReactDOM = require('react-dom')

var Card = React.createClass({
    loadCardsFromServer: function() {
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data:data});
            }.bind(this)
        })
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadCardsFromServer();
        setInterval(this.loadCardsFromServer,
                    this.props.pollInterval)
    },

    render: function() {
        if(this.state.data) {
            console.log('Received data')
            var cardNodes = this.state.data.map(function(card) {
                return <li id={card.id}> {card.id} - {card.unit_name} </li>
            })
        }
        return (
            <div>
                <ul>
                    {cardNodes}
                </ul>
            </div>
        )
    }
})

ReactDOM.render(<Card url='/heroscape/api' pollInterval={1000} />, document.getElementById('container'))