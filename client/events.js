Template.hello.events({
    "submit .name-form": function (event) {
        event.preventDefault();
        var name = event.target.firstname.value;

        Message.insert({
            name: name

        });
    }
});