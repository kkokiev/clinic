import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('allUsers', () => Meteor.users.find());

  if (Meteor.users.find().count() === 0) {
    const result = Accounts.createUser({
      username: 'admin',
      email: 'kaeserkiev@gmail.com',
      password: 'admin',
      profile: {
        first_name: 'Stan',
        last_name: 'Kononenko',
        department: 'MM Dent'
      }
    });

    Roles.addUsersToRoles(result, 'admin');
  }

  Meteor.methods({
    'users.add': (newUser) => {
      const cResult = Accounts.createUser({
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        profile: {
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          clinic: newUser.clinic
        }
      });
      for (const index in newUser.roles) {
        Roles.addUsersToRoles(cResult, newUser.roles[index].label);
      }
      return true;
    },
    'users.addRole': (userId, newRole) => {
      Roles.addUsersToRoles(userId, newRole);
      return true;
    }
  });
});
