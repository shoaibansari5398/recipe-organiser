import React, { useState } from "react";
import recipes from "./data";
import Card from "./Card";

const Home = () => {
	const [data, setData] = useState(recipes);
	const [filteredData, setFilteredData] = useState(recipes);

	const addCard = () => {
		console.log("clicked");
	};

	const searchReceipe = (e) => {
		const filteredData = data.filter((recipe) =>
			recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setFilteredData(filteredData);
	};

	const deleteRecipe = (card) => {
		const updatedRecipe = data.filter((recipe) => recipe.name !== card.name);
		setData(updatedRecipe);
		console.log(card);
	};

	const editRecipe = (e) => {};

	return (
		<div>
			<div className="flex border-2 mx-5 my-2 p-2">
				<input
					className="border-2 rounded-md pl-2"
					type="text"
					placeholder="Search for Recipes"
					// value={searchText}
					onChange={searchReceipe}
				/>
				<div className="flex space-x-2 mx-5">
					<label className="font-bold">Filters:</label>
					<label>
						<input className="mr-1" type="radio" value="name" />
						Name
					</label>
					<label>
						<input className="mr-1" type="radio" value="ingredients" />
						Ingredients
					</label>
					<label>
						<input className="mr-1" type="radio" value="cuisines" />
						Cuisines
					</label>
				</div>
			</div>
			<div className="mx-5 my-10">
				<h1 className="font-bold text-3xl">All Recipes : </h1>
				<div className="flex mt-10">
					<div className="flex space-x-5">
						{filteredData.map((recipe) => (
							<Card
								key={recipe.name}
								card={recipe}
								deleteRecipe={deleteRecipe}
								editRecipe={editRecipe}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
