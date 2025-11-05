# ☂️ Custom Umbrella Preview Tool

A fully responsive, interactive umbrella customizer built with **HTML, CSS, and JavaScript**.  
Users can upload their company logo, change umbrella colors, and instantly preview their customized umbrella in real-time.

---

## 🌟 Features

- 🎨 **Dynamic Color Switching** — Choose between **Blue**, **Pink**, and **Yellow** umbrellas.
- 🖼️ **Logo Upload & Preview** — Instantly preview uploaded logos directly on the umbrella.
- ⏳ **Smart Loader Animation** — Displays a color-matched spinning loader while the logo uploads.
- 📱 **Fully Responsive Design** — Optimized for all screen sizes (mobile, tablet, desktop, ultra-wide).
- 💾 **Local Storage Support** — Automatically remembers the selected color and uploaded logo (bonus feature).
- 🔍 **Logo Controls** — Resize the logo dynamically with a slider.
- 📸 **Download Preview** — Export the customized umbrella as an image (bonus feature).

---

## 🚀 Live Demo

🔗 **View Project:** [https://vibhav005.github.io/star-apps-assignment/](https://vibhav005.github.io/star-apps-assignment/)

---

## 🧩 Tech Stack

- **HTML5** — Structure and accessibility.
- **CSS3** — Responsive design with transitions and animations.
- **Vanilla JavaScript (ES6)** — File handling, interactivity, and dynamic updates.

---

## 📂 Project

```
star-apps-assignment/
├── assets/
│ ├── Blue umbrella.png
│ ├── Pink umbrella.png
│ ├── Yello umbrella.png
│ ├── loader_icon.svg
│ ├── upload_icon.svg
│ └── default_logo.png
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧠 Key Implementation Details

### Logo Upload Flow

1. User uploads a `.png` or `.jpg` file (max 5 MB).
2. The umbrella fades out, and a color-matched loader spins for 5 seconds.
3. After upload completes, the umbrella fades back in with the logo applied.

### Color Synchronization

Each color theme updates:

- Umbrella image
- Background
- Upload button
- Loader tint

### Responsive Design

- Uses **flexbox** and **media queries** for consistent layout.
- Scales perfectly across all modern devices and screen sizes.

## ⚙️ Deployment

This project is deployed using **GitHub Pages**.  
To redeploy manually:

```bash
git add .
git commit -m "update project"
git push origin main
```
