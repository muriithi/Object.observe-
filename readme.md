##Object.observe()

-Is a method defined on Object.prototype

-It is part ot the ECMAScript 7(Harmony) Specification.

-Asynchronously observes changes to objects at the browser level.

-The observer receives an array of changes in the order in which they occured.

-Use Object.unobserve() to remove the listener.

-Object.observe() takes a third argument wthich is an array of the specific changes we want to listen to.

-Object.observe(object, observer, ['delete']);

-Change types include "add", "update", "delete", "reconfigure", "preventExtensions" .
