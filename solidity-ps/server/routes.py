from fastapi import APIRouter, Depends
from models import UserSignup
from conn import db
from sqlalchemy.orm import Session
from schema_db import Base

router = APIRouter(prefix="/user")


@router.post("/signup")
async def signup(userinput: UserSignup):
    return "hi"


@router.post("/resetdb")
async def reset():
    Base.metadata.drop_all(bind=db._engine)
    Base.metadata.create_all(bind=db._engine)
    return "reseted"
