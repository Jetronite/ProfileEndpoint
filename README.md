

```markdown
# 🐱 Express Cat Fact API

A simple RESTful API built with **Node.js** and **Express** that returns your profile information along with a **random cat fact** fetched from an external API ([catfact.ninja](https://catfact.ninja/fact)).

---

## 🚀 Features

- Built with modern **ES Modules** (`import` syntax)
- Returns JSON data from a third-party API
- Implements structured **error handling** for failed API calls
- Includes **timestamps** in ISO format
- Ready for deployment on **PXXL**, **Render**, or **Vercel**

---

## 📦 Project Structure

```

.
├── index.js          # Main server file
├── package.json      # Project metadata and dependencies
├── .gitignore        # Files and folders to ignore in Git
└── README.md         # This file

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create an environment file (optional)

If needed later (for API keys, ports, etc.):

Create a `.env` file in your root directory and add:

```env
PORT=3000
```

> ⚠️ `.env` is already in `.gitignore`, so it will **not** be pushed to GitHub.

### 4️⃣ Run the server locally

```bash
npm start
```

You should see:

```
Listening on port 3000
```

Then open your browser or use `curl` to visit:

```
http://localhost:3000/me
```

---

## 🔄 Example Response

```json
{
  "user": {
    "email": "awajethro@gmail.com",
    "name": "Jethro Awa",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T18:23:45.123Z",
  "fact": "Cats have five toes on their front paws, but only four on the back."
}
```

---

## 🧩 Dependencies

| Package                                          | Purpose                            |
| ------------------------------------------------ | ---------------------------------- |
| [express](https://www.npmjs.com/package/express) | Web server framework               |
| [axios](https://www.npmjs.com/package/axios)     | HTTP client for external API calls |

Install them with:

```bash
npm install express axios
```

---

## 🌐 Deployment (e.g. PXXL)

1. Push your project to GitHub.
2. Log in to [PXXL.app](https://pxxl.app) and connect your GitHub repo.
3. Set **Build Command** → `npm install`
4. Set **Start Command** → `npm start`
5. Add Environment Variable:

   ```
   PORT = 3000
   ```
6. Deploy and open your live API at:

   ```
   https://yourapp.pxxl.app/me
   ```

---

## 🧠 Notes

* Handles **network timeouts** and **external API failures** gracefully.
* Logs errors to the console for debugging.
* Built with ES Modules — ensure `"type": "module"` is in your `package.json`.

---

## 🧑‍💻 Author

**Jethro Awa**
📧 [awajethro@gmail.com](mailto:awajethro@gmail.com)

---
