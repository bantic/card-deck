import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class CreateGameComponent extends Component {
  @tracked isCreating = false;
  @tracked didError = false;

  @service session;

  @action
  async createGame() {
    this.didError = false;
    this.isCreating = true;
    try {
      let gameData = await this.session.createGame();
      this.shortId = gameData.shortId;
    } catch (e) {
      this.didError = true;
    } finally {
      this.isCreating = false;
    }
  }
}
