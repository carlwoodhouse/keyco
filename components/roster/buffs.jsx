import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';

class RosterBuff extends Component {
    render() {
        let buffCount = this.props.raiders.filter(x=> x.class == this.props.buffClass).length ?? 0;
        return (<tr className={this.props.buffClass.toLowerCase().replace(' ', '')}>
                    <td className='class'>{this.props.buffDescription}</td>         
                    {buffCount == 0 ? <td><Icon.X color='red' /></td> : <td><Icon.Check2 color='green' /></td>}
                    {buffCount == 0 ? <td>&nbsp;</td> : <td>x{buffCount}</td>}
                </tr>)
    }
}

class RosterBuffs extends Component  {
    render() {
        return (<table className="table table-dark table-hover buffs">
            <thead>
                <tr>
                    <th scope='col'>Buffs</th>
                    <th scope='col'>&nbsp;</th>
                    <th scope='col'>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <RosterBuff raiders={this.props.raiders} buffClass="Priest" buffDescription="5% Stamina" />
                <RosterBuff raiders={this.props.raiders} buffClass="Mage" buffDescription="5% Intellect" />
                <RosterBuff raiders={this.props.raiders} buffClass="Druid" buffDescription="3% Vers" />
                <RosterBuff raiders={this.props.raiders} buffClass="Warrior" buffDescription="5% Attack Power" />
                <RosterBuff raiders={this.props.raiders} buffClass="Demon Hunter" buffDescription="5% Magic Damage" />
                <RosterBuff raiders={this.props.raiders} buffClass="Monk" buffDescription="5% Physical Damage" />
                <RosterBuff raiders={this.props.raiders} buffClass="Shaman" buffDescription="Skyfury (Autoattack / 2% Mastery)" />
                <RosterBuff raiders={this.props.raiders} buffClass="Paladin" buffDescription="Damage Reduction" />
                <RosterBuff raiders={this.props.raiders} buffClass="Rogue" buffDescription="Damage Reduction Chance (Poison)" />
                <RosterBuff raiders={this.props.raiders} buffClass="Hunter" buffDescription="5% Damage over 80% health" />
            </tbody>
        </table>)
    }
}

export default RosterBuffs

