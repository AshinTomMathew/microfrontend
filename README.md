# 🌐 Microfrontend Shell Workspace (Beginner-Friendly Guide)

Welcome to the project! This workspace is built using a modern **Microfrontend (MFE) Architecture** with an **iframe-based sandboxing approach**. 

If you are a beginner to Microfrontends, this README is designed to explain **exactly what this concept is**, **how we built it**, and **how to explain it to your Team Lead**.

---

## 💡 What is a Microfrontend (MFE)?

In traditional web development, we build a **Monolith**—one giant application where all code, styles, and pages are mixed together. If one developer makes a mistake in the Header, the entire website can crash.

**Microfrontends** solve this by breaking a website down into smaller, self-contained apps:
1. **The Sub-Apps (`f1`, `f2`, `f3`)**: Each folder is a completely independent website running on its own local server port. They do not share styles or JavaScript memory.
2. **The Host/Shell (`shell-app`)**: A main container app that loads the sub-apps together on a single web page.

---

## 🛠️ What We Did With Your 3 Feature Folders

You provided three standalone folders:
* `f1` (Categories Slider)
* `f2` (Top Categories Carousel)
* `f3` (Popular Categories Auto-carousel)

Here is the exact step-by-step implementation we completed:

### Step 1: Upgraded the Folders into Standalone Apps
* `f2` and `f3` were originally just raw component files inside folder structures.
* We created a standard React development workspace for `f2` and `f3` by adding a custom `package.json`, `vite.config.js`, a main browser entry point (`src/main.jsx`), and `index.html`.
* We configured individual, isolated dev server ports:
  * **Feature 1 (`f1`)** runs on **`http://localhost:3001`**
  * **Feature 2 (`f2`)** runs on **`http://localhost:3002`**
  * **Feature 3 (`f3`)** runs on **`http://localhost:3003`**

### Step 2: Cleaned Up the Features (No Header/Nav Duplication)
Because `f1` was a fully-fledged template, it contained its own Topbars, Headers, and Navbars, which duplicated the Shell's layout. We trimmed down `f1/src/App.jsx` and its homepage to strip away those outer wrappers, leaving **only** the `CategoryStrip` slider visible.

### Step 3: Built the Main Host Container (`shell-app`)
We created a new parent React application (`shell-app`) running on port `3000`. This app renders a unified UI and uses `<iframe>` panels to fetch and display the three independent features side-by-side.

### Step 4: Established Secure Cross-Frame Communication
Because standard browser security prevents isolated `iframes` from accessing each other's memory directly, we wired up a **Message Bus** utilizing HTML5's `window.postMessage` API. 
* The parent frame (`shell-app`) safely broadcasts event messages to each sub-iframe.
* The child components can send notifications back to the parent.
* We implemented strict origin security checks inside `shell-app/src/App.js` to only process verified traffic from ports `3000` to `3003`, blocking any external malicious attempts.

### Step 5: Created a Root Workspace Orchestrator
We added a `package.json` at the very root of the workspace. It uses a tool called `concurrently` so that typing **one command** automatically starts all four servers simultaneously!

---

## 📁 File Structure & What They Are For

```text
/micro-frontend-workspace/
  ├── package.json              # Root Orchestrator: starts shell and sub-apps together
  │
  ├── shell-app/                # THE HOST (Port 3000) - Renders the dashboard and iframes
  │   ├── src/App.js            # App Container: manages postMessage listener and renders iframe views
  │   └── src/App.css           # Styling: Responsive columns and clean layout rules
  │
  ├── f1/                       # FEATURE 1 (Port 3001) - Vite React App (Untouched categories slider)
  ├── f2/                       # FEATURE 2 (Port 3002) - Vite React App (Untouched flip-card carousel)
  └── f3/                       # FEATURE 3 (Port 3003) - Vite React App (Untouched 3D auto-carousel)
```

---

## 🚀 How to Run the Project

### 1. Installation
Install the workspace orchestrator and dev dependencies at the root directory:
```bash
npm install
```

### 2. Startup
Run the unified command to boot all four local development servers concurrently:
```bash
npm run start-all
```

Once loaded, access the dashboard in your browser at:
👉 **[http://localhost:3000](http://localhost:3000)**
