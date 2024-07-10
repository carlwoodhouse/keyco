import React, { Component } from 'react';
const GUILD_NAME = process.env.NEXT_PUBLIC_GUILD_NAME;

export default class HeaderNav extends Component  {
    render() {
        return (
            <img src={ "/" + GUILD_NAME.replaceAll(" ",  "").toLowerCase() + ".webp" } className="img-fluid" alt="..."></img>
        )
    }
}