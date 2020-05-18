import Service from "@ember/service";

export default class GameService extends Service {
  async create(shortId = null) {
    let gameData = await fetch(`/api/games/create`, {
      method: "POST",
      body: { shortId },
    }).then((resp) => resp.json());
    return gameData;
  }

  async findOrCreate(shortId) {
    let resp = await fetch(`/api/games/${shortId}`);
    if (resp.status === 404) {
      return await this.create(shortId);
    } else {
      return await resp.json();
    }
  }

  async joinGame(shortId, username) {
    let resp = await fetch(`/api/games/${shortId}/join`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username }),
    });
    return await resp.json();
  }

  hasPlayer(game, username) {
    return game.players.some((player) => player.username === username);
  }
}
