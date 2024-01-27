import React from "react";

const Card = ({card}) => {
	// const { name, image, cuisineType, ingredients, instructions } = card
	// console.log(card?.name)
	return (
		<div className="max-w-64 shadow-xl rounded-lg p-2">
			<div className="">
				<img
					alt="receipe-img"
					src="https://www.ocado.com/cmscontent/recipe_image_large/33362787.png?awck"
					className="max-w-56"
				/>
				<div className="my-2">
					<h1 className="flex justify-center font-bold">{card?.name}</h1>
					<div className="flex flex-col space-y-1 border-3">
						<p className="flex justify-between">
							Cuisine Type : <span>{card?.cuisineType}</span>
						</p>
						<p className="flex justify-between">
							Ingredients:{" "}
							<span className="underline">
								See Receipe
							</span>
						</p>
						<p className="flex justify-between">
							Instructions: <span className="underline">See Receipe </span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
