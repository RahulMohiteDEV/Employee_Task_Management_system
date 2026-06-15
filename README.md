# Employee Task Management System

A lightweight **Employee Task Management System** built with **React and Vite** that helps small teams manage and track tasks efficiently without the complexity of databases, servers, or external services.

This project focuses on **simplicity, speed, and usability** by allowing administrators to assign tasks and employees to track their progress in an organized interface.

The system uses **local storage for data persistence**, making it ideal for **small teams, demo environments, or offline usage**.

---

# Features

###  Admin Dashboard

* Create and assign tasks to employees
* View all assigned tasks
* Monitor task progress
* Track completed, accepted, and failed tasks

###  Employee Dashboard

* View assigned tasks
* Accept new tasks
* Mark tasks as completed
* Update task status

###  Task Management

* New Tasks
* Accepted Tasks
* Completed Tasks
* Failed Tasks

###  System Advantages

* No database required
* No backend server needed
* Works offline
* Instant setup
* Lightweight and fast

---

#  Tech Stack

### Frontend

* **React.js**
* **Vite**
* **JavaScript (ES6+)**
* **CSS**

### State Management

* **React Context API**

### Data Storage

* **LocalStorage**

---

# 📂 Project Structure

```
Employee_Task_Management_System
│
├── public
│   └── vite.svg
│
├── src
│   │
│   ├── assets
│   │   └── react.svg
│   │
│   ├── components
│   │
│   │   ├── Auth
│   │   │   └── Login.jsx
│   │   │
│   │   ├── Dashboard
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   │
│   │   ├── TaskList
│   │   │   ├── AcceptTask.jsx
│   │   │   ├── CompleteTask.jsx
│   │   │   ├── FailedTask.jsx
│   │   │   ├── NewTask.jsx
│   │   │   ├── TList.jsx
│   │   │   └── TaskCard.jsx
│   │   │
│   │   └── others
│   │       ├── AllTask.jsx
│   │       ├── CreateTask.jsx
│   │       ├── Header.jsx
│   │       └── TaskList.jsx
│   │
│   ├── context
│   │   └── AuthProvider.jsx
│   │
│   ├── utils
│   │   └── localStorage.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

# ⚙️ Installation & Setup

###  Clone the Repository

```bash
git clone https://github.com/yourusername/employee-task-management-system.git
cd employee-task-management-system
```

---

###  Install Dependencies

```bash
npm install
```

---

###  Run the Application

```bash
npm run dev
```

The application will start at:

```
http://localhost:5173
```

---

#  How It Works

1. The **Admin logs in** and assigns tasks to employees.
2. Tasks are stored in **LocalStorage** instead of a database.
3. Employees can:

   * View assigned tasks
   * Accept tasks
   * Complete tasks
   * Mark tasks as failed
4. The system updates task progress dynamically using **React Context API**.

---

#  Screenshots

You can add screenshots here to demonstrate the UI.

Example:

```
/screenshots/admin-dashboard.png
/screenshots/employee-dashboard.png
/screenshots/task-list.png
```

---

#  Learning Objectives

This project was developed to strengthen understanding of:

* React Component Architecture
* State Management using Context API
* LocalStorage Data Handling
* Role-based UI (Admin vs Employee)
* Modular Folder Structure
* Frontend Task Management Systems

---

#  Author

**Rahul Mohite**

GitHub
https://github.com/RahulMohiteDEV

---

#  Support

If you found this project useful, consider giving it a ⭐ on GitHub.
