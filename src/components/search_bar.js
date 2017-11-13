import React from 'react';

class Searchbar extends React.Component { //define new class searchbar and give all its ability to acces class mehtods and properties

    constructor() { //it is a function called automatically whenever a new instance of a class is created (whenever we call searchbar in parent component)
        //it is used to initialize the state, variables
        super(); //
        this.state = {  //this mehtod is only used in constructor
            inputValue: '',
        }; //state is plain js object used to record and react to user events
        //whenever state is changed it rerenders the component and all of its children component
        //functional components do not have state
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            inputValue: event.target.value
        });
        //make api call using search query
    }

    render() { //this is compulsory method for class based components
        //we can change state in render method also
        //controlled input :: whose value is set by using state object so its value will change when state changes
        return (
            <div>
                <input type='text'
                    value={this.state.inputValue}
                    placeholder='enter video name'
                    onChange={this.handleInputChange}
                />
            </div>
        );
    }
}
export default Searchbar;
