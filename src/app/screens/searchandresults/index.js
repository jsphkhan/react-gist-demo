import React, { Component } from 'react';

import SearchHeader from '../../components/searchheader';
import SearchForm from '../../components/searchform';
import SearchResults from '../../components/searchresults';

class SearchAndResults extends Component {
  render() {
    return (
      <div>
        <SearchHeader>
          <SearchForm />
        </SearchHeader>
        <div className="container">
            <SearchResults />
        </div>
      </div>
    );
  }
}

export default SearchAndResults;
