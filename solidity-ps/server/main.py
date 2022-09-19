from fastapi import FastAPI
import routes
import uvicorn


## init ##
app = FastAPI()

app.include_router(routes.router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=7777, reload=True)
