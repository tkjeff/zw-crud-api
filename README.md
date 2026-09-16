\# ZW CRUD API



A RESTful CRUD API built with \*\*Node.js, Express, Prisma, PostgreSQL, and Zod\*\*.



This project demonstrates backend API development with database persistence, request validation, and a structured Node.js application architecture.



\## 🚀 Tech Stack



\* Node.js

\* Express.js

\* PostgreSQL

\* Prisma ORM

\* Zod

\* JavaScript

\* REST API



\## 📌 Features



\* Create products

\* Get all products

\* Get a single product

\* Update products

\* Delete products

\* PostgreSQL database persistence

\* Prisma database access

\* Zod request validation

\* RESTful API architecture

\* Environment variable configuration



\## 📂 Project Structure



```text

zw-crud-api/

├── prisma/

├── src/

├── .gitignore

├── package.json

├── package-lock.json

└── prisma7.config.ts

```



\## ⚙️ Installation



Clone the repository:



```bash

git clone https://github.com/tkjeff/zw-crud-api.git

cd zw-crud-api

```



Install dependencies:



```bash

npm install

```



Create your environment configuration and add your PostgreSQL database connection.



Run the Prisma setup/migrations required by the project.



\## ▶️ Running the API



Start the development server:



```bash

npm run dev

```



The API will run on the configured local port.



\## 🔌 API



The API provides CRUD operations for products.



Typical operations include:



```text

POST   /products

GET    /products

GET    /products/:id

PUT    /products/:id

DELETE /products/:id

```



Requests are validated using Zod before being processed.



\## 🗄️ Database



The project uses \*\*PostgreSQL\*\* as its relational database and \*\*Prisma ORM\*\* for database access.



The Prisma schema is located in:



```text

prisma/

```



\## 🎯 Learning Goals



This project was built as part of my backend/full-stack engineering roadmap to practice:



\* REST API design

\* CRUD operations

\* PostgreSQL

\* ORM usage

\* Input validation

\* Backend project structure

\* Git and GitHub

\* Building and deploying portfolio projects



\## 👨‍💻 Author



\*\*tkjeff\*\*



GitHub: https://github.com/tkjeff



