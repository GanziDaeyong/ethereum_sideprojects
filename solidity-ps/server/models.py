from pydantic.main import BaseModel
from typing import Union


class UserSignup(BaseModel):
    username: str
    password: str
    email: Union[str, None] = None
