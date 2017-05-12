// var songs = [];
// // songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// // songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// // songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// // songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// // songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// // var newSongs = songs.push("Thriller > by Michael Jackson on the album Thiller");
// // var newSongs = songs.unshift("Let's Groove > by Earth Wind & Fire on the album Rise");

// // for (var i = 0; i < songs.length; i++) {
// // 	songs[i] = songs[i].replace(" >", " -");
// // 	songs[i] = songs[i].replace("*", "");
// // 	songs[i] = songs[i].replace("@", "");
// // 	songs[i] = songs[i].replace("(", "");
// // 	songs[i] = songs[i].replace("!", "");

// // 	var currentSong = songs[i].split("- by");

// // 	var end = currentSong[1].split("on the album");
// // 	currentSong.splice(-1, 1);
// // 	currentSong.push(end[0]);
// // 	currentSong.push(end[1]);

// // 	document.getElementById("tracks").innerHTML += '<div class="song-name">' +currentSong[0] + '</div><ul><li>' + currentSong[1] +'</li><li>' + currentSong[2] + '</li></ul><br>';
// // }

// var btn = `<input type="button" class="btn" id="button" value="more">`;
// var moreBtn = document.getElementsByClassName("moreBtn");

// function printDom(xhrData) {
// 	var myTracks = {}
// 	for (var i = 0; i < xhrData.length; i++) {
// 		myTracks.song = `<div id="container" class="music-panel"><p>Song: $(xhrData.songs[i].songs)</p>`;
// 		myTracks.artist = `<p>Artist: ${xhrData.songs[i].artist}</p>`;
// 		myTracks.album = `<p>Album: ${xhrData.songs[i].album}</p>`;
// 		deleteBtn = `<input type="button" class="btn" id="button" value="delete"></div>`;
// 		document.getElementById("tracks").innerHTML += '<div class="song-name">' +currentSong[0] + '</div><ul><li>' + currentSong[1] +'</li><li>' + currentSong[2] + '</li></ul><br>' + deleteBtn;

// 	}

// 	jsonContainer.innerHTML += btn
// }

// printDom();


// function executeOnLoad() {
// 	var data = JSON.parse(this.responseText);
// 	printDom(data);
// console.log("data", data);
// }

// function executeOnFail() {
// 	alert("Hey Skippy");
// }

// var myRequest = new XMLHttpRequest();
// myRequest.addEventListener("load", executeOnLoad);
// myRequest.addEventListener("error", executeOnFail);
// myRequest.open("GET", "songs.json");
// myRequest.send();