import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('donation/donation-container', 'Integration | Component | donation/donation container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{donation/donation-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#donation/donation-container}}
      template block text
    {{/donation/donation-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
