export default function User({ user }) {
	const { avatar_url, followers, following, html_url, public_repos, login } = user;
	return (
		<div>
			<img src={avatar_url} alt={login} />
			<p>{followers}</p>
			<p>{following}</p>
			<p>{public_repos}</p>
			<a href={html_url}>click to check the profile</a>
		</div>
	);
}
