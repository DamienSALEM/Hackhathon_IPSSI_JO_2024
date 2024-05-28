import MySQLdb
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
        connection = MySQLdb.connect(
            user=os.getenv('DB_USER'),
            passwd=os.getenv('DB_PASSWORD'),
            host='127.0.0.1', port=tunnel.local_bind_port,
            db=os.getenv('DB_NAME'),
        )

        cursor = connection.cursor()

        cursor.execute("SHOW TABLES;")

        tables = cursor.fetchall()

        print("Tables dans la base de données :")
        for table in tables:
            print(table[0])

        cursor.close()

    print("Connexion réussie à la base de données MySQL via le tunnel SSH.")
except Exception as e:
    print("Erreur:", e)
finally:
    if connection:
        connection.close()
