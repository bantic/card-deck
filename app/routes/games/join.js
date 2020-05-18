import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class GamesJoinRoute extends Route {
  @service session;

  async model({ short_id }) {
    return this.session.loadGame(short_id);
  }
}
