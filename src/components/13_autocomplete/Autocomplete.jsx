import { useState, useEffect, useCallback } from 'react';
import './Autocomplete.scss';
import Suggestions from './Suggestions';

export default function Autocomplete() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);
	const [, setError] = useState(null); // 👈 fix here
	const [searchParam, setSerachParam] = useState('');
	const [showDropdown, setShowDropdown] = useState(false);
	const [filteredUsers, setFilteredUsers] = useState([]);

	function handleChange(e) {
		const query = e.target.value.toLowerCase();
		setSerachParam(query);
		if (query.length > 1) {
			const filteredData = users && users.length ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) : [];
			setFilteredUsers(filteredData);
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
		}
	}

	const fetchListOfUsers = useCallback(async () => {
		try {
			const response = await fetch('https://dummyjson.com/users');
			const data = await response.json();
			if (data && data.users && data.users.length) {
				setTimeout(() => {
					setUsers(data.users.map((userItem) => userItem.firstName));
					setLoading(false);
					setError(null);
				}, 1000);
			}
		} catch (error) {
			setTimeout(() => {
				setLoading(false);
				console.log(error); // ✅ changed from console.com(error)
				setError(() => error); // ✅ functional update (avoids dependency warning)
			}, 1000);
		}
	}, []);

	function handleClick(e) {
		console.log(e.target.innerText);
		setShowDropdown(false);
		setSerachParam(e.target.innerText);
		setFilteredUsers([]);
	}

	useEffect(() => {
		fetchListOfUsers();
	}, [fetchListOfUsers]);

	return (
		<div id="Autocomplete">
			{loading ? (
				<h1>Loading Data! Please wait</h1>
			) : (
				<input name="search-users" placeholder="Search Users here..." value={searchParam} onChange={handleChange} />
			)}
			{showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
		</div>
	);
}
