function volume_sphere(event) {
  // Prevent page reload on form submission
  if (event) {
    event.preventDefault();
  }

  // Retrieve input value
  const radiusInput = document.getElementById('radius').value;
  const radius = parseFloat(radiusInput);
  const volumeField = document.getElementById('volume');

  // Validate input: return 'NaN' if invalid or negative
  if (isNaN(radius) || radius < 0) {
    volumeField.value = 'NaN';
    return false;
  }

  // Calculate volume: V = (4/3) * pi * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display rounded result to 4 decimal places
  volumeField.value = volume.toFixed(4);

  return false;
}

window.onload = function() {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};