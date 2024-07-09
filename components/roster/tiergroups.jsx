import React, { Component } from 'react';

class RosterTierGroup extends Component {
    render() {
        let count = this.props.raiders.filter(x => this.props.tokenClasses.includes(x.class)).length;
        return (<tr className='striped' key={this.props.description}>
            <td>{this.props.description}</td>
            <td key={"tsd-" + this.props.description}>{ this.props.tokenClasses.map((x, index) => (
                    <span key={"tsp-" + x} className={x.toLowerCase().replace(' ', '-') + " class"}>
                        {index < this.props.tokenClasses.length - 1 ? x + ", " : x}
                    </span>)
                )}
            </td>
            <td>{count}</td>
        </tr>)
    }
}

export default class RosterTierGroups extends Component  {
    render() {
        const dreadful = ["Death Knight", "Demon Hunter", "Warlock"];
        const zenith = ["Warrior", "Rogue", "Monk", "Evoker"];
        const mystic = ["Druid", "Hunter", "Mage"];
        const venerated = ["Paladin", "Priest", "Shaman"];

        return (<table className="table table-dark table-hover buffs">
            <thead>
                <tr>
                    <th scope='col'>Tier Groups</th>
                    <th scope='col'>&nbsp;</th>
                    <th scope='col'>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <RosterTierGroup raiders={this.props.raiders} tokenClasses={dreadful} description="Dreadful" />
                <RosterTierGroup raiders={this.props.raiders} tokenClasses={mystic} description="Mystic" />
                <RosterTierGroup raiders={this.props.raiders} tokenClasses={venerated} description="Venerated" />
                <RosterTierGroup raiders={this.props.raiders} tokenClasses={zenith} description="Zenith" />
            </tbody>
        </table>)
    }
}