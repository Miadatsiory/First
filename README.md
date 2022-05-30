# test

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
Stateless/statefull:
rah hatsorina : 

Statefull : composant avec des states / data
Statefull : composants sans state/ data les données à afficher sont passées via props


1 HOC : 
-Les fonctionnalités devraient être dans des components.
-Les pages ne devraient pas contenir de décration mais devraient faire appels aux composans pour l
qui servinont pour l'affichage

- Les composants : 
Chaque fonctionnalités devraient avoir un conteneur les des composants d'affichage.

Roles : 
Container : 
 - operations/ traitements
 - requête

UI / affichage:
devrait être stateless et les données sont passées via props

2 SSOT : Single Source of truth ou Un seul Source de Vérité : 

Nous devons avoir un seul source de données pour l'appli pour éviter :
- la répétition des réquetes
- l'accésibilité des données
- etc...

concernant notre projet "Vuex" est le responsable de la gestion de store : 

Store : 
    -state : notre seul source de vérité (data global) ... accessible via this.store.state.fichier.nomVar
    -mutation : pour les fonctions sync add/delete ... appelé via this.$store.commit("fichier/nomFunc",params)
    -actions : action async (fetch API) .... appelé via this.$store.dispatch("fichier/nomFunc",params)


 Exemple :
projet todos :
les fonctions pour modifier/ajouter/ lecture du store devrais se faire dans le mutation ou actions du store
Je vous invite à explorer le projets suivant : 


Composans : 
components>Todo
 =>Container : 
    Container.vue

UI :
    ->add.vue
    ->View.vue

Pages:
    Pages>
    -> index.vue
    -> todo.vue
Store : 
    store>todos

