document.addEventListener('DOMContentLoaded', function() {
    // Ensure the element exists before adding an event listener
    const imageUpload = document.getElementById('imageUpload');
    if (imageUpload) {
        imageUpload.addEventListener('change', function(event) {
            const files = event.target.files;
            const imageDisplay = document.getElementById('imageDisplay');
            imageDisplay.innerHTML = ''; // Clear previous images

            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    imageDisplay.appendChild(img);
                };
                reader.readAsDataURL(file);
            });
        });
    }
});
