# app.py
from fastapi import FastAPI, HTTPException 
from connect_bd import get_metadata

app = FastAPI()

## TABLE olympic_hosts

@app.get("/olympic_hosts/count")
async def get_olympic_hosts_count():
    try:
        metadata = get_metadata()
        olympic_hosts = metadata["olympic_hosts"]
        session = metadata["session"]
        tunnel = metadata["tunnel"]
        
        count_olympic_hosts = session.query(olympic_hosts).count()
        session.close()
        tunnel.stop()
        return {"count_olympic_hosts": count_olympic_hosts}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/olympic_hosts/filter_by_country")
async def filter_olympic_hosts_by_country(country_name: str):
    try:
        metadata = get_metadata()
        olympic_hosts = metadata["olympic_hosts"]
        session = metadata["session"]
        tunnel = metadata["tunnel"]
        
        query = session.query(olympic_hosts).filter(olympic_hosts.columns.game_location == country_name)
        result = [row._asdict() for row in query]
        session.close()
        tunnel.stop()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))    
    
## TABLE olympic_athletes    
@app.get("/olympic_athletes/count")
async def get_olympic_athletes_count():
    try:
        metadata = get_metadata()
        olympic_athletes = metadata["olympic_athletes"]
        session = metadata["session"]
        tunnel = metadata["tunnel"]
        
        olympic_athletes_count = session.query(olympic_athletes).count()
        session.close()
        tunnel.stop()
        return {"olympic_athletes_count": olympic_athletes_count}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
