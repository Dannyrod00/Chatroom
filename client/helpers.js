Template.hello.helpers({
    "message": function () {
        return message.find({}).fetch();
    }
});