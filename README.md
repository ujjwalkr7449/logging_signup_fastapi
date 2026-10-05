# logging_signup_fastapi
# FastAPI Login & Signup System

A full-stack authentication project built using **FastAPI, HTML, CSS, JavaScript, SQLAlchemy, and SQLite**.

## Features

- User registration (Signup)
- User login with email and password
- Secure password hashing using bcrypt
- Email validation using Pydantic
- SQLite database integration
- Duplicate email registration prevention
- REST API endpoints
- Interactive API documentation using Swagger UI
- Responsive HTML and CSS login/signup pages

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Python, FastAPI |
| Database | SQLite |
| ORM | SQLAlchemy |
| Validation | Pydantic |
| Password Security | Passlib, bcrypt |
| API Testing | Swagger UI |

## Project Structure

```text
fastapi-login-signup/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── auth.py
│   └── routers/
│       ├── __init__.py
│       └── auth.py
│
├── frontend/
│   ├── login.html
│   ├── signup.html
│   ├── dashboard.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── login.js
│       └── signup.js
│
├── requirements.txt
├── .gitignore
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/fastapi-login-signup.git
cd fastapi-login-signup
```

Replace `YOUR_USERNAME` with your GitHub username after creating and uploading the repository.

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate the environment.

**Windows:**

```bash
venv\Scripts\activate
```

**Linux/macOS:**

```bash
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

Example `requirements.txt`:

```text
fastapi
uvicorn
sqlalchemy
pydantic
email-validator
passlib[bcrypt]
bcrypt==4.0.1
```

### 4. Start the backend

```bash
cd backend
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger API documentation:

```text
http://127.0.0.1:8000/docs
```

### 5. Start the frontend

Open another terminal from the project root:

```bash
cd frontend
python -m http.server 5500
```

Visit:

```text
http://127.0.0.1:5500/signup.html
```

**Important:** Because the frontend and backend use different ports, configure FastAPI `CORSMiddleware` to allow `http://127.0.0.1:5500` during local development.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API health/welcome response |
| POST | `/auth/signup` | Register a user |
| POST | `/auth/login` | Verify login credentials |

### Signup Request

```json
{
  "name": "Ujjwal Kumar",
  "email": "ujjwal@example.com",
  "password": "StrongPassword123!"
}
```

### Signup Response

```json
{
  "message": "User registered successfully"
}
```

### Login Request

```json
{
  "email": "ujjwal@example.com",
  "password": "StrongPassword123!"
}
```

### Login Response

```json
{
  "message": "Login successful",
  "user": {
    "name": "Ujjwal Kumar",
    "email": "ujjwal@example.com"
  }
}
```

## How It Works

**Signup flow:**

1. User enters their name, email, and password.
2. JavaScript sends a POST request to the FastAPI backend.
3. Pydantic validates the request.
4. FastAPI checks whether the email already exists.
5. The password is securely hashed.
6. SQLAlchemy saves the user to SQLite.

**Login flow:**

1. User enters their email and password.
2. JavaScript sends the credentials to FastAPI.
3. FastAPI retrieves the matching user.
4. The entered password is verified against the stored hash.
5. The API returns a success or error response.

**Note:** This initial version verifies credentials but does not yet create an authenticated session. JWT tokens, protected dashboard routes, and logout functionality are planned improvements.

## Security Considerations

- Never store plaintext passwords.
- Keep database files and secrets out of Git.
- Use HTTPS when deploying.
- Add rate limiting and secure session management before production deployment.
- Protect dashboard data using server-side authentication.

## Future Improvements

- JWT authentication
- Protected user dashboard
- Logout functionality
- Forgot-password and reset-password functionality
- Email verification
- PostgreSQL support
- Automated API tests
- Deployment

## .gitignore

```gitignore
venv/
.venv/
__pycache__/
*.pyc
.env
*.db
.pytest_cache/
.vscode/
.idea/
```

## Learning Outcomes

This project demonstrates fundamental backend development concepts, including REST APIs, routing, request validation, password hashing, ORM-based database operations, and frontend-to-backend communication.

## Author

**Ujjwal Kumar**

GitHub: https://github.com/ujjwalkr7449

## License

MIT License. Add a `LICENSE` file to the repository if you choose to distribute the project under MIT.
