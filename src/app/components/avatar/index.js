import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Avatar extends PureComponent {
    render() {
        const {avatarUrl, name} = this.props;
        return [
                <img key="image" src={avatarUrl} alt={name} className="avatar"/>,
                <span key="username" className="text-secondary">{name}</span>
        ];
    }
}

Avatar.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

