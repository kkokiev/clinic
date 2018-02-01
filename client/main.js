import React from 'react';
import { render } from 'react-dom';

import App from '/client/imports/app';

Meteor.startup(() => {
  render(
    <App />,
    document.getElementById('app')
  );
});
