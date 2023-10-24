const images = [ 
	"국화:Chrysanthemum.jpg", 
	"사막:Desert.jpg", 
	"수국:Hydrangeas.jpg", 
	"해파리:Jellyfish.jpg", 
	"코알라:Koala.jpg", 
	"등대:Lighthouse.jpg", 
	"펭귄:Penguins.jpg", 
	"툴립:Tulips.jpg"
];

const changeImage = function() {
	let index = Math.floor(Math.random() * images.length);
	let info = images[index].split(":");
	setInterval(()=>{
		 index = Math.floor(Math.random() * images.length);
		 info = images[index].split(":");
		$("#img_test").attr("src", "/ch07/images/"+info[1]);
		console.log(info[0],info[1]);
	},1000)
}

const change = function() {
		let index = Math.floor(Math.random() * images.length);
		let info = images[index].split(":");
		$("#img_test").attr("src", "/ch07/images/"+info[1]);
}

$(function(){
	$("#btn-slideshow").click(function(){
		changeImage();
	});
	$("#btn-change").click(function(){
		change();
	});
});