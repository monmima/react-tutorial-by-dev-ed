import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
	const APP_ID = "8aff36dc";
	const APP_KEY = "0e8e6036e0271e570c413bd83aeefc4c";

	const [recipes, setRecipes]  = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");

	// const exampleReq = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

	// effect runs only once
	useEffect(() => {
		// console.log("Effect has been run.");
		getRecipes();
	}, [query]);

	// effect will run everytime counter variable is changed
	// useEffect(() => {
	// 	console.log("Effect has been run.");
	// }, [counter]);

	// Effect runs everytime content is refreshed
	// useEffect(() => {
	// 	console.log("Effect has been run.");
	// });

	const getRecipes = async () => {
		// one way of writing this
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

		const data = await response.json();
		setRecipes(data.hits);
		
		console.log(data.hits);

		// alternative way of writing this; not as good
		// fetch(exampleReq)
		// .then(response => {
		// 	response.json();
		// })

	}

	const updateSearch = e => {
		setSearch(e.target.value);
		console.log(search);
	}

	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
		// empties the search field after query
		setSearch("");
	}

	return (
		<div className="app">
			<form onSubmit={getSearch} className="search-form">
				<input className="search-bar" type="text" value={search} onChange={updateSearch} />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<div className="recipes">
				{recipes.map(recipe => (
					<Recipe
						key = {recipe.recipe.label}
						title = {recipe.recipe.label}
						calories = {recipe.recipe.calories}
						image = {recipe.recipe.image}
						ingredients = {recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	)
}

//  

export default App;