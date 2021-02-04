let btnRandom_cool = document.querySelector('.button_cool');
let btnRandom_spin = document.querySelector('.button_spin');
let result = document.querySelector('h1');

 
let menu_cool = ['ชานมกาแฟ', 'ชานมโกโก้', 'ชานมคาราเมล', 'ชานมไต้หวัน', 'ชานมน้ำผึ้ง', 'ชานมเมล่อน', 'ชานมลิ้นจี่', 'ชานมวนิลา', 'ชานมสตอว์เบอรี่', 'ชานมแอปปเปิ้ล', 'ชานมเผือก','ชาแอปเปิ้ล','ชาสตอว์เบอรรี่','ชาลิ้นจี่','ชาเมล่อน','ชาเขียวแอปเปิ้ล','ชาเขียวสตอว์เบอรี่','ชาเขียวลิ้นจี่','ชาเขียวเมล่อน','ชาเขียวมะนาว','ชาเขียวน้ำผึ้งมะนาว','ชามะนาว','ชาดำเย็น','ชาเขียวใส','ชาบ๊วย','แอปเปิ้ลโซดา','สตอว์เบอรี่โซดา','ลิ้นจี่โซดา','เมล่อนโซดา','มะนาวโซดา','แดงมะนาวโซดา','แดงโซดา','โนบิ นมสด','นมสดไข่มุกบราวน์ชูก้า','นมสดบราวน์ชูก้า','ชาเขียวน้ำผึ้ง','ชาดำ','นมสดคาราเมล','นมสดน้ำผึ้ง','นมสดมะพร้าว','น้ำผึ้ง','มอคค่า','มัทฉะลาเต้','น้ำมะพร้าว','นมสดโกโก้','กาแฟลาเต้','โอวัลติน','น้ำผึ้งมะนาว','นมชมพู','ชาเขียวมะลิ','โกโก้','ชาเย็น','ชาเขียว','กาแฟ',];
var menu_cool_img = ['f1.jpg','f2.jpg','f3.jpg','f4.jpg','f5.jpg','f6.jpg','f7.jpg','f8.jpg','f9.jpg','f10.jpg','f11.jpg','f12.jpg','f13.jpg','f14.jpg','f15.jpg','f16.jpg','f17.jpg','f18.jpg','f19.jpg','f20.jpg','f21.jpg','f22.jpg','f23.jpg','f24.jpg','f25.jpg','f26.jpg','f27.jpg','f28.jpg','f29.jpg','f30.jpg','f31.jpg','f32.jpg','f33.jpg','f34.jpg','f35.jpg','f36.jpg','f37.jpg','f38.jpg','f39.jpg','f40.jpg','f41.jpg','f42.jpg','f43.jpg','f44.jpg','f45.jpg','f46.jpg','f47.jpg','f48.jpg','f49.jpg','f50.jpg','f51.jpg','f52.jpg','f53.jpg','f54.jpg',];

let menu_spin = ['ชานมโกโก้']
let menu_spin_img = ['f2.jpg']



function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
 
    return result;
}
 
btnRandom_cool.addEventListener('click', () => {
	let index = getRandomNumber(0, menu_cool.length-1);
	result.innerText = menu_cool[index];
	document.getElementById('img-menu').src=menu_cool_img[index];

});

btnRandom_spin.addEventListener('click', () => {
	let index = getRandomNumber(0, menu_spin.length-1);
	result.innerText = menu_spin[index];
	document.getElementById('img-menu').src=menu_spin_img[index];

});
