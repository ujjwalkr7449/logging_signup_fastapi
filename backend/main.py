from fastapi import FastAPI

from database import Base, engine
from routers.auth import router as auth_router


Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Login Signup API"
)


app.include_router(auth_router)


@app.get("/")
def home():
    return {
        "message": "FastAPI Authentication API"
    }