/* eslint-env node */

const db = require("../_utils/firebase");

module.exports = async (req, res) => {
  let {
    query: { game: shortId },
  } = req;
  let doc = await db.collection("games").doc(shortId).get();
  res.send(doc.data());
};
