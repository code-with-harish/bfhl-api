# bfhl-api

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow.svg)](https://www.javascript.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://bfhl-xxxxx.vercel.app/bfhl)

## Description

**bfhl-api** is a simple RESTful API built using **Node.js** and **Express**.  
It processes the provided data, classifies **alphabets**, **numbers**, and **special characters**, separates **even** and **odd** numbers, calculates their **sum**, and returns a structured JSON response.  

The API is hosted on **Vercel** and is publicly accessible.

---

## Key Features and Highlights

- 🚀 **Fast & Lightweight** Node.js backend
- ⚡ **Express framework** for efficient routing
- 🔢 Separates **even** & **odd** numbers
- 🔡 Extracts **alphabets** and concatenates them
- 💰 Calculates the **sum** of numeric values
- 🌐 Fully deployed on **Vercel**

---

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install express
```









## Usage

To use the bfhl-api project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bfhl-api.git
   ```

2. Navigate to the project directory:
   ```bash
   cd bfhl-api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node api/bfhl.js
   ```
5. Test API using Postman or cURL:
   ```nginx
   POST https://bfhl-xxxxx.vercel.app/bfhl
   ```

## API Documentation

Endpoint
```bash
POST /bfhl
```
Request Body
```json
{
  "data": ["A", "R", "1", "334", "4", "$"]
}
```
Response
```json
{
    "is_success": true,
    "user_id": "john_doe_17091999",
    "email": "john@xyz.com",
    "roll_number": "ABCD123",
    "odd_numbers": ["1"],
    "even_numbers": ["334", "4"],
    "alphabets": ["A", "R"],
    "special_characters": ["$"],
    "sum": "339",
    "concat_string": "Ra"
}

```


## Dependencies

- express: ^4.18.2

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make changes or add new features
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
