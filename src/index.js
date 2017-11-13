import React from 'react';//get react from node modules and give me access here.we imported react as javascript module
import ReactDOM from 'react-dom';//react dom is needed to render the html dom
import Searchbar from './components/search_bar.js';

const API_KEY = 'AIzaSyAq5k4HnMgn7c0aGjwBGhaC_mohirFJeSA';

const App = () => {
    return (
        <div>
            <Searchbar />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('container'));     //take this html and put it on page
