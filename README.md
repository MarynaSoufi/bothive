# bothive library

## INSTALATION

---

- npm install

## DATABASE connection

---

1. Create new database with mongo db
2. Create .env file in root of project(look at .env.example)
3. Add PORT, DATABASE NAME, DATABASE USER, DATABASE PASSWORD in your .env

## Postman

import Bothive.postman_collection.json file in Postman

## RUN

---

- npm run dev

## CREATE NEW USER

```
method: POST
route: http://localhost:3002/api/users

what to write in the body:

{
    "firstname": "Maryna",
    "email": "m@gmail.com",
    "address": "Heusden 9070"
}

```

## CREATE NEW BOOK

```
method: POST
route: http://localhost:3002/api/books

what to write in the body:

{
    "titel": "Harry Potter and the Chamber of Secrets",
    "author": "J. K. Rowling",
    "publishYear": "1998"
}

```

## GET ALL BOOKS

method: GET
route: http://localhost:3002/api/books

## GET ALL USERS

method: GET
route: http://localhost:3002/api/users

## RENT A BOOK BY ID

method: PUT
route: http://localhost:3002/api/books/rent/'bookId'/'userId'

## RETURN A BOOK BY ID

method: PUT
route: http://localhost:3002/api/books/return/'bookId'/'userId'

## BOOKS RENT HISTORY OF SPECIFIC USER

method: GET
route: http://localhost:3002/api/users/'userId'/rent

## GET ALL RENTED BOOKS

method: GET
route: http://localhost:3002/api/books/rent

## USERS RENT HISTORY OF SPECIFIC BOOK

method: GET
route: http://localhost:3002/api/books/'bookId'/rent
