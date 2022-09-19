from sqlalchemy import (
    Column,
    Integer,
    String,
)

from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()


class Users(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String(length=100))
    password = Column(String(length=100))
    email = Column(String(length=100))
