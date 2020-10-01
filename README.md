# Le bot discord des Jeux et Défis informatiques de Sherbrooke

## Guide des contributeurs
---

## Table des matières  
- ##### [Installation des dépendances](#Installation_des_dependances)
- ##### [Création de l'application de test](#Créer_application_de_test_Discord)
- ##### [Installation Locale](#Installation_Locale)
    
---
### Installation des dépendances
##### Instructions Windows 10
- Installer Python sur votre machine si ce n'est pas déjà fait. (<https://www.python.org/downloads/>)
- Installer NodeJS sur votre machine si ce n'est pas déjà fait. (<https://nodejs.org/en/download/>)
##### Instructions MacOS
##### Instructions Linux


### Création d'une application de test Discord
Avant de soumettre une pullrequest, il va bien falloir tester votre code. Pour cela, vous allez avoir besoin d'une instance de bot qui vous appartient. Pour des raisons évidentes, nous n'allons pas partager le token d'identification du bot JDIS, mais rien ne vous empêche de faire votre propre bot pour tester vos features dans un serveur qui vous appartient.
Comment faire me dîtes-vous? Suivez simplement ces quelques instructions:

Pour créer un bot, vous devez créer une application sur le site officiel de discord à l'aide de votre compte.
Voici les étapes à suivre:
1. Aller sur <https://discord.com/developers/applications> et créer une application.
2. Sur la page de l'application, aller sur l'onglet Bot dans le menu contextuel de gauche.
3. Ajouter un bot.
4. Configurer le bot avec un nom et avatar qui vous plait, et copier le token dans le fichier [config.json](#config.json).
5. Pour inviter le bot dans votre serveur de test, allez dans l'onglet OAuth2 du menu contextuel. Ensuite, choisisser l'option bot dans les scopes. Enfin, donner les permissions nécéssaires au bot pour les fonctionnalités que vous voulez implémenter. Copier ensuite l'URL à l'écran dans un nouvel onglet et suivre les instructions données.


### Installation Locale
1. Créer une fork du repertoire JDIS.
2. Cloner le répertoire en local.
3. Faire un ``npm install`` à la racine du projet pour installer les dépendences.
4. Créer le fichier config.json à la racine du projet avec la structure suivante:
``{
    "token": Soit le token pour vous connecter au bot.
    "prefix": Soit le préfix des commandes.
}`` 
---
Updated 30/09/2020