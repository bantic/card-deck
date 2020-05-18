import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class GameIndexController extends Controller {
  @service game;

  @action
  async gameDidStart() {
    this.model = await this.game.refresh(this.model.shortId);
  }
}
