import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class GameController extends Controller {
  @tracked username;
  @service session;

  @action
  joinGame() {
    let username = this.username;
    let { gameData } = this.model;
    this.session.joinGame(username, gameData.shortId);
  }
}
