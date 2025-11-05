/*
 * Custom Umbrella Preview Tool
 * -------------------------------------
 * Lets users choose umbrella color and upload a company logo.
 * Displays a real-time preview with theme synchronization.
 * -------------------------------------
 */

const logoUpload = document.getElementById("logoUpload");
const logoPreview = document.getElementById("logoPreview");
const umbrellaImage = document.getElementById("umbrellaImage");
const loader = document.getElementById("loader");
const fileInfo = document.getElementById("fileInfo");
const uploadText = document.getElementById("uploadText");

// Theme configuration for each umbrella color
const umbrellaColors = {
  blue: {
    img: "assets/Blue umbrella.png",
    theme: "#e6f7ff",
    button: "#1bb3e8",
    loader: "#1bb3e8",
  },
  pink: {
    img: "assets/Pink umbrella.png",
    theme: "#ffe6f0",
    button: "#e91e63",
    loader: "#e91e63",
  },
  yellow: {
    img: "assets/Yello umbrella.png",
    theme: "#fff8e1",
    button: "#fdd835",
    loader: "#fdd835",
  },
};

// Default theme color
let currentColor = "blue";

/**
 * Initialize page state
 */
window.addEventListener("DOMContentLoaded", () => {
  logoPreview.src = "";
  logoPreview.style.display = "none";
  logoPreview.style.opacity = 0;
  loader.style.display = "none";
  updateLoaderColor(umbrellaColors[currentColor].loader);
});

/**
 * Update loader and button color when user switches umbrella color
 */
document.querySelectorAll(".swatch").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    currentColor = swatch.dataset.color;
    const umbrella = umbrellaColors[currentColor];

    // Update UI theme
    umbrellaImage.src = umbrella.img;
    document.body.style.background = umbrella.theme;
    document.querySelector(".upload-btn").style.background = umbrella.button;

    updateLoaderColor(umbrella.loader);
  });
});

/**
 * Handle file uploads for logo preview
 */
logoUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert("File too large! Maximum size is 5MB.");
    return;
  }

  // Show loader and hide umbrella/logo
  loader.style.display = "block";
  umbrellaImage.style.opacity = 0;
  logoPreview.style.opacity = 0;
  logoPreview.style.display = "none";

  const reader = new FileReader();

  reader.onload = (event) => {
    logoPreview.src = event.target.result;

    setTimeout(() => {
      loader.style.display = "none";
      umbrellaImage.style.opacity = 1;
      logoPreview.style.display = "block";
      setTimeout(() => (logoPreview.style.opacity = 1), 200);
    }, 1000);

    fileInfo.innerHTML = `<strong>${file.name}</strong>`;
    uploadText.textContent = file.name.toUpperCase();
  };

  reader.readAsDataURL(file);
});

/**
 * Helper function: update loader color to match theme
 */
function updateLoaderColor(color) {
  loader.style.filter = `drop-shadow(0 0 3px ${color})`;
  document.documentElement.style.setProperty("--loader-color", color);
}
