import ToolLink from "../externalTools/toolLink"

class ArmoryLink extends ToolLink {
    render() {
        return <ToolLink title="Armory Profile" icon="wow.svg" href={"https://worldofwarcraft.com/en-gb/guild/eu/" + this.props.realm + "/" + this.props.name} />;
    }
}

export default ArmoryLink