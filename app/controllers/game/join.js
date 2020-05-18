import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class GameJoinController extends Controller {
  @tracked username;
  @service session;
  @service game;
  @service router;

  @action
  async joinGame() {
    let game = this.model;
    let username = this.username;
    await this.session.signIn(username);
    game = await this.game.joinGame(game.shortId, username);
    this.router.transitionTo("game", game);
  }
}
