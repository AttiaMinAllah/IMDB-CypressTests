import SearchPage from "../pages/search";
import { selectors } from "../../common/selectors";

describe('IMDB Search', () => {
  const search = new SearchPage();
  let entertainment;

  before(() => {
    // Load the fixture file
    cy.fixture('entertainment').then((data) => {
      entertainment = data;
    });
  });

  beforeEach(() => {
    cy.visit('https://www.imdb.com/');
  });

  it('Verify that user is able to search for a movie', () => {
    // Get a random movie title
    const randomMovie = entertainment.movies[Math.floor(Math.random() * entertainment.movies.length)].title;
    // Type the random movie title into the search bar
    search.searchContent().type(randomMovie);
    // Click the search button
    search.searchBtn().click();
    // Assert that the search results contain the random movie title
    search.searchResults()
    .contains('Titles')
    .should('be.visible');
    search.searchResults().should('contain', randomMovie);
    search.moreResults().click()
    //Assert
  });

  it('Verify that user is able to perform Advanced search'), ()=>{


  }

  it.skip('Verify that category filter works as expected', () => {
    // Click the category filter dropdown
    search.categoryFilter().click();
    // Select TV Episodes from the dropdown
    cy.get(selectors.tvEpisodes).click();
    // Get a random TV show title
    const randomTvShow = entertainment.tvShows[Math.floor(Math.random() * entertainment.tvShows.length)].title;
    // Type the random TV show title into the search bar
    search.searchContent().type(randomTvShow);
    // Click the search button
    search.searchBtn().click();
    // Assert that the search results contain the random TV show title and the TV Episodes filter
    search.searchResults().should('be.visible')
      .should('contain', randomTvShow)
      .contains('TV Episodes')
      .should('not.contain', 'Titles');
  });

  it.skip('Verify that an error message is displayed when an invalid search query is entered', () => {
    // Type an invalid search query
    search.searchContent().type('@#!@#;${enter}');
    // Assert that the "No results found" message is displayed
    search.noResultsFound().should('contain.text', 'No results found');
  });
});