import React, { Component } from 'react';
import SocialLinks from '../guildLinks/socialLinks';
import FooterNavSimple from './footerNavSimple';

const GUILD_NAME = process.env.NEXT_PUBLIC_GUILD_NAME;
const GUILD_REALM = process.env.NEXT_PUBLIC_GUILD_REALM;
const MENU_ENABLED = process.env.SIGNUP_ENABLED == "1"
const updated = (new Date()).toLocaleString();

class FooterLinkContent {
    constructor(name, route) {
        this.name = name;
        this.route = route;
    }
}

class FooterNavItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href={this.props.link.route}>{this.props.link.name}</a>
            </li>
        )
    }
}

export default class FooterNav extends Component {
    render() {
        const rts = [new FooterLinkContent("Vault", "/roster"), new FooterLinkContent("Signups", "/signups")];
        return (
            <>
                {MENU_ENABLED
                    ? <nav className="navbar navbar-dark fixed-bottom bg-dark">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <SocialLinks guildName={GUILD_NAME} guildRealm={GUILD_REALM} />
                            <div class="collapse navbar-collapse" id="footerNavContent">
                                <ul className="navbar-nav me-auto">
                                    <FooterNavItem link={rts[0]} />
                                    <FooterNavItem link={rts[1]} />
                                </ul>
                                <a className="navbar-text" href="#" target="_blank">Updated: {updated}</a>
                            </div>
                        </div>
                    </nav>
                    : <FooterNavSimple />
                }
            </>
        )
    }
}

