import React from 'react';

export default class RoleIcon extends React.Component {
    render() {
        return <img src={"icons/role-" + this.props.role.toLowerCase() + ".png" } className="icon" alt={this.props.role} />;
    }
}
