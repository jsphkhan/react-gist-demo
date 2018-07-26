import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSingleGist} from '../../redux/actions/singlegist';
import Forks from '../../components/forks';
import './styles.css';

class GistDetailsInner extends Component {
  componentDidMount() {
    const gistId = this.props.match.params.id;
    this.props.fetchSingleGist(gistId);
  }
  renderForks() {
    const {isLoading, error, forks} = this.props.singleGist;
     if(isLoading) {
      return (<p className="text-secondary">Loading ...</p>);
     }
     if(forks.length && !error) {
       return (
         <Forks forks={forks.slice(0,3)}/>
       );
     } else {
       return (
        <span className="text-danger indent-left">{error}</span>
       );
     }
  }
  render() {
    //show the data that is coming in. This will keep the user engaged
    //and he will see something on the screen.
    //forks are loaded by another api call.
    const {description, files} = this.props.location.state;

    return (
      <div className="container">
        <div className="details-box">
          <p className="lead">{(description) || 'No Description'}</p>
          <div className="files-box">
            <p className="text-primary">Files:</p>
            <ul className="indent-left">
              {Object.values(files).map((file, index) => {
                return (
                  <li key={index} className="text-secondary">
                      <a href={file.raw_url} target="_blank" className="text-secondary">
                        {file.filename}
                      </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="forks-box">
            <p className="text-primary">Forks:</p>
            {this.renderForks()}
          </div>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleGist: state.singleGistReducer
})
const mapDispatchToProps = (dispatch) => {
  return {
      fetchSingleGist: (gistId) => {
          dispatch(fetchSingleGist(gistId));
      } 
  }
}
let GistDetails = connect(mapStateToProps, mapDispatchToProps)(GistDetailsInner);
export default GistDetails;
