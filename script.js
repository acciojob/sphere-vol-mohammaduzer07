function volume_sphere() {
    //Write your code here
	let rad = document.getElementById('radius');
	let volume = document.getElementById('volume');

	let radius = rad.value;
	let vol = ((4/3) * 3.14 * radius*radius*radius);
	volume.value = vol;	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
