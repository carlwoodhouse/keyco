import React, { Component } from 'react';
import ArmoryLink from '../guildLinks/armoryLink';
import RaiderIOLink from '../guildLinks/raiderioLink';

class SocialLinks extends Component  {
    render() {
        return (
        <div className="guildlinks">
            <span className='squiggle'>{this.props.guildName}</span>
            <RaiderIOLink name={this.props.guildName} realm={this.props.guildRealm} />
            <ArmoryLink name={this.props.guildName} realm={this.props.guildRealm} />
            <a title='Guild Logs' className='d-inline' href={ "https://www.warcraftlogs.com/guild/" + process.env.GUILD_REGION + "/" + process.env.GUILD_REALM + "/" + process.env.GUILD_NAME } target="_blank"><img src="icons/wcl.png" className="icon" alt="WarcraftLogs" /></a>
        </div>
        )
    }
}

export default SocialLinks