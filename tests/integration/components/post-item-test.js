import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-item', 'Integration | Component | post item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{post-item}}`);
  assert.equal(this.$('.post-item').length, 1, 'The component element is rendered');
});

test('it renders all required elements', function(assert) {
  assert.expect(2);

  var post = {
    title: 'Clean the house',
    postType: 'task'
  };

  this.set('post', post);
  this.render(hbs`{{post-item post=post}}`);

  assert.equal(this.$('.post-title').text().trim(), 'Clean the house', 'The title renders');
  assert.equal(this.$('.post-type').text().trim(), 'task', 'The post type renders');
});


test('it renders with correct post-type class', function(assert) {
  this.set('post', { postType: 'task' });
  this.render(hbs`{{post-item post=post}}`);
  assert.equal(this.$('.post-item.task').length, 1, 'Task rendered with a .task class');

  this.set('post', { postType: 'issue' });
  this.render(hbs`{{post-item post=post}}`);
  assert.equal(this.$('.post-item.issue').length, 1, 'Issue rendered with an .issue class');

  this.set('post', { postType: 'progress' });
  this.render(hbs`{{post-item post=post}}`);
  assert.equal(this.$('.post-item.progress').length, 1, 'Progress post rendered with a .progress class');

  this.set('post', { postType: 'idea' });
  this.render(hbs`{{post-item post=post}}`);
  assert.equal(this.$('.post-item.idea').length, 1, 'Idea rendered with an .idea class');
});
