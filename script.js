function volume_sphere() {
    //Write your code here
	let rad = document.querySelector("#radius");
	let volume = document.querySelector("#volume");

	let radius = rad.value;
	if (radius < 0) {
        volume.value = 'NaN';
        return;
    }
	let vol = ((4)/(3)) *  Math.PI * Math.pow(radius, 3);
	volume.value = vol.toFixed(4);	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
