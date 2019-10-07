import React from 'react';
import {SketchField, Tools} from 'react-sketch';
import './App.css';

const styles = {
    sketchContainer: {
        border: '2px dashed rgb(102, 102, 102)',
    },
    toolsContainer: {
        border: '2px solid rgb(102, 102, 102)',
        marginTop: '10px'
    },
    mainContainer: {
        margin: '10px',
    }
}

class App extends React.Component {


    render() {
        return (
            <div className="App">
                <p>This is the sketch field</p>
                <div style={styles.mainContainer}>
                    <div style={styles.sketchContainer}>
                        <SketchField height='600px'
                                     tool={Tools.Rectangle}
                                     lineColor='black'
                                     lineWidth={3}/>
                    </div>
                    <div style={styles.toolsContainer}>
                        Tools go here
                        <div onClick={}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
