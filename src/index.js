import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyDu9PFL8M4245aL6xe4AhNGAHHZvIQlBms';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({key: API_KEY, term: 'snowboard'}, videos => {
            this.setState({videos})
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}


ReactDom.render(<App />, document.querySelector('.container'));