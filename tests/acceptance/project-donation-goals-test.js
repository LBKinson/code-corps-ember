import { test } from 'qunit';
import moduleForAcceptance from 'code-corps-ember/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'code-corps-ember/tests/helpers/ember-simple-auth';
import createProjectWithSluggedRoute from 'code-corps-ember/tests/helpers/mirage/create-project-with-slugged-route';
import projectDonationGoalsPage from '../pages/project/donation-goals';

moduleForAcceptance('Acceptance | Project Donation Goals');

test('it renders existing donation goals', function(assert) {
  assert.expect(99);

  let project = createProjectWithSluggedRoute();
  let { organization } = project;
  server.createList('donation-goal', 3, { project });

  projectDonationGoalsPage.visit({ organization: organization.slug, project: project.slug });

  andThen(() => {
    debugger;
  });
});

test('it sets up a new unsaved donation goal if there are no donation goals, which can be added', function(assert) {
  assert.expect(99);

  let project = createProjectWithSluggedRoute();
  let { organization } = project;

  projectDonationGoalsPage.visit({ organization: organization.slug, project: project.slug });
});

test('it is possible to add a donation goal when donation goals already exists', function(assert) {
  assert.expect(99);

  let project = createProjectWithSluggedRoute();
  let { organization } = project;

  projectDonationGoalsPage.visit({ organization: organization.slug, project: project.slug });
});

test('it allows editing of existing donation goals', function(assert) {
  assert.expect(99);

  let project = createProjectWithSluggedRoute();
  let { organization } = project;

  projectDonationGoalsPage.visit({ organization: organization.slug, project: project.slug });
});
