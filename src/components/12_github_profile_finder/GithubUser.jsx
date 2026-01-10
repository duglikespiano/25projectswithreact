export default function User({ user }) {
	const { avatar_url, followers, following, html_url, public_repos, login } = user;
	return (
		<div id="User">
			<img src={avatar_url} alt={login} />
			<p className="followers">Followers: {followers}</p>
			<p className="following">Following: {following}</p>
			<p className="public-repository">Public Repository: {public_repos}</p>
			<a href={html_url} className="link">
				click to check the profile
			</a>
		</div>
	);
}
