import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import RosterTierGroups from './tiergroups';

class RosterSummarylineByRole extends Component {
    render() {
        const byRole = this.props.raiders.filter(x => x.role == this.props.role.toUpperCase()).length;
        return (<tr>
            <td>{this.props.role}</td>
            <td>x{byRole}</td>
        </tr>)
    }
}

class RosterSummaryline extends Component {
    render() {
        return (<tr className={this.props.cssClass}>
            <td>{this.props.description}</td>
            <td>x{this.props.count}</td>
        </tr>)
    }
}

export default class RosterSummary extends Component {
    render() {
        const tCount = this.props.raiders.filter(x => x.trial).length;
        const lCount = this.props.raiders.filter(x => x.limited).length;
        return (
            <>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <table className="table table-dark table-hover buffs">
                            <thead>
                                <tr>
                                    <th scope='col'>Summary</th>
                                    <th scope='col'>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <RosterSummarylineByRole raiders={this.props.raiders} role="Tank" />
                                <RosterSummarylineByRole raiders={this.props.raiders} role="Dps" />
                                <RosterSummarylineByRole raiders={this.props.raiders} role="Healer" />
                                <RosterSummaryline count={tCount} description="Trialist" />
                                <RosterSummaryline count={lCount} description="Limited Availability" cssClass="limited" />
                            </tbody>
                        </table>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <RosterTierGroups raiders={this.props.raiders} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className='py-1 px-2 hcbg'>
                            <p className="font-monospace lh-sm fs-4 text-center">{this.props.raiders.length}x total raiders of which {tCount} are trialists and 4 have limited availability.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}