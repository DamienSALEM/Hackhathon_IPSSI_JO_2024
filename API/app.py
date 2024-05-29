
import os
from datetime import datetime
from typing import List

import MySQLdb
import sshtunnel
from dotenv import load_dotenv
from fastapi import FastAPI
from sqlalchemy import MetaData, Table, create_engine
from sqlalchemy.orm import sessionmaker

# Charger les variables d'environnement depuis le fichier .env
load_dotenv()

sshtunnel.SSH_TIMEOUT = 10
sshtunnel.TUNNEL_TIMEOUT = 10


db_user=os.getenv('DB_USER')
db_password=os.getenv('DB_PASSWORD')
host='127.0.0.1'
port="3306"
db_name=os.getenv('DB_NAME')



try:
    with sshtunnel.SSHTunnelForwarder(
        (os.getenv('SSH_HOST')),
        ssh_username=os.getenv('SSH_USERNAME'), ssh_password=os.getenv('SSH_PASSWORD'),
        remote_bind_address=(os.getenv('DB_HOST'), 3306)
    ) as tunnel:
        database_url = f"mysql://{db_user}:{db_password}@127.0.0.1:{tunnel.local_bind_port}/{db_name}"
        engine  = create_engine(database_url)
        session = sessionmaker(autocommit=False, autoflush=False, bind=engine)

        with engine.connect() as db:
        
          metadata = MetaData()
          metadata.reflect(bind=engine, only=['olympic_hosts'])
  
          olympic_hosts = Table('olympic_hosts', metadata, autoload_with=engine)
          Session = sessionmaker(bind=engine)
          session = Session()

    print("Connexion réussie à la base de données MySQL via le tunnel SSH.")
except Exception as e:
    print("Erreur:", e)


app = FastAPI()


# Todo : filter by tag 

@app.get("/olympic_hosts/")
async def read_olympic_hosts( ):
    olympic_hosts = Table('olympic_hosts', metadata, autoload_with=engine)
    columns = olympic_hosts.columns.keys()
    print(columns)
    return columns