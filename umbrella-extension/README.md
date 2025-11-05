## 🧩 Chrome Extension Setup

The Chrome Extension version of this project is included inside the `chrome-extension/` folder.  
It allows users to use the **Custom Umbrella Tool** directly from the browser popup — built entirely with **HTML, CSS, and JavaScript (no frameworks)**.

---

### 🔧 Installation Steps

1. Open Google Chrome and navigate to  
   👉 `chrome://extensions/`

2. Enable **Developer mode** (toggle switch at the top-right).

3. Click **“Load unpacked”**.

4. Select the folder:

5. The extension will appear in your Chrome toolbar.

- Click the ☂️ **umbrella icon** to open the popup.
- You can switch umbrella colors, upload logos, and preview instantly.

---

### 🧠 Features Inside Extension

- 🧩 **Persistent State** — remembers your last color and uploaded logo using `chrome.storage`.
- 🎨 **Smooth Loader Animation** — dynamically matches the selected umbrella color.
- ⚙️ **Offline Support** — works without internet or any dependencies.

---

### 🧹 Optional Cleanup

If you want to remove the extension later:

1. Go to `chrome://extensions/`
2. Find **“Custom Umbrella Preview Tool”**
3. Click **Remove**

---
