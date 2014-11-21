var model={};

Object.observe(model, function(changes) {
    changes.forEach(function(change) {
        console.log(change.type, change.name, change.oldValue, change.object);
    })
})