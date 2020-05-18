# card-deck

## May 17 EOD

Can create a game, join it, and start it.

Need to work on sharing game rounds and making that logic work on the backend

### previous notes

Ok, hitting api/games/create does make a connection to firebase and can access the api there.

Created a google service account via https://console.cloud.google.com/iam-admin/serviceaccounts/create?authuser=0&project=cards-api-1c66e&supportedpurview=project
and encoded the JSON file as:

- encodeURI(JSON.stringify(certJSON))
- stored the encoded string as FIREBASE_ADMIN_JSON
- It is decoded in the firebase.js util

* This allows the API to make changes to the FB database without needing to authenticate a specific user
* Apparently user auth is needed only if we want to have the client modify (or query?) the FB firestore

Firebase usage:

- following https://firebase.google.com/docs/firestore/quickstart?authuser=0#node.js

* the Firestore: https://console.firebase.google.com/u/0/project/cards-api-1c66e/database/firestore/data~2Fusers~2Falovelace2

### Notes

API endpoints:

- findOrCreateGame
  - if given a shortId, finds or creates a game with that short id
  - if no short id, generates one and then creates the game
- joinGame
  - given a username and client-side-generated user id, joins the user to the game. finds or creates a player record with that username and id
- startGame
  - marks a game as "started" — stop accepting new players

How to distribute cards to the players? Starting the game should create and shuffle a deck.

Players should see their cards, and see the deck status, and see other players card counts.

Players should be able to pass a card(s).

Players should be able to play a card.

The game should enforce when a player can take an action, but it seems like it would be ok as a first step to allow anyone to play at any time, and enforce the rules out-of-band.
