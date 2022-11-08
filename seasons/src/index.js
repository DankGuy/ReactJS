import React from 'react';
import { createRoot } from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// must extend React.Component to inherit the functionalities
class App extends React.Component {
    // one of the ways to initialize states
    // constructor(props) {
    //     // calling Component (parent of this class) constructor
    //     super(props);
    //     // something like class properties
    //     this.state = { lat: null, long: null, errMessage: null };
    // }

    // a shorter way to initialize state
    // Babel will do its job to process and translate the jsx into the constructor method
    state = { lat: null, long: null, errMessage: null };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // DO NOT USE direct assignment this.state.lat = position.coords.latitude
                // it might occur odd bugs
                this.setState({ lat: position.coords.latitude });
            },
            (err) => this.setState({ errMessage: err.message })
        );

    }

    // render() is very important and a must, requirement of React
    render() {        
        // when the permission request is prompted
        if (!this.state.errMessage && !this.state.lat) {
            return (
                <Spinner text='Please allow us to get your location...'/>
            );
        }
        // when the permission is rejected or an error has occurred
        else if (this.state.errMessage && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errMessage}
                </div>
            )
        }
        // when everything's working fine
        return (
            <SeasonDisplay lat= {this.state.lat} errMessage = {this.state.errMessage} />
        );
    }
}

// DOM
const root = createRoot(document.getElementById('root'));
root.render(<App />);