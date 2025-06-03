"use client";

import { useState } from "react";

export default function SermonControls() {
	const [search, setSearch] = useState(false);
	const handleSearch = () => setSearch(!search);

	const [filter, setFilter] = useState(false);
	const handleFilter = () => setFilter(!filter);

	return (
		<>
			<div className="sermon-navi-search">
				<i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>

				<i onClick={handleFilter} className="fa-solid fa-sliders"></i>
			</div>
			{search && (
				<form action="" className="sermon-search">
					<input type="text" placeholder="search here... " />
					<i onClick={handleSearch} className="fa-solid fa-search"></i>
				</form>
			)}
			{filter && (
				<div className="sermon-sort">
					<div className="sort-close">
						<span>Sort</span>
						<i onClick={handleFilter} className="fa-solid fa-times "></i>
					</div>
					<ul onClick={handleFilter}>
						<li>Names</li>
						<li>Date</li>
						<li>Size</li>
					</ul>
				</div>
			)}
		</>
	);
}
