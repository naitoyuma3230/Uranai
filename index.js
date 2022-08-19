(function () {
	"use strict";
	const userNameInput = document.getElementById("userName");
	const assessmentButton = document.getElementById("assessment");
	const resultDivided = document.getElementById("result-area");
	const tweetDivided = document.getElementById("tweet-area");

	assessmentButton.onclick = () => {
		const userName = userNameInput.value;
		createResult(userName);
	};

	const answers = [
		"{userName}の本性はめんどくさがりやです。",
		"{userName}の本性はやさしさの塊です。",
		"{userName}の本性は変態です。",
		"{userName}の本性は天才です",
		"{userName}の本性は悪魔です",
		"{userName}の本性は見栄っ張りですです。",
		"{userName}の本性は恥ずかしがり屋です。",
		"{userName}の本性は目立ちたがり屋です",
		"{userName}の本性は普通です。",
		"{userName}の本性は貯金1億持ってる人です。",
		"{userName}の本性はドケチです",
		"{userName}の本性は天使です。",
		"{userName}の本性はイケメンです。",
		"{userName}の本性はバイリンガルです",
		"{userName}の本性は負けず嫌いです。",
		"{userName}の本性は意地悪です。",
	];

	/**
	 * 名前の文字列を渡すと診断結果を返す関数
	 * @param {string} userName ユーザーの名前
	 * @return {string} 診断結果
	 */
	function assessment(userName) {
		//全文字のコード番号を取得してそれを足し合わせる
		let sumOfcharCode = 0;
		for (let i = 0; i < userName.length; i++) {
			sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
		}

		// 文字のコード番号の合計を回答の数で割って添字の数値を求める
		const index = sumOfcharCode % answers.length;
		let result = userName ? answers[index] : "名前が入力されていません";

		result = result.replace(/{userName}/g, userName);
		console.log(result);
		return result;
	}

	function createResult(result) {
		const p = document.createElement("p");
		p.innerText = assessment(result).toString();
		resultDivided.appendChild(p);
		userNameInput.value = "";
	}

	console.log(assessment("太朗"));
	console.log(assessment("次郎"));
	console.log(assessment("太朗"));
})();
