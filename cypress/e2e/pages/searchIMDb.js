// Import the 'selectors' object from a separate file
import { selectors } from "../../common/selectors";

// Define a SearchBar class
class SearchBar {
  // Define methods for interacting with various elements on the search bar
  // and return Cypress chainable objects
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

// Export the SearchBar class as the default export of this module
export default SearchBar;
