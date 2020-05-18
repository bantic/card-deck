/* eslint-env node */

const db = require("../_utils/firebase");
const { v4: uuidv4 } = require("uuid");

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMERIC = "0123456789";
const ALPHANUMERIC = `${ALPHA}${NUMERIC}`;

const DISALLOWED_NAMES = ["create", "join"];

function randomString(len = 4) {
  let str = "";
  for (let i = 0; i < len; i++) {
    let idx = Math.floor(Math.random() * ALPHANUMERIC.length);
    str += ALPHANUMERIC[idx];
  }
  if (DISALLOWED_NAMES.includes(str.toLowerCase())) {
    // try again
    return randomString(len);
  }
  return str;
}

async function generateUniqueGameID() {
  let id;
  let exists = true;

  while (exists) {
    id = randomString();
    exists = await loadGame(id);
  }

  return id;
}

function createGameData(shortId) {
  return {
    shortId,
    uuid: uuidv4(),
    players: [],
  };
}

async function loadGame(id) {
  let doc = await db.collection("games").doc(id);
  let snapshot = await doc.get();
  return snapshot.exists && snapshot.data();
}

async function findOrCreateGame(shortId = null) {
  let gameData;
  if (shortId) {
    gameData = (await loadGame(shortId)) || createGameData(shortId);
  } else {
    shortId = await generateUniqueGameID();
    gameData = createGameData(shortId);
  }
  await db.collection("games").doc(shortId).set(gameData);
  return gameData;
}

module.exports = async (req, res) => {
  let shortId = req.body && req.body.shortId;
  console.log("shortId", shortId, req.body, typeof req.body);
  let gameData = await findOrCreateGame(shortId);
  res.send(gameData);
};
