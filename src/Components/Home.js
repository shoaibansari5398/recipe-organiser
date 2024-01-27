import React from "react";
import recipes from "./data";
import Card from "./Card";

const Home = () => {
	return (
		<div>
			<div className="flex border-2 mx-5 my-2 p-2">
				<input
					className="border-2 rounded-md pl-2"
					type="text"
					placeholder="Search for Recipes"
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
				<div className="mt-10 flex space-x-5">
					{
						recipes.map(recipe => <Card key={recipe.name} card={recipe}/>)
					}
				</div>
			</div>
		</div>
	);
};

export default Home;
