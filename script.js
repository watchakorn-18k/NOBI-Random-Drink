let btnRandom = document.querySelector('.buttons');
let result = document.querySelector('h1');

 
let users = ['ชานมกาแฟ', 'ชานมโกโก้', 'ชานมคาราเมล', 'ชานมไต้หวัน', 'ชานมน้ำผึ้ง'];
var imageUrls = ['f1.jpg','f2.jpg','f3.jpg','f4.jpg','f5.jpg'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
 
    return result;
}
 
btnRandom.addEventListener('click', () => {
	let index = getRandomNumber(0, users.length-1);
	result.innerText = users[index];
	document.getElementById('img-menu').src=imageUrls[index];

});