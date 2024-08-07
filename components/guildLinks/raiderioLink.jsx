import ToolLink from "../externalTools/toolLink"
import { slug } from "../../utils";

class RaiderIOLink extends ToolLink {
    render() {
        return <ToolLink className="d-inline p-right" title="RaiderIO Profile" icon="rio.svg" href={"https://raider.io/guilds/eu/" + slug(this.props.realm) + "/" + this.props.name} />;
    }
}

export default RaiderIOLink