# Application Web pour une Agence Immobilière

Développement d'une plateforme web pour une agence immobilière, avec des fonctionnalités pour la gestion des utilisateurs et des propriétés, et une interface intuitive.

## Fonctionnalités principales
- **Interface utilisateur et administrateur** : L'interface administrateur rassemble celle que nous avons réalisée dans les TD, avec des améliorations, notamment un moteur de recherche avancé.
- **Moteur de recherche** : 
  - Composé d'un input et d'un bouton "Search", ainsi que de différents selects et inputs (prix min, prix max, wilaya, type).
  - Les résultats sont affichés dans une division en bas, et cette division se vide automatiquement lorsqu'on passe d'un mode de recherche à l'autre.
  - **Option de tri** : Peut traiter les résultats affichés, même ceux générés par l'input "Search".
- **Exemples de recherche** : Essayez de rechercher des villes comme "Alger" ou "Tizi-Ouzou", ou des types de biens comme "VILLA" ou "APPARTEMENT".
- **Connexion** : Accès sécurisé à l'interface administrateur avec des identifiants de test.
  - **ID** : saad / **MDP** : 2004
  - **ID** : lynda / **MDP** : 2003
  - **ID** : tranhainam / **MDP** : ubo
- **Galerie de biens** : Une présentation visuelle de quelques propriétés.
- **Footer** : Un pied de page simple et informatif.

## Technologies utilisées
- **Frontend** : HTML, CSS, JavaScript, Bootstrap
- **Données** : XML pour le stockage structuré des informations

## Structure de la base de données
La base de données est structurée avec des tables représentant différents types de propriétés, telles que maisons, appartements, et terrains. Chaque table contient des colonnes pour l'ID, le nom, la localisation, la superficie, le prix, et les caractéristiques.

## Installation
1. Clonez ce dépôt :  
   ```bash
   git clone https://github.com/RabahCodeVirtuose/Agence-Immobiliere-WebApp.git
2. Pour afficher correctement les fichiers XML, désactivez les restrictions de sécurité de Chrome :
 windows : créer un raccourci
			"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\path\to\new\directory"
linux : google-chrome --disable-web-security --user-data-dir=/path/to/new/directory
3. Remarque : N'utilisez cette méthode que pour des tests locaux.

## Auteur
Rabah TOUBAL - Étudiant en L3 Informatique Ingénierie
Contact : rabah.toubal.etudes@gmail.com
LinkedIn : linkedin.com/in/rabah-toubal-29b264203
