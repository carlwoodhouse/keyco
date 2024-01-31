import CharacterLink from "./characterLink";

class RaidBotsLink extends CharacterLink {
    render() {
        return <CharacterLink title="Quick Sim" icon="raidbots.webp" href={"https://www.raidbots.com/simbot/quick?region=eu&realm=" + this.props.realm + "&name=" + this.props.name} />;
    }
}

export default RaidBotsLink