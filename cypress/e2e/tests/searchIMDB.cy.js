import SearchBar from "../pages/searchIMDb";
import { selectors } from "../../common/selectors";

describe('IMDB Search', () => {
  const searchBar = new SearchBar();
  let entertainment;

  before(() => {
    // Load the fixture file
    cy.fixture('entertainment').then((data) => {
      entertainment = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Verify that user is able to search for a movie', () => {
    // Get a random movie title
    const randomMovie = entertainment.movies[Math.floor(Math.random() * entertainment.movies.length)].title;
    // Type the random movie title into the search bar
    searchBar.searchContent().type(randomMovie);
    // Click the search button
    searchBar.searchBtn().click();
    // Assert that the search results contain the random movie title
    searchBar.searchResults().should('contain', randomMovie)
    .contains('Titles')
    .should('be.visible');
  });

  it('Verify that category filter works properly', () => {
    // Click the category filter dropdown
    searchBar.categoryFilter().click();
    // Select TV Episodes from the dropdown
    cy.get(selectors.tvEpisodes).click();
    // Get a random TV show title
    const randomTvShow = entertainment.tvShows[Math.floor(Math.random() * entertainment.tvShows.length)].title;
    // Type the random TV show title into the search bar
    searchBar.searchContent().type(randomTvShow);
    // Click the search button
    searchBar.searchBtn().click();
    // Assert that the search results contain the random TV show title and the TV Episodes filter
    searchBar.searchResults().should('be.visible')
      .should('contain', randomTvShow)
      .contains('TV Episodes')
      .should('not.contain', 'Titles');
  });

  it('Verify that an error message is displayed when an invalid search query is entered', () => {
    // Type an invalid search query
    searchBar.searchContent().type('@#!@#;${enter}');
    // Assert that the "No results found" message is displayed
    searchBar.noResultsFound()
    .should('contain.text', 'No results found');
  });

  it('Verify that related results are shown when user makes a typo',()=>{
    // Enter a movie name with a type
    searchBar.searchContent().type('Emception{enter}')
    // Assert that a related movie name is displayed 
    searchBar.searchResults().should('contain', 'Inception')
    .contains('Titles')
    .should('be.visible')
  })

  it('Verify that user is redirect to Advanced search page via search category filter', ()=>{
    searchBar.categoryFilter().click();
    // Select TV Episodes from the dropdown
    cy.get(selectors.advancedSearch).click();
    // Assert that user is able to redirect to Advanced Search page via search category filter
    cy.get(selectors.advancedSearchPageHeader).contains('Advanced Search')
  })
  
});
