**`vanilla-web/frontend-techstock/README.md`**

```markdown
# TechStock UI - Frontend Client 💻

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

This directory contains the interactive user interface for the TechStock inventory system. Built entirely with Vanilla JavaScript, it demonstrates dynamic DOM manipulation and asynchronous data fetching without relying on heavy frontend frameworks.

## 🗂️ Architecture & Scope

The frontend is designed to be lightweight and directly consume the REST API:

* **`index.html`**: Semantic structure and responsive grid layouts using Bootstrap 5.
* **`style.css`**: Custom UI refinements and visual overrides.
* **`app.js`**: Client-side logic utilizing the native `Fetch API` to communicate with the Node.js backend and render data dynamically.

## 💻 Tech Stack Highlights

* **Markup & Styling:** HTML5, CSS3, Bootstrap 5 (via CDN).
* **Logic:** Vanilla JavaScript (ES6+), Async/Await, Fetch API.

## 🚀 Getting Started & Execution Rules

This client requires the **Backend-techstock** server to be actively running on `localhost:4000` to fetch inventory data.

1. **Ensure the backend is running** in a separate terminal.
2. **Launch the interface:**
   * Open `index.html` directly in your browser.
   * *Professional execution:* Right-click `index.html` in VS Code and select **Open with Live Server** to enable hot-reloading during development.