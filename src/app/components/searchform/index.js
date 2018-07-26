import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchAllGists} from '../../redux/actions/allgists';

class SearchFormInner extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    handleSubmit(evt) {
        evt.preventDefault();
        let username = this.inputRef.current.value.trim();

        //if user has not typed anything
        if(username.length === 0) {
            return;
        }
        //dispatch
        this.props.fetchAllGists(username);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="searchform">
                <label />
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Search for a user, eg. jsphkhan."
                  ref={this.inputRef}/>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllGists: (username) => {
            dispatch(fetchAllGists(username));
        } 
    }
}

let SearchForm = connect(null, mapDispatchToProps)(SearchFormInner);
export default SearchForm;
