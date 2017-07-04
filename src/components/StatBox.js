import React, {Component} from 'react';
import 'components/StatBox.css'

class StatBox extends Component {

    /**
     * Intialize the stat box with the given attribute stat.
     * By default, create an empty stat box.
     * @param {Object} props - properties passed to the StatBox element
     */
    constructor(props) {
        super(props);
        this.state = {
            statValue: '',
            halfValue: '',
            fifthValue: ''
        }
    }

    /**
     * Render function for StatBox
     */
    render() {
        return (
            <div className="statBox">
                <input
                    value={this.state.statValue}
                    onChange={(event) => this.changeStat(event)}
                    maxLength="3"
                    className="mainStat"
                    type="text"/>
                <div className="stackedStats">
                    {/* Wrap each output in div so that they will stack */}
                    <div className="calcStat">
                        <output>{this.state.halfValue}</output>
                    </div>
                    <div className="calcStat">
                        <output>{this.state.fifthValue}</output>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Event handler for when a stat value is changed
     * @param {object} event - Event object from onChange property of <input>
     */
    changeStat(event)
    {
        var stat = event.target.value;

        if(!stat) {
            //If stat is null, clear all values
            this.clearStat();
        } else if (this.isValidStat(stat)) {
            //Only change the stat if new value is valid
            this.calculateStatValues(stat);
        } 
    }

    /**
     * Sets the stat value to null
     */
    clearStat()
    {
        this.setState({
            statValue: '',
            halfValue: '',
            fifthValue: ''
        });
    }

    /**
     * Calculate the half and fifth value for the skill.
     * Assumes stat passed to it is valid.
     * @param {number} stat -The main stat to calculate the values off of
     */
    calculateStatValues(stat)
    {
        this.setState({
            statValue: stat,
            halfValue: Math.floor(stat / 2),
            fifthValue: Math.floor(stat / 5)
        });
    }

    /**
     * Checks if the stat is positive integer
     * @param {number} stat - stat to validate
     * @return {bool} True if given stat is valid. False otherwise.
     */
    isValidStat(stat) {
        return !isNaN(parseFloat(stat)) && isFinite(stat) && (stat >= 0);
    }
}

export default StatBox;