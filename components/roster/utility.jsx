import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';

class RosterUtility extends Component {
    render() {
        return (<tr className='striped'>
                    <td className='class'>{this.props.description}</td>
                    <td>{this.props.count}</td>
                    {this.props.count == 0 ? <td><Icon.X /></td> : <td><Icon.Check2 /></td>}
                </tr>)
    }
}

class RosterUtilities extends Component  {
    render() {
        let brCount = this.props.raiders.filter(x => ["Warlock", "Death Knight", "Druid", "Paladin"].includes(x.class)).length;
        let lustCount = this.props.raiders.filter(x => ["Mage", "Evoker", "Hunter", "Shaman"].includes(x.class)).length;
        let movementCount = this.props.raiders.filter(x => ["Druid", "Warlock", "Shaman"].includes(x.class)).length;
        let immuCount = this.props.raiders.filter(x => ["Death Knight", "Paladin", "Mage", "Hunter", "Demon Hunter"].includes(x.class)).length;

        return (<table className="table table-dark table-hover buffs">
            <thead>
                <tr>
                    <th scope='col'>Utility</th>
                    <th scope='col'>Count</th>
                    <th scope='col'>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <RosterUtility count={brCount} description="Battle Rez" />
                <RosterUtility count={lustCount} description="Bloodlust/Heroism" />
                <RosterUtility count={this.props.raiders.filter(x => x.class == "Warlock").length} description="Healthstones" />
                <RosterUtility count={movementCount} description="Raid Moverment CD" />
                <RosterUtility count={immuCount} description="Immunity" />
            </tbody>
        </table>)
    }
}

export default RosterUtilities

