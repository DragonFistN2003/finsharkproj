import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company'
import { searchCompanies } from '../../api'
import Navbar from '../../Components/Navbar/Navbar'
import Search from '../../Components/Card/Search/Search'
import ListPortfolio from '../../Components/Card/Portfolio/AddPortfolio/ListPortfolio/ListPortfolio'
import CardList from '../../Components/Card/CardList/CardList'

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("")
  const [portfolioValues , setPortfolioValues] = useState<string[]>([])
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>("")

  const handleSearchClick = (e:ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      console.log(e);
  };

  const onPortfolioCreate = async (e: any) => {
    e.preventDefault();

    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    
    setPortfolioValues(updatedPortfolio);
  };

   const onPortfolioDelete = async (e: any) => {
    e.preventDefault();

    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value
    });
    
    setPortfolioValues(removed);
  }; 


  const onSearchSubmit = async (e: SyntheticEvent) =>
     {
      e.preventDefault();

      const result = await searchCompanies(search);

      if (typeof result === "string") {
        setServerError(result);

      } else if(Array.isArray(result)) {

        setSearchResults(result);
      }
     }
    //  console.log("searchResults");

  return (
    <div className="App"> 
      <Search onSearchSubmit={onSearchSubmit} search = {search} handleSearchClick = {handleSearchClick}/>
      {serverError && <h1>{serverError}</h1>}

      <ListPortfolio portfolioValues= {portfolioValues} onPortfolioDelete = {onPortfolioDelete}/>

      <CardList searchResults = {searchResults} onPortfolioCreate = {onPortfolioCreate}/>
    </div>
  )
}

export default SearchPage