# ToDO App with API

## 1. Setup Todo API

In this task you will setup the Todo API on your local computer.

- [x] Clone the this repository to your local machine: https://github.com/coding-bootcamps-eu/todo-api
- [x] Use NPM to install the dependencies of the Todo API
- [x] Use the `npm run start` command to start the backend
- [x] Follow the instructions on in the terminal and try to access the Todo API in the browser

---

## 2. Use Todo API with Postman

- [x] Install Postman on your computer: https://postman.com/downloads
  - [x] Do not create an account because this is not required
- [x] Perform a `GET` request on the resource `/todos`
- [x] Perform a `POST` request on the resource `/todos` and create a new todo
- [x] Perform a `PUT` request on the resource `/todos` and update an existing todo to done
  - [x] Verify that success of this operation by performing a `GET` request to the updated todo (`/todos/:id`)
- [x] Perform a `DELETE` request and delete a todo that is done

---

# Todo App with Todo API

- [x] Create a folder (and repository) for a Todo App that will use the Todo API
- [x] Start from scratch and DO NOT copy any code
- [x] Use the Todo API with your new Todo App
  - [x] Load all todos from the Todo API
  - [x] Create todos in the Todo API
  - [x] Update todos in the Todo API whenever the done state is changed
  - [x] Add a `Delete Done Todos` button that will delete all done todos from the Todo API
- [ ] Keep your local state, backend state and the UI in sync

## Hints

The Fetch API uses promises which is async.
