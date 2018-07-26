import React, { Component } from 'react';
import {connect} from 'react-redux';
import GistCard from '../gistcard';

import './styles.css';

class SearchResultsInner extends Component {
    render() {
        const {gists, username, isLoading, error} = this.props.allGists;

        if(isLoading) {
            return (
                <div className="results-box loader">
                    <h4>Loading...</h4>
                </div>
            );
        }

        return (
          <div className="results-box">
            {(gists.length && !error) ? (
                <div>
                    <div className="status-box">
                        <p className="lead">
                            <strong>{gists.length}</strong> results found for <strong>{username}</strong>
                        </p>
                    </div>
                    <ul>
                        {gists.map((gist, index) => {
                            return (<GistCard 
                                            key={gist.id} 
                                            gistData={gist}/>);
                        })}
                    </ul>
                </div>
            ) : (
                <div className="error-box">
                    <p className="text-danger">{error}</p>
                </div>
            )}
           </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allGists: state.allGistsReducer,
    }
}

let SearchResults = connect(mapStateToProps, null)(SearchResultsInner);
export default SearchResults;
