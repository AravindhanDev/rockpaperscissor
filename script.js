const score1 = $(".score1");
const score2 = $(".score2");
const rock = $(".rock");
const paper = $(".paper");
const scissors = $(".scissors");
const res = $(".res");
const com = $(".com");
const hum = $(".hum");

const arr = ["rock", "paper", "scissor"];
var state = "";

function random() {
	return Math.floor(Math.random() * 3);
}

function reset() {
	score1.text(0);
	score2.text(0);
	res.html("Reseted !!!");
	com.text("");
	hum.text("");
	res.removeClass("badge-dark");
	res.removeClass("badge-success");
	res.removeClass("badge-danger");
	res.addClass("badge-link");
}

function tie() {
	res.html("Match Tie!");
	res.addClass("badge-dark");
	res.removeClass("badge-danger");
	res.removeClass("badge-success");
	res.removeClass("badge-link");
}

function lose() {
	res.html("You Lose :(");
	res.addClass("badge-danger");
	res.removeClass("badge-dark");
	res.removeClass("badge-success");
	res.removeClass("badge-link");
}

function won() {
	res.html("You Won :)");
	res.addClass("badge-success");
	res.removeClass("badge-dark");
	res.removeClass("badge-danger");
	res.removeClass("badge-link");
}

function init() {
	com.html("display", "inline");
	hum.html("display", "inline");
}

function animate() {
	hum.animate({ opacity: "1" });
	com.animate({ opacity: "1" });
	setTimeout(() => {
		hum.animate({ opacity: "0.7" });
		com.animate({ opacity: "0.7" });
	}, 2000);
}

rock.on("click", () => {
	init();
	state = "rock";
	var rand = random();
	var computer = arr[rand];
	hum.html(`<kbd>You: ${state}</kbd>`);
	com.html(`<kbd>computer: ${computer}</kbd>`);
	animate();
	let val1 = Number(score1.text());
	let val2 = Number(score2.text());
	if (val1 === 5 || val2 === 5) {
		reset();
	} else if (state === computer) {
		tie();
	} else if (computer === "paper") {
		lose();
		score1.text(val1 + 1);
	} else if (computer === "scissor") {
		won();
		score2.text(val2 + 1);
	}
});

paper.on("click", () => {
	init();
	state = "paper";
	var rand = random();
	var computer = arr[rand];
	hum.html(`<kbd>You: ${state}</kbd>`);
	com.html(`<kbd>computer: ${computer}</kbd>`);
	animate();
	let val1 = Number(score1.text());
	let val2 = Number(score2.text());
	if (val1 === 5 || val2 === 5) {
		reset();
	} else if (state === computer) {
		tie();
	} else if (computer === "scissor") {
		lose();
		score1.text(val1 + 1);
	} else if (computer === "rock") {
		won();
		score2.text(val2 + 1);
	}
});

scissors.on("click", () => {
	init();
	state = "scissor";
	var rand = random();
	var computer = arr[rand];
	hum.html(`<kbd>You: ${state}</kbd>`);
	com.html(`<kbd>computer: ${computer}</kbd>`);
	animate();
	let val1 = Number(score1.text());
	let val2 = Number(score2.text());
	if (val1 === 5 || val2 === 5) {
		reset();
	} else if (state === computer) {
		tie();
	} else if (computer === "rock") {
		lose();
		score1.text(val1 + 1);
	} else if (computer === "paper") {
		won();
		score2.text(val2 + 1);
	}
});
