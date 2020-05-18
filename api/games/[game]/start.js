/* eslint-env node */

const db = require("../../_utils/firebase");

module.exports = async (req, res) => {
  let {
    query: { game: shortId },
  } = req;
  let gameSnapshot = await db.collection("games").doc(shortId).get();
  let game = gameSnapshot.data();
  game.started = true;
  await db.collection("games").doc(shortId).set(game);
  res.send(game);
};
