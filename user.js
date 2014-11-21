(function () {
    "use strict";
    var user = {
        id: 0,
        name: "Brendan Eich",
        title: "Mr"
    };
    console.log(user);
    function updateGreeting(user) {
        user.greeting = "Hello, " + user.title + " " + user.name + "!";
    }

    updateGreeting(user);

    Object.observe(user, function (changes) {
        if (changes.name === 'name' || changes.name === 'title') {
            updateGreeting(user);
        }
    });
    user.name="Addy Osmani";
    user.title="Sir";
    console.log(user);
}());