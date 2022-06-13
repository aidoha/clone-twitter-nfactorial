import React from "react";
import profileImage from "../../img/cat.jpeg";

import "./styles.css";

const CreatePost = () => {
	return (
		<div className="create-post-wrapper">
			<div className="input-wrapper">
				<img src={profileImage} className="profile-image" />
				<input type="text" placeholder="Что происходит?" />
			</div>
			<button className="post-button">Твитнуть</button>
		</div>
	);
};

export default CreatePost;
