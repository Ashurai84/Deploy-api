# Deploy API 🚀

A simple REST API built with **Express.js** that demonstrates the usage of my custom npm package [`@ashuhrai_71/city-count`](https://www.npmjs.com/package/@ashuhrai_71/city-count).

> 💡 **This project uses my published npm package!** Install it with: `npm install @ashuhrai_71/city-count`

## 📦 About

This project showcases how to integrate and use my custom npm package (`@ashuhrai_71/city-count`) to count users by city in a REST API. The `city-count` package was created by me to provide a simple, lightweight utility for counting occurrences of users from specific cities.

## ✨ Features

- RESTful API with Express.js
- CORS enabled for cross-origin requests
- Integration with my published npm package `@ashuhrai_71/city-count`
- Sample user data with city information
- City-based user counting functionality (case-insensitive)

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js v5** | Web framework |
| **CORS** | Cross-origin resource sharing |
| **[@ashuhrai_71/city-count](https://www.npmjs.com/package/@ashuhrai_71/city-count)** | My custom package for counting users by city |

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ashurai84/Deploy-api.git
cd Deploy-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install my `city-count` package

```bash
npm install @ashuhrai_71/city-count
```

### 4. Start the server

```bash
npm start
```

The server will start on `http://localhost:8000` 🎉

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/users` | Get all users with their cities |

## 📊 Sample Data

The API contains the following sample users:

| Name | City |
|------|------|
| Saurabh | Mumbai |
| Tejas | Pune |
| Ashutosh | Delhi |
| Priya | Mumbai |
| Rahul | Pune |
| Neha | Delhi |

### Sample Response

**GET** `/api/v1/users`

```json
[
  {"name": "Saurabh", "city": "Mumbai"},
  {"name": "Tejas", "city": "Pune"},
  {"name": "ashutosh", "city": "Delhi"},
  {"name": "Priya", "city": "Mumbai"},
  {"name": "Rahul", "city": "Pune"},
  {"name": "Neha", "city": "Delhi"}
]
```

---

## 📦 @ashuhrai_71/city-count Package

[![npm version](https://img.shields.io/npm/v/@ashuhrai_71/city-count)](https://www.npmjs.com/package/@ashuhrai_71/city-count)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A lightweight Node.js package to count people by city from an array of data.

### 📥 Installation

```bash
npm install @ashuhrai_71/city-count
```

### 🚀 Usage

```javascript
// CommonJS
const checkCityCount = require('@ashuhrai_71/city-count');

// ES Modules
import checkCityCount from '@ashuhrai_71/city-count';

const data = [
  { name: 'Saurabh', city: 'Mumbai' },
  { name: 'Tejas', city: 'Pune' },
  { name: 'Ashutosh', city: 'Delhi' },
  { name: 'Priya', city: 'Mumbai' },
  { name: 'Rahul', city: 'Pune' },
  { name: 'Neha', city: 'Delhi' }
];

const count = checkCityCount(data, 'Mumbai');
console.log(count); // Output: 2
```

### 📖 API

#### `checkCityCount(data, city)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | Array | Array of objects with a `city` property |
| `city` | string | City name to count (case-insensitive) |

**Returns:** `number` - Count of matching entries

### 🔗 Package Links

- **npm:** [npmjs.com/package/@ashuhrai_71/city-count](https://www.npmjs.com/package/@ashuhrai_71/city-count)
- **GitHub:** [github.com/Ashurai84/check-City](https://github.com/Ashurai84/check-City)

---

## 📁 Project Structure

```
deploy-api/
├── server.js        # Main Express server
├── package.json     # Dependencies and scripts
├── .gitignore       # Git ignore rules
└── README.md        # Documentation
```

## 🏃 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the server |
| `npm test` | Run tests |

## 👤 Author

**Ashutosh Rai (Ashurai84)**

- GitHub: [@Ashurai84](https://github.com/Ashurai84)
- npm: [@ashuhrai_71](https://www.npmjs.com/~ashuhrai_71)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 📄 License

This project is licensed under the ISC License.

---

Made with ❤️ in India 🇮🇳