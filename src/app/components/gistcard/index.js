import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './styles.css';
import Badge from '../badge';

export default class GistCard extends PureComponent {
    render() {
        const {gistData} = this.props;
        const noOfFiles = Object.keys(gistData.files).length;
        return (
            <Link to={{pathname: `/${gistData.id}`, state: {description: gistData.description, files: gistData.files}}}>
                <li className="list-row">
                    <p className="lead">{(gistData.description) || 'No Description'}</p>
                    <p className="text-secondary">{noOfFiles} {(noOfFiles > 1) ? 'Files' : 'File'}</p>
                    <Badge files={gistData.files}/>
                </li>
            </Link>
        );
    }
}

GistCard.propTypes = {
    gistData: PropTypes.object.isRequired
}

