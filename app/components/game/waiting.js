import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class GameWaitingComponent extends Component {
  @service game;

  @action
  async startGame() {
    debugger;
    await this.game.start(this.args.game.shortId);
    this.args.didStart();
  }
}
