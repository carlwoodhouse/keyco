import React, { Component } from 'react';
import RoleIcon from '../icons/roleIcon';

class SignupCharacters extends Component  {
    render() {
        return (
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
                  this.props.raiders.map((raider, index) => (
                    <>
                      <tr key={"char-" + raider.name} className={getCssClass(raider, index)} >
                        <td className='class'>{raider.name}</td>
                        <td className='class'  >{raider.class}</td>
                        <td><RoleIcon role={raider.role} /></td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        )
    }
}

function  getCssClass(char, index) {
    let cl = char.class.toLowerCase().replace(' ', '-');

    if (index !== 0 && index % 2 != 0)
    {
        cl += " striped";
    } 

    if (char.trial) {
        cl += " trial";
    }

    if (char.limited) {
        cl += " limited";
    }

    return cl;
}

export default SignupCharacters

