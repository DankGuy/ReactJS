import React from 'react';
import { createRoot } from 'react-dom/client';
import ClockDisplay from './ClockDisplay';

class App extends React.Component {
    state = { date: null, time: null };
    
    render() {
        const fullDate = new Date();
        this.setState({
            date: fullDate.toLocaleDateString(), 
            time: fullDate.toLocaleTimeString()
        });
        return (
            <ClockDisplay date={this.state.date} time={this.state.time}/>
        );
    };
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);