import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class GamesIndexController extends Controller {
  @service game;
  @service router;

  @action
  async createGame() {
    let game = await this.game.create();
    this.router.transitionTo("game", game.shortId);
  }
}
