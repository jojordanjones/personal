from fastapi import APIRouter
from pydantic import BaseModel
from datetime import date
import json
from pathlib import Path

router = APIRouter()
DB_FILE = Path('data/site.db')
DB_FILE.parent.mkdir(exist_ok=True)

class Entry(BaseModel):
    answers: list[str]

@router.post('/journal', status_code=201)
def add_entry(entry: Entry):
    day = date.today().isoformat()
    md_path = Path('data/journal')
    md_path.mkdir(parents=True, exist_ok=True)
    md_file = md_path / f"{day}.md"
    with md_file.open('w') as f:
        f.write('\n'.join(entry.answers))
    return {'ok': True}
