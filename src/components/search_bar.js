import React from 'react';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  // define new class searchbar and give all its ability to acces class mehtods and properties
  constructor() {
    // it is a function called automatically whenever a new instance of a class is created
    // i.e (whenever we call searchbar in parent component)
    // it is used to initialize the state, variables
    super(); //
    this.state = { // this method is only used in constructor
      inputValue: '',
    }; // state is plain js object used to record and react to user events
    // whenever state is changed it rerenders the component and all of its children component
    // functional components do not have state
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
    this.props.onSearch(this.state.inputValue);
    // make api call using search query
  }

  render() { // this is compulsory method for class based components
    // we can change state in render method also
    // controlled input :: whose value is controlled by state object
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.inputValue}
          placeholder="Search Video"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

Searchbar.defaultProps = {
  onSearch: undefined,
};

Searchbar.propTypes = {
  onSearch: PropTypes.func,
};

export default Searchbar;
