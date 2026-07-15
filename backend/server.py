from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Percorso ai file YAML statici
FRONTEND_PUBLIC = Path(__file__).parent.parent / 'frontend' / 'public'

@api_router.get("/")
async def root():
    return {"message": "Agenda API"}

@api_router.get("/agenda")
async def get_agenda():
    """Serve il file YAML dell'agenda"""
    yaml_path = FRONTEND_PUBLIC / 'agenda.yaml'
    if not yaml_path.exists():
        raise HTTPException(status_code=404, detail="Agenda file not found")
    return FileResponse(yaml_path, media_type='application/x-yaml')

@api_router.get("/distances")
async def get_distances():
    """Serve il file YAML delle distanze"""
    yaml_path = FRONTEND_PUBLIC / 'distances.yaml'
    if not yaml_path.exists():
        raise HTTPException(status_code=404, detail="Distances file not found")
    return FileResponse(yaml_path, media_type='application/x-yaml')

@api_router.get("/documents")
async def get_documents():
    """Serve il file YAML dei documenti"""
    yaml_path = FRONTEND_PUBLIC / 'documents.yaml'
    if not yaml_path.exists():
        raise HTTPException(status_code=404, detail="Documents file not found")
    return FileResponse(yaml_path, media_type='application/x-yaml')

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()