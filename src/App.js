import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
const searchApiAge = "https://api.agify.io?name=";
const searchApiGender = "https://api.genderize.io?name=";
const searchApiNation = "https://api.nationalize.io?name=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [age, setAge] = useState();
  const [gender,setGender] = useState();
  const [nation, setNation] = useState();
  
  // search for the recipe
  const searchAge = async () => {
    //console.log("the data  search");
    setIsLoading(true);
    const url = searchApiAge + query
    const res = await fetch(url);
    const data = await res.json();
    //console.log("the data  age", data);
    setAge(data.age);
    setIsLoading(false);
  };
  const searchGender = async () => {
    //console.log("the data  search");
    setIsLoading(true);
    const url = searchApiGender + query
    const res = await fetch(url);
    const data = await res.json();
   // console.log("the data gen ", data);
    setGender(data.gender);
    setIsLoading(false);
  };
  const searchNation = async () => {
    //console.log("the data  search");
    setIsLoading(true);
    const url = searchApiNation + query
    const res = await fetch(url);
    const data = await res.json();
    console.log("the data nation ", data);
    setNation(data.country);
    setIsLoading(false);
    console.log("the data nation parse ", nation);
  };
  // useEffect(() => {
  //   searchRecipes()
  // }, []);

  const handleSubmit = (event) => {
   // console.log("the handle submit");
    event.preventDefault();
    searchGender();
    searchAge();
    searchNation();
  }
  
  return (
    <div className="container">
      <h2>The name Guess</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">
      <div className="card-body">
                <div className="recipes"> 
                <span className="category">AGE: {age} </span>
                
                </div>
                <div className="recipes"> 

                <span className="category">Gender: {gender} </span>
                
                </div>
                <div className="recipes"> 

                <span className="category">Nationality: </span>
        {nation ? nation.map(nation => (
          <h2>{nation.country_id}</h2>
         
        )) :null}
                
                </div>

            </div>
           
           
         </div>
      </div>
   
  );
}

export default App;
