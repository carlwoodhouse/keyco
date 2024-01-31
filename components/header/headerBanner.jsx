import React, { Component } from 'react';
const GUILD_NAME = process.env.NEXT_PUBLIC_GUILD_NAME;

class HeaderBanner extends Component  {
    render() {
        return (
            <img src={ "/" + GUILD_NAME.replace(" ",  "").toLowerCase() + ".webp" } className="img-fluid" alt="..."></img>
        )
    }
}

export default HeaderBanner