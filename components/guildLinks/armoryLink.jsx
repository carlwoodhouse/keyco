import ToolLink from "../externalTools/toolLink"
import { slug } from '../../utils';

class ArmoryLink extends ToolLink {
    render() {
        return <ToolLink title="Armory Profile" icon="wow.svg" href={"https://worldofwarcraft.com/en-gb/guild/eu/" + slug(this.props.realm) + "/" + slug(this.props.name)} />;
    }
}

export default ArmoryLink