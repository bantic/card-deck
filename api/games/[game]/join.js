/* eslint-env node */

const db = require("../../_utils/firebase");

module.exports = async (req, res) => {
  let {
    query: { game: shortId },
  } = req;
  let username = req.body.username;
  let gameSnapshot = await db.collection("games").doc(shortId).get();
  let game = gameSnapshot.data();
  game.players.push({
    username,
  });
  await db.collection("games").doc(shortId).set(game);
  res.send(game);
};
