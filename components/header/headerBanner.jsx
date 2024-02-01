import React, { Component } from 'react';
import Head from 'next/head';
const GUILD_NAME = process.env.NEXT_PUBLIC_GUILD_NAME;

class HeaderBanner extends Component  {
    render() {
        return (
            <>           
            <Head>
                <title>{GUILD_NAME} - great vault tracker</title>
            </Head>
            <img src={ "/" + GUILD_NAME.replaceAll(" ",  "").toLowerCase() + ".webp" } className="img-fluid" alt="..."></img>
            </>
        )
    }
}

export default HeaderBanner