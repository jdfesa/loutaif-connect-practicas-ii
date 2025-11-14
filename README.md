# Loutaif Connect – Pre-Enrollment System

This project is a **web application for student pre-enrollment**, allowing users to complete a form and automatically store the data in a **Supabase** database.  
It was developed as part of a practical assignment using modern web development tools and best practices.

---

## 🚀 Features

- Student pre-enrollment form  
- Automatic validation of user inputs  
- Fetching available careers from Supabase  
- Saving form submissions into a Supabase table  
- Toast notifications for success/error  
- Clean UI built with **shadcn/ui**  
- Fully responsive interface  
- Ready for deployment on Vercel or similar platforms  

---

## 🛠️ Tech Stack

This project is built with:

- **Vite** – Fast build tool & development server  
- **React** – UI library  
- **TypeScript** – Strong typing & safety  
- **shadcn/ui** – Component library  
- **Tailwind CSS** – Utility-first styling  
- **Supabase** – Backend (Database + Auth)  
- **PostgreSQL** – Underlying database used by Supabase  

---

## 🔧 Environment Variables

Create a `.env` file in the project root with:

VITE_SUPABASE_URL="https://<your-project-id>.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="<your-anon-public-key>"


⚠️ These keys are **safe** to expose in frontend projects.  
Just **do NOT include** your service role key.

---

## 📦 Installation & Running the Project

Make sure you have Node.js & npm installed  
(Recommended: install via **nvm** → https://github.com/nvm-sh/nvm)

### Steps

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading.
npm run dev
```
---
🗂️ Editing or Contributing
Editing directly on GitHub

Open any file in the repo

Click Edit (pencil icon)

Commit your changes

Using GitHub Codespaces

Go to your repository

Click Code → Codespaces → New Codespace

Edit and commit inside the cloud environment

---

## 🗄️ Database Structure (Supabase)

Two main tables are used in this project:

---

### **`carreras`**

Stores the available academic programs.

| Column      | Type      | Notes                        |
|-------------|-----------|------------------------------|
| `id`        | UUID      | Primary key                  |
| `nombre`    | TEXT      | Required                     |
| `codigo`    | TEXT      | Optional                     |
| `activa`    | BOOLEAN   | Only active careers shown    |
| `created_at`| Timestamp | Auto-generated               |

---

### **`preinscripciones`**

Stores all submitted pre-enrollment forms.

| Column       | Type      | Notes                            |
|--------------|-----------|----------------------------------|
| `id`         | UUID      | Primary key                      |
| `nombre`     | TEXT      | Required                         |
| `apellido`   | TEXT      | Required                         |
| `dni`        | TEXT      | Digits only                      |
| `email`      | TEXT      | Must be a valid email            |
| `telefono`   | TEXT      | Required                         |
| `carrera_id` | UUID      | References `carreras.id`         |
| `created_at` | Timestamp | Auto-generated                   |


---
✔️ Status

The project is fully functional and connected to Supabase.
Pre-enrollment submissions are correctly inserted into the database.

📄 License

This project is part of an academic assignment and may be reused with proper attribution.
