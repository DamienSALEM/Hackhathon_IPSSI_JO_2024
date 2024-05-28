import pandas as pd
from sqlalchemy import create_engine, Table, MetaData
from sqlalchemy.orm import sessionmaker
import sshtunnel
from dotenv import load_dotenv
import os
import traceback

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
    Session = sessionmaker(bind=connection)
    session = Session()
    metadata = MetaData()
    metadata.reflect(bind=connection)   
    
    users_table = Table('olympic_results', metadata, autoload_with=connection)
    conn = connection.connect()
    
    select_query = users_table.select()
    result = conn.execute(select_query)

    for row in result:
        print(row['athletes'], row['rank_position'])



except Exception:
    print(traceback.format_exc())