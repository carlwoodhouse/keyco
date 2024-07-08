import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';

class RosterArmourType extends Component {
    render() {
        let count = this.props.raiders.filter(x => this.props.armourClasses.includes(x.class)).length;
        return (<tr className='striped'>
                    <td>{this.props.description}</td>
                    <td>{count}</td>
                    {this.props.count == 0 ? <td><Icon.X /></td> : <td><Icon.Check2 /></td>}
                </tr>)
    }
}

class RosterArmourTypes extends Component  {
    render() {
        return (<table className="table table-dark table-hover buffs">
            <thead>
                <tr>
                    <th scope='col'>Utility</th>
                    <th scope='col'>Count</th>
                    <th scope='col'>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <RosterArmourType armourClasses={["Priest", "Mage", "Warlock"]} description="Cloth" />
            </tbody>
        </table>)
    }
}

export default RosterArmourTypes

