import Image from 'next/image'
import * as Icon from 'react-bootstrap-icons';

import SocialLinks from '../components/guild/socialLinks';
import HeaderBanner from '../components/header/headerBanner';
import presentationSignups from '../api/presentation/signups';
import RosterBuffs from '../components/roster/buffs';
import RosterUtility from '../components/roster/utility';
import RosterArmourTypes from '../components/roster/armour';
import SignupCharacters from '../components/roster/signupCharacters';

const GUILD_NAME = process.env.NEXT_PUBLIC_GUILD_NAME;
const GUILD_REALM = process.env.NEXT_PUBLIC_GUILD_REALM;


export default function Home({ raiders, trials, lastUpdated }) {
  console.log(trials);
  return (
    <div className="container-fluid p-0">
      <HeaderBanner />
      <div className="row m-0">
        <div class="col-12 col-lg-6">
          <SignupCharacters raiders={raiders} />
          <h4>Trialists</h4>
          <SignupCharacters raiders={trials} />
        </div>
        <div class="col-12 col-lg-3">
          <RosterBuffs raiders={raiders} />
          <RosterArmourTypes raiders={raiders} />
        </div>
        <div class="col-12 col-lg-3">
          <RosterUtility raiders={raiders} />
        </div>
      </div>

      <nav className="navbar navbar-dark fixed-bottom bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" target="_blank">Updated: {lastUpdated}</a>
          <SocialLinks guildName={GUILD_NAME} guildRealm={GUILD_REALM} />
        </div>
      </nav>
    </div>
  );
}

export async function getStaticProps({ query }) {
  const roster = await presentationSignups.buildRosterTree();
  
  const raiders = roster.filter(x => !x.trial);
  const trials = roster.filter(x => x.trial);

  return {
    props: {
      raiders: JSON.parse(JSON.stringify(raiders)),
      trials: JSON.parse(JSON.stringify(trials)),
      lastUpdated: (new Date()).toLocaleString()
    }
  }
}


