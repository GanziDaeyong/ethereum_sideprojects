from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

DB_URL = "mysql+pymysql://root:sksmseodyd@127.0.0.1:3306/solps?charset=utf8mb4"


class SQLAlchemy:
    def __init__(self, app: FastAPI = None):
        self._engine = create_engine(DB_URL)
        self._session = sessionmaker(
            autocommit=False, autoflush=False, bind=self._engine
        )


db = SQLAlchemy()
