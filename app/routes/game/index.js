import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class GameIndexRoute extends Route {
  @service session;
  @service game;

  async afterModel(game) {
    let username = this.session.username;
    if (!username) {
      return this.transitionTo("game.join", game.shortId);
    } else if (!this.game.hasPlayer(game, username)) {
      return this.transitionTo("game.join", game.shortId);
    }
  }
}
