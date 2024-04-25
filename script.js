function volume_sphere() {
    //Write your code here
	let rad = document.querySelector("#radius");
	let volume = document.querySelector("#volume");

	let radius = rad.value;
	// if(radius < 0 || radius < 65 || radius > 122){
	// 	volume = "NaN"
	// }
	let vol = ((4)/(3)) *  3.14159 * radius*radius*radius;
	volume.value = vol;	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
