from fastapi import FastAPI
from .journal import router as journal_router

app = FastAPI()
app.include_router(journal_router)

@app.get('/ping')
def ping():
    return {'ping': 'pong'}
