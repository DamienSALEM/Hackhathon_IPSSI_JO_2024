import MySQLdb
import sshtunnel
from dotenv import load_dotenv
import os

# Charger les variables d'environnement depuis le fichier .env
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

        # Créer un curseur pour exécuter des requêtes SQL
        cursor = connection.cursor()

        # Exécuter la requête pour afficher les noms de table
        cursor.execute("SHOW TABLES;")

        # Récupérer les résultats
        tables = cursor.fetchall()

        # Afficher les noms de table
        print("Tables dans la base de données :")
        for table in tables:
            print(table[0])

        # Fermer le curseur
        cursor.close()

    print("Connexion réussie à la base de données MySQL via le tunnel SSH.")
except Exception as e:
    print("Erreur:", e)
finally:
    # Fermer la connexion à la base de données MySQL
    if connection:
        connection.close()
