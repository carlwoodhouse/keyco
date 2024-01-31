import ToolLink from "../externalTools/toolLink"

class WarcraftLogsLink extends ToolLink {
    render() {
        return <ToolLink title="Warcraft Logs" icon="wcl.png" href={"https://www.warcraftlogs.com/guild/eu/" + this.props.realm + "/" + this.props.name} />;
    }
}

export default WarcraftLogsLink