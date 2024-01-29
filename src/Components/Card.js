import React from "react";
import { Link, NavLink } from "react-router-dom";


const Card = ({ card, deleteRecipe }) => {
	const { name,cuisineType,image, } = card
	// console.log(name)

	return (
		<div className="max-w-64 shadow-xl rounded-lg p-2">
			<div className="">
				<img alt="receipe-img" src={image} className="max-w-56 h-56" />
				<div className="my-4">
					<h1 className="flex justify-center font-bold my-2">{name}</h1>
					<div className="flex flex-col space-y-2 border-3">
						<p className="flex justify-between">
							Cuisine Type : <span>{cuisineType}</span>
						</p>
						<p className="flex justify-between">
							Ingredients:{" "}
							<span className="underline">
								<NavLink to={`/details/${name}`}>See Receipe</NavLink>
							</span>
						</p>
						<p className="flex justify-between">
							Instructions:{" "}
							<span className="underline">
								<NavLink to={`/details/${name}`}>See Receipe</NavLink>{" "}
							</span>
						</p>
					</div>
					<div className="flex justify-around my-4">
						<button className="bg-blue-500 py-1 px-3 rounded-md text-gray-200">
							Edit
						</button>
						<button
							className="bg-blue-500 py-1 px-3 rounded-md text-gray-200"
							onClick={() => deleteRecipe(card)}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
