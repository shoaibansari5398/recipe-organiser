import React from "react";
import recipes from "./data";
import { useParams } from "react-router-dom";

const CardInfo = () => {

	const {name} = useParams();


	const card = recipes.filter(r => r.name === name)

	return (
		<div className="flex flex-col space-y-10 mt-10 items-center">
			<h1 className="text-4xl">{card[0]?.name}</h1>
			<div className="flex shadow-xl rounded-lg p-3 max-w-[1000px] justify-center space-x-5">
				<img
					alt="receipe-img"
					src="https://www.ocado.com/cmscontent/recipe_image_large/33362787.png?awck"
					className="max-w-96"
				/>
				<div className="flex flex-col space-y-5">
					<label className="font-bold">Cuisine: {card[0]?.cuisineType}</label>
					<label className="font-bold">
						Ingredients: {card[0]?.ingredients.join(", ")}
					</label>
					<h3 className="font-bold">Instructions:</h3>
					<ol>
						{card[0]?.instructions.map(l => <li key={l}>{l }</li>)}
					</ol>
				</div>
			</div>
		</div>
	);
};

export default CardInfo;
