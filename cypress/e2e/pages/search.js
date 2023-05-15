import { selectors } from "../../common/selectors";

class SearchPage {
  searchContent = () => {
    return cy.get(selectors.searchField);
  };

  searchResults = () => {
    return cy.get(selectors.searchResults);
  };

  searchBtn = () => {
    return cy.get(selectors.searchBtn);
  };

  noResultsFound = () => {
    return cy.get(selectors.noResultsFound);
  };

  categoryFilter = () => {
    return cy.get(selectors.categoryFilter);
  };

  moreResults = () =>{
    return cy.get(selectors.moreResults)
  }
}

export default SearchPage;
