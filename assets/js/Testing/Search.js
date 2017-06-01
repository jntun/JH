import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Autosuggest from 'react-autosuggest'

const theme = {
  container: {
    position: 'relative'
  },
  input: {
    width: 240,
    height: 30,
    padding: '10px 20px',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 300,
    fontSize: 16,
    border: '1px solid #aaa',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  inputFocused: {
    outline: 'none'
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: 'none'
  },
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    top: 51,
    width: 280,
    border: '1px solid #aaa',
    backgroundColor: '#fff',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 300,
    fontSize: 16,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px'
  },
  suggestionHighlighted: {
    backgroundColor: '#ddd'
  }
};


class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };    
  }

  loadCardsFromServer = () => {
    $.ajax({
      url: '/heroscape/api/cards',
      datatype: 'json',
      cache: false,
      success: (cards) => {
        this.setState({cards:cards})
        console.log(this.state.cards)
      }
    })
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    })
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  }; 

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

getSuggestions(value) {
  const escapedValue = this.escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return this.state.cards.filter(language => regex.test(language.unit_name));
}

getSuggestionValue(suggestion) {
  return suggestion.unit_name;
}

renderSuggestion(suggestion) {
  return (
    <span>{suggestion.unit_name} {suggestion.id}</span>
  );
}

componentDidMount() {
  this.loadCardsFromServer();
  setInterval(this.loadCardsFromServer, 3000)
}

render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search a card",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        theme={theme}
      />
    );
  }
}

ReactDOM.render(<Search />, document.getElementById('container'))
