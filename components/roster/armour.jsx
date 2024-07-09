import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';

class RosterArmourType extends Component {
    render() {
        let count = this.props.raiders.filter(x => this.props.armourClasses.includes(x.class)).length;
        return (<tr className='striped'>
                    <td>{this.props.description}</td>
                    <td>{count}</td>
                </tr>)
    }
}

class RosterArmourTypes extends Component  {
    render() {
        return (<table className="table table-dark table-hover buffs">
            <thead>
                <tr>
                    <th scope='col'>Armour Types</th>
                    <th scope='col'>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <RosterArmourType raiders={this.props.raiders} armourClasses={["Priest", "Mage", "Warlock"]} description="Cloth" />
                <RosterArmourType raiders={this.props.raiders} armourClasses={["Druid", "Demon Hunter", "Rogue", "Monk"]} description="Leather" />
                <RosterArmourType raiders={this.props.raiders} armourClasses={["Hunter", "Shaman", "Evoker"]} description="Mail" />
                <RosterArmourType raiders={this.props.raiders} armourClasses={["Death Knight", "Paladin", "Warrior"]} description="Plate" />
            </tbody>
        </table>)
    }
}

export default RosterArmourTypes

