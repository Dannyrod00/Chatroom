Template.hello.events({
    "submit .name-form": function (event) {
        event.preventDefault();
        var name = event.target.firstname.value;

        Messages.insert({
            name: name,
            username: Meteor.user().username,

        });
    }
});