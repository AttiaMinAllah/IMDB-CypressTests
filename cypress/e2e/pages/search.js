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
}

export default SearchPage;
