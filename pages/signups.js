import Image from 'next/image'
import * as Icon from 'react-bootstrap-icons';

import WarcraftlogsLink from '../components/characterLink/warcraftLogsLink';
import ArmoryLink from '../components/characterLink/armoryLink';
import SocialLinks from '../components/guild/socialLinks';
import HeaderBanner from '../components/header/headerBanner';
import presentationSignups from '../api/presentation/signups';
import RaidBotsLink from '../components/characterLink/raidbotsLink';
import RaiderIOLink from '../components/characterLink/raiderioLink';
import RosterBuffs from '../components/roster/buffs'
import RosterUtility from '../components/roster/utility'

const GUILD_NAME = process.env.NEXT_PUBLIC_GUILD_NAME;
const GUILD_REALM = process.env.NEXT_PUBLIC_GUILD_REALM;


export default function Home({ raiders, lastUpdated }) {
  return (
    <div className="container-fluid p-0">
      <HeaderBanner />
      <div className="row">
      <div class="col">
        <div className="table-responsive">
          <table className="table table-dark table-hover roster">
            <thead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">class</th>
                <th scope="col">role</th>
              </tr>
            </thead>
            <tbody>
              {
                raiders.map((user, index) => (
                  <>
                    <tr key={"char-" + user.name + "-" + user.realm} className={user.class.toLowerCase().replace(" ", "-") + (index !== 0 && index % 2 != 0 ? " striped" : "")} data-bs-toggle="collapse" data-bs-target={".char-" + user.name.toLowerCase()}>
                      <td className='class'>{user.name}</td>
                      <td className='class'  >{user.class}</td>
                      <td>{user.role}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
        </div>
        <div class="col">
        <RosterBuffs raiders={raiders} />
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
  return {
    props: {
      raiders: JSON.parse(JSON.stringify(roster)),
      lastUpdated: (new Date()).toLocaleString(),
    }
  }
}


