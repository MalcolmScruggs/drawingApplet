import React from 'react';
import {SketchField, Tools} from 'react-sketch';
import './App.css';

const styles = {
    sketchContainer: {
        border: '2px dashed rgb(102, 102, 102)',
    },
    toolsContainer: {
        marginTop: '10px'
    },
    mainContainer: {
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tool: Tools.Pencil,
            lineColor: "#000000",
            lineWidth: 1,
            fillColor: "transparent"
        }
    }

    render() {
        return (
            <div className="App container-fluid">
                <p>This is the sketch field</p>
                <div style={styles.mainContainer}>
                    <div style={styles.sketchContainer}>
                        <SketchField height='600px'
                                     tool={this.state.tool}
                                     ref={c => (this._sketch = c)}
                                     lineColor={this.state.lineColor}
                                     fillColor={this.state.fillColor}
                                     lineWidth={this.state.lineWidth}/>
                    </div>
                    <div style={styles.toolsContainer}>
                        <div className="row ml-2">
                            Select Drawing tool
                            <div className="btn btn-primary mx-2" onClick={() => this.setState({ tool: Tools.Pencil})}>Pencil</div>
                            <div className="btn btn-primary mr-2" onClick={() => this.setState({ tool: Tools.Rectangle})}>Rectangle</div>
                            <div className="btn btn-primary mr-2" onClick={() => this.setState({ tool: Tools.Circle})}>Circle</div>
                            <div className="btn btn-primary" onClick={() => this.setState({ tool: Tools.Line})}>Line</div>
                        </div>
                        <div className="row ml-2 mt-2">
                            Select Line Color
                            <div className="btn btn-primary mx-2" onClick={() => this.setState({ lineColor: "#000000"})}>Black</div>
                            <div style={{backgroundColor: "red"}} className="btn btn-primary mr-2" onClick={() => this.setState({ lineColor: "red"})}>Red</div>
                            <div style={{backgroundColor: "green"}} className="btn btn-primary mr-2" onClick={() => this.setState({ lineColor: "green"})}>Green</div>
                            <div style={{backgroundColor: "blue"}} className="btn btn-primary mr-2" onClick={() => this.setState({ lineColor: "blue"})}>Blue</div>
                            <div style={{backgroundColor: "yellow", color: "black"}} className="btn btn-primary mr-2" onClick={() => this.setState({ lineColor: "yellow"})}>Yellow</div>
                        </div>
                        <div className="row ml-2 mt-2">
                            Select Line Width
                            <div className="btn btn-primary mx-2" onClick={() => this.setState({ lineWidth: 1})}>1</div>
                            <div className="btn btn-primary mr-2" onClick={() => this.setState({ lineWidth: 2})}>2</div>
                            <div className="btn btn-primary mr-2" onClick={() => this.setState({ lineWidth: 3})}>3</div>
                            <div className="btn btn-primary mr-2" onClick={() => this.setState({ lineWidth: 4})}>4</div>
                            <div className="btn btn-primary mr-2" onClick={() => this.setState({ lineWidth: 5})}>5</div>
                            <div className="btn btn-primary mr-2" onClick={() => this.setState({ lineWidth: 10})}>10</div>
                        </div>
                        <div className="row ml-2 mt-2">
                            Select Fill Color
                            <div className="btn btn-primary mx-2" onClick={() => this.setState({ lineColor: "#000000"})}>Black</div>
                            <div style={{backgroundColor: "red"}} className="btn btn-primary mr-2" onClick={() => this.setState({ fillColor: "red"})}>Red</div>
                            <div style={{backgroundColor: "green"}} className="btn btn-primary mr-2" onClick={() => this.setState({ fillColor: "green"})}>Green</div>
                            <div style={{backgroundColor: "blue"}} className="btn btn-primary mr-2" onClick={() => this.setState({ fillColor: "blue"})}>Blue</div>
                            <div style={{backgroundColor: "yellow", color:"black"}} className="btn btn-primary mr-2" onClick={() => this.setState({ fillColor: "yellow"})}>Yellow</div>

                            <div className="btn btn-primary mr-2" onClick={() => this.setState({ fillColor: "transparent"})}>none</div>
                        </div>
                        <div className="row ml-2 mt-2">
                            <div className="btn btn-primary mx-2" onClick={() => this._sketch.clear()}>clear</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
