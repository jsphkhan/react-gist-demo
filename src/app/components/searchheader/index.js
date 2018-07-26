import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class SearchHeader extends PureComponent {
    render() {
        const {children} = this.props;
        return (
            <div className="header fixed-top">
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child);
                })}
            </div>
        );
    }
}

SearchHeader.propTypes = {
    children: PropTypes.element.isRequired
}