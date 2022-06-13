import React from "react";
import cat from "../../img/cat.jpeg";

import "./styles.css";

const TweetList = () => {
	const array = [
		{
			accountName: "Стихи забытого поэта",
			tweet:
				'Судьба не дура, зря людей сводить не станет. М. Фрай "Простые волшебные вещи',
			commentNumber: 1,
			retweetNumber: 30,
			likeNumber: 150,
		},
		{
			accountName: "Стихи забытого поэта",
			tweet:
				'Судьба не дура, зря людей сводить не станет. М. Фрай "Простые волшебные вещи',
			commentNumber: 1,
			retweetNumber: 30,
			likeNumber: 150,
		},
		{
			accountName: "Стихи забытого поэта",
			tweet:
				'Судьба не дура, зря людей сводить не станет. М. Фрай "Простые волшебные вещи',
			commentNumber: 1,
			retweetNumber: 30,
			likeNumber: 150,
		},
	];
	return (
		<div className="tweet-list-wrapper">
			{array.map((tweet) => (
				<div className="tweet-box">
					<div className="user-image">
						<img src={cat} />
					</div>
					<div className="tweet-content">
						<div>{tweet.accountName}</div>
						<div>{tweet.tweet}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default TweetList;
