import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('donation/credit-card', 'Integration | Component | donation/credit card', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{donation/credit-card}}`);

  assert.equal(this.$().text().trim(), '');
});
