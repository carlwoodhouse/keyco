import CharacterLink from "./characterLink";
import React from 'react';

class RaiderIOLink extends CharacterLink {
    render() {
        return <CharacterLink className="d-inline p-right" title="RaiderIO Profile" icon="rio.svg" href={"https://raider.io/characters/eu/" + this.props.realm + "/" + this.props.name} />;
    }
}

export default RaiderIOLink