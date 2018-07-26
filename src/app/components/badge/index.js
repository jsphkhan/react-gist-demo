import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Badge extends PureComponent {
    componentWillMount() {
        const {files} = this.props;
        this.fileArr = [];

        for(let file in files) {
            let language = files[file].language;
            //remove duplicate file types
            if(this.fileArr.indexOf(language) === -1) {
                this.fileArr.push(language);
            }
        }
    }
    render() {
        return (
            <ul>
                {this.fileArr.map((language, index) => {
                    return (<li className="badge" key={index}>{language}</li>);
                })}
            </ul>
        );
    }
}

Badge.propTypes = {
    files: PropTypes.object.isRequired
}

