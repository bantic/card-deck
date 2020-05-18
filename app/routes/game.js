import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class GameRoute extends Route {
  @service game;

  async model({ shortId }) {
    return await this.game.findOrCreate(shortId);
  }
}
