export default function Search({ search, setSearch, handleSearch }) {
	return (
		<div id="Search">
			<input
				type="text"
				className="search__city"
				placeholder="Enter City Name"
				name="search"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
			<button className="search-button" onClick={handleSearch}>
				Search Weather
			</button>
		</div>
	);
}
