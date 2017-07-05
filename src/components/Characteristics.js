import React, {Component} from 'react';
import 'components/Characteristics.css';
import StatBox from 'components/StatBox.js';

class Characteristics extends Component{
    /**
     * Intialize characteristic stats
     * @param {Object} props - properties passed to the Characteristics element
     */
    constructor(props) {
        super(props);
        this.characteristicsName = [
            "STR","CON","SIZ","DEX","APP","INT","POW","EDU"
         ];
    }

    render() {
        return (
            <div>
                {this.characteristicsName.map(this.createCharacteristic)}
            </div>
        );
    }

    createCharacteristic(characteristicsName) {
        return(
            <div className="characteristic">
                <StatBox statName={characteristicsName}/>
            </div>
        ); 
    }
}

export default Characteristics;