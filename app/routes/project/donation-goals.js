import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.modelFor('project')
  },

  setupController(controller, project) {
    return controller.set('project', project);
  }
});
