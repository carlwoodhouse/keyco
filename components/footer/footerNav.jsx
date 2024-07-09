import React, { Component } from 'react';
import SocialLinks from '../guild/socialLinks';

const GUILD_NAME = process.env.NEXT_PUBLIC_GUILD_NAME;
const GUILD_REALM = process.env.NEXT_PUBLIC_GUILD_REALM;
const updated = (new Date()).toLocaleString();

export default class FooterNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixed-bottom bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" target="_blank">Updated: {updated}</a>
                    <SocialLinks guildName={GUILD_NAME} guildRealm={GUILD_REALM} />
                </div>
            </nav>
        )
    }
}