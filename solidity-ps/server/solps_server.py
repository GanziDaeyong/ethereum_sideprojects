import string
from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel


class CodeObj(BaseModel):
    cred: str
    code: str


app = FastAPI()


@app.post("/submitcode/")
async def getcode(code: CodeObj):
    print(code)
    return code
