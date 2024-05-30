from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy import Table, create_engine, MetaData
import sshtunnel
from dotenv import load_dotenv
import os


load_dotenv()

sshtunnel.SSH_TIMEOUT = 10
sshtunnel.TUNNEL_TIMEOUT = 10

try:
    with sshtunnel.SSHTunnelForwarder(
        (os.getenv('SSH_HOST')),
        ssh_username=os.getenv('SSH_USERNAME'), ssh_password=os.getenv('SSH_PASSWORD'),
        remote_bind_address=(os.getenv('DB_HOST'), 3306)
    ) as tunnel:
        connection = create_engine(
            f"mysql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@127.0.0.1:{tunnel.local_bind_port}/{os.getenv('DB_NAME')}"
        )

        metadata = MetaData()
        metadata.reflect(bind=connection, only=['olympic_hosts'])
 
        olympic_hosts = Table('olympic_hosts', metadata, autoload_with=connection)
        Session = sessionmaker(bind=connection)
        session = Session()
        user = session.query(olympic_hosts).filter_by(game_season='Winter').first()
        print(user)   
        # for row in session.query(olympic_hosts).all():
        #     print(row[1])
        
        session.close()
 
except Exception as e:
    print("Erreur:", e)
finally:
    if connection:
        connection.dispose()