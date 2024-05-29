# Hackhathon_IPSSI_JO_2024

## Membres du groupe MIA16

_Bilele AZZOUNI
_Said BOHUI
_Hadjar Adam ABAKAR
_Joris MONTEILLET
_CHAUVIN Allan
_Kenuhn RIMBERT
_Damien SALEM
_Madi NIAKATE

## Technos

1. Python - 3.10
2. React - 18.6
3. tensorflow - 2.15
4. pandas / pyspark
5. fastapi
6. MySQL 8.0
7. plotly
8. scikit-learn
9. openpyxl
10. lxml
11. sqlachemy

## Prédictions

1. Est-ce que le pays hote a de meilleur résultats que lorsqu'il est en déplacement?
   1. olympic results et olympic host
   2. models:
2. Y a-t-il une corrélation entre le nombre de médailles remportées et des facteurs économiques tel que le montant du Produit Intérieur Brut (PIB) ?
   1. olympic medals + PIB/pays/date
   2. models:
3. Comment l’expérience passée des athlètes aux Jeux Olympiques influence-t-elle leurs performances futures ?
   1. Olympic athletes + olympic medals
   2. models:
4. Prédire le tableau des médailles (par pays TOP10/20)
   1. Olympic results + Olympic host + Olympic medals?
   2. models:
5. Prédire le top 20 des pays (ML)
   1. Olympic results + olympic host
   2. models: forecasting / arima
6. Prédire les résultats des épreuves (TOP3 des pays) (gestion des exceptions comme Phelps, Teddy Riner, ...)
   1. Olympic result + olympic host + olympic athletes
   2. models: forecasting / arima

## Clustering

Jointure olympic results et olympics host
K-means, spectral clustering, HDBSCAN

1. Identifier les pays en fonction des résultats des épreuves au JO (winter/summer)
   1. models:
2. Classer les pays en fonction de leurs résultats aux JO (identifier leur position géographique en fonction de leur résultats) (winter/summer)
   1. models:

## Data viz

1. Est-ce que les athlètes s'arrêtent de participer aux JO si ils ont de mauvais résultats aux JO précédent
   1. olympic athletes + olympic results
   2. resultats a chaque participation des athletes
2. Nombres d'épreuves à chaque JO au cours des ans /nombres de médailles. calculer le nombres d'ex aequo
   1. olympic results + olympic medals

## Liste endpoint

1. Recupération infos du fichier (nom fichier, filtres, page=0) -> requête BDD
2. Récupération graph du fichier (nom du fichier) -> requête BDD + transformation des données
3. API url pour chaque problématique (problématique, épreuve="",pays="") -> Prédiction du modèle IA + requête BDD et transformation de la données pour la création des graphs

### Autres livrables

1. url de la webapp en prod
2. url de l'api mise en prod
3. lien vers la présentation

### Oral

Vendredi 31/05 12h15 - 12h45 - Jury 2

## TODO

1. Regrouper les diverses noms des pays (angleterre, allemagne, russie)
2. Faire un figma (demain matin 10h)
3. Faire un swagger de l'API (demain matin)
