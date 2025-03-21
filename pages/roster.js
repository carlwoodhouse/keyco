import * as Icon from 'react-bootstrap-icons';
import WarcraftlogsLink from '../components/characterLink/warcraftLogsLink';
import ArmoryLink from '../components/characterLink/armoryLink';
import presentationRoster from '../api/presentation/roster';
import RaidBotsLink from '../components/characterLink/raidbotsLink';
import RaiderIOLink from '../components/characterLink/raiderioLink';

const tierNUMBER = process.env.NEXT_PUBLIC_CURRENT_TIER;

export default function Home({ raiders }) {
  return (
    <div className="table-responsive">
      <table className="table table-dark table-hover roster tracker accordion">
        <thead>
          <tr>
            <th scope="col">&nbsp;</th>
            <th scope="col">score</th>
            <th scope="col">name</th>
            <th scope="col">ilvl</th>
            <th scope="col">t{tierNUMBER}</th>
            <th scope="col">m+ (10+)</th>
            <th scope="col">m+ (max)</th>
            <th scope="col">m+ (total)</th>
            <th scope="col">tools</th>
          </tr>
        </thead>
        <tbody>
          {
            raiders.map((user, index) => (
              // these rows should become components tbh
              <>
                <tr key={"char-" + user.name + "-" + user.realm} className={user.class.toLowerCase().replace(" ", "-") + (index !== 0 && index % 2 != 0 ? " striped" : "")} data-bs-toggle="collapse" data-bs-target={".char-" + user.name.toLowerCase()}>
                  {user.alts.length > 0
                    ? <td scope="row"><Icon.ChevronDown /></td>
                    : <td scope="row">&nbsp;</td>
                  }
                  <td>{user.mp_score}</td>
                  <td className='class'>{user.name}</td>
                  <td>{user.ilvl}</td>
                  <td>{user.tierCount}</td>
                  <td>{user.mp_twenties}</td>
                  <td>{user.mp_max}</td>
                  <td>{user.mp_total === 10 ? "10+" : user.mp_total}</td>
                  <td>
                    <RaiderIOLink name={user.name} realm={user.realm} />
                    <ArmoryLink name={user.name} realm={user.realm} />
                    <RaidBotsLink name={user.name} realm={user.realm} />
                    <WarcraftlogsLink name={user.name} realm={user.realm} />
                  </td>
                </tr>
                {user.alts.map((alt) => (
                  <tr key={"char-" + alt.name + "-" + alt.realm} className={"collapse accordian-collapse alt char-" + user.name.toLowerCase() + " " + alt.class.toLowerCase().replace(" ", "-") + (index !== 0 && index % 2 != 0 ? " striped" : "")} data-bs-parent=".table">
                    <td scope="row">&nbsp;</td>
                    <td>{alt.mp_score}</td>
                    <td className='class'>{alt.name}</td>
                    <td>{alt.ilvl}</td>
                    <td>{alt.tierCount}</td>
                    <td>{alt.mp_twenties}</td>
                    <td>{alt.mp_max}</td>
                    <td>{alt.mp_total === 10 ? "10+" : alt.mp_total}</td>
                    <td>
                      <a title='RaiderIO Profile' className='d-inline p-right' href={"https://raider.io/characters/eu/" + alt.realm + "/" + alt.name} target="_blank"><img src="icons/rio.svg" className="icon" alt="RaiderIO" /></a>
                      <ArmoryLink name={alt.name} realm={alt.realm} />
                      <a title='Quick SIM' className='d-inline' href={"https://www.raidbots.com/simbot/quick?region=eu&realm=" + alt.realm + "&name=" + alt.name} target="_blank"><img src="icons/raidbots.webp" className="icon" alt="Raidbots" /></a>
                      <WarcraftlogsLink name={alt.name} realm={alt.realm} />
                    </td>
                  </tr>
                ))}
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps({ query }) {
  const roster = await presentationRoster.buildRosterTree();

  var resetDate = new Date();
  resetDate.setDate(resetDate.getDate() + (1 + 7 - resetDate.getDay()) % 7);

  return {
    props: {
      raiders: JSON.parse(JSON.stringify(roster)),
      resetDate: resetDate.toLocaleDateString()
    }
  }
}


