from typing import Union
from fastapi import FastAPI, Path, Query

app = FastAPI()



@app.get("/tes")
async def hi():
    return "hi"

@app.get("/test/")
async def getcode(code: str= "defaultcode"):
    result = code + "<- This is answer"
    return {"message": result}

