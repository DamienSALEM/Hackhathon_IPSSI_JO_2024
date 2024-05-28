import pandas as pd
from sqlalchemy import create_engine
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

        csv_files = ['olympic_athletes.csv', 'olympic_hosts.csv', 'olympic_medals.csv', 'olympic_results.csv']

        for file in csv_files:
            df = pd.read_csv(file)

            table_name = os.path.splitext(os.path.basename(file))[0]

            df.to_sql(name=table_name, con=connection, if_exists='replace', index=False)

    print("Données importées avec succès dans la base de données MySQL via le tunnel SSH.")
except Exception as e:
    print("Erreur:", e)
finally:
    if connection:
        connection.dispose()
