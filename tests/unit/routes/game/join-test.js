import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | game/join', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:game/join');
    assert.ok(route);
  });
});
