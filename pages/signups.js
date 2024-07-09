import presentationSignups from '../api/presentation/signups';
import RosterBuffs from '../components/roster/buffs';
import RosterUtility from '../components/roster/utility';
import RosterArmourTypes from '../components/roster/armour';
import SignupCharacters from '../components/roster/signupCharacters';
import RosterSummary from '../components/roster/summary';
import RosterTierGroups from '../components/roster/tiergroups';

export default function Home({ roster, raiders, trials }) {
  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        <SignupCharacters raiders={raiders} />
        <h4>Trialists</h4>
        <SignupCharacters raiders={trials} />
      </div>
      <div className="col-12 col-lg-6">
        <RosterSummary raiders={roster} />
        <div className="row">
          <div className="col-12 col-lg-6">
            <RosterBuffs raiders={raiders} />
          </div>
          <div className="col-12 col-lg-6">
            <RosterUtility raiders={raiders} />
            <RosterArmourTypes raiders={raiders} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ query }) {
  const roster = await presentationSignups.buildRosterTree();

  const raiders = roster.filter(x => !x.trial);
  const trials = roster.filter(x => x.trial);

  return {
    props: {
      roster: JSON.parse(JSON.stringify(roster)),
      raiders: JSON.parse(JSON.stringify(raiders)),
      trials: JSON.parse(JSON.stringify(trials))
    }
  }
}


