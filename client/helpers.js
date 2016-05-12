Template.hello.helpers({
    "message": function () {
        return Messages.find({}).fetch().reverse();
    }
});