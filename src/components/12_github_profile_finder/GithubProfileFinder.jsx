import { useState, useEffect, useCallback } from 'react';
import GithubUser from './GithubUser';
import './GithubProfileFinder.scss';

export default function GithubProfileFinder() {
	const [userName, setUserName] = useState('duglikespiano');
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchGithubUserData = useCallback(async () => {
		setLoading(true);
		const res = await fetch(`https://api.github.com/users/${userName}`);
		const data = await res.json();
		if (data) {
			setUserData(data);
			setLoading(false);
			console.log(data);
		}
	}, [userName]);

	useEffect(() => {
		fetchGithubUserData();
	}, [fetchGithubUserData]);

	if (loading) {
		return <h1>Loading data! Please wait</h1>;
	}

	function handleSubmit() {}
	return (
		<div id="GithubProfileFinder">
			<div className="input-wrapper">
				<input
					type="text"
					name="search-by-username"
					placeholder="Search Github Username..."
					value={userName}
					onChange={(event) => setUserName(event.target.value)}
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
			{userData !== null ? <GithubUser user={userData} /> : null}
		</div>
	);
}
