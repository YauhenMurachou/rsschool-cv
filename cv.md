**Yauhen Murachou**
===============

Junior frontend-developer(React)

**My contacts**
-----------
Location: Vitebsk, Belarus

[LinkedIn](https://www.linkedin.com/in/yauhen-murachou-6a4842224/)

[GitHub](https://github.com/YauhenMurachou)

**About Me**
-----------
I want to build a career in web development. This is really interesting to me. I have a specific high education, a combination of humanitarian and technical education (lawyer and forensic expert). 6.5 years of experience as a forensic expert allowed me to develop such qualities as accuracy, attention to detail, efficiency, strict time management, etc. I've been studying front-end development since December 2020. I am interested in web development, because this job provides endless opportunities for professional growth,
in addition, there are a huge number of free, high-quality self-education resources and a large developer community. And to be honest, I just love to create something beautiful from scratch.

**Skills**
-----------
* HTML5, CSS3
* JavaScript
* React
* Redux
* Git, GitHub
* VS Code, PrePros
* Figma
* Postman, MongoDB Compass

**Code example**
---------------
This is a code snippet from my skills networking tutorial project, written with React. Class component "UserC" sends a Get request to the server and, using the map array method, displays a list of the received users.

```
class UsersC extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		if (this.props.users.length === 0) {
			axios.get('https://skills-network.samuraijs.com/api/1.0/users')
				.then(response => {
					this.props.setUsers(response.data.items)
				})
		}
	}

	render() {
		return <>
			{
				this.props.users.map(user =>
					<div key={user.id} className={classes.item}>
						<span>{user.photos.small ? <img src='user.photos' />
							: <img src={avatar} className={classes.avatar} />}</span>

						<span> {user.name} </span>
						<span> id: {user.id} </span>
						<span> {user.city} </span>
						<span> {user.country}</span>
						<span> {user.status}</span>
						<div>
							{user.followed 
							? <button onClick={() => { this.props.unfollowUsers(user.id) }}>unfollow</button>
							: <button onClick={() => { this.props.followUsers(user.id) }}>follow</button>}
						</div>
					</div>
				)
			}
		</>
	}
};
```

**Courses**
-----------

IT-school TeachMeSkills - React Front End Developer (21.01.2021-25.10.2021)

**Languages**
-----------
* Belarusian - Native
* English - Intermediate
* Russian - Proficiency
* Ukrainian - Upper Intermediate
