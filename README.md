# Deploy API 🚀

A simple REST API built with Express.js that demonstrates the usage of the [`@ashuhrai_71/city-count`](https://github.com/Ashurai84/check-City) npm package.

## 📦 About

This project showcases how to use a custom npm package (`@ashuhrai_71/city-count`) to count users by city in a REST API.

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **@ashuhrai_71/city-count** - Custom package for counting users by city

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

### 3. Using the `city-count` package locally (Development)

If you want to use the `city-count` package locally during development:

```bash
# First, go to your city-count package directory and link it globally
cd /path/to/city-count
npm link

# Then, come back to this project and link the package
cd /path/to/Deploy-api
npm link @ashuhrai_71/city-count
```

### 4. Start the server

```bash
npm start
```

The server will start on `http://localhost:8000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/users` | Get all users |

## 📊 Sample Response

### GET `/api/v1/users`

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

## 🔗 Using `@ashuhrai_71/city-count` Package

This API uses the `@ashuhrai_71/city-count` package to count users by city.

### Installation

```bash
npm install @ashuhrai_71/city-count
```

### Or link locally for development

```bash
npm link @ashuhrai_71/city-count
```

### Usage Example

```javascript
import { checkCityCount } from "@ashuhrai_71/city-count"

const users = [
  {name: "Saurabh", city: "Mumbai"},
  {name: "Tejas", city: "Pune"},
  {name: "Priya", city: "Mumbai"}
]

const count = checkCityCount(users, "Mumbai")
console.log(count) // Output: 2
```

## 👤 Author

**Ashurai84**

- GitHub: [@Ashurai84](https://github.com/Ashurai84)

## 📄 License

This project is licensed under the ISC License.