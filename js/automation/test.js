parcels = [ {place: "Post Office", address: "Alice's House"}, 
            {place: "Alice's House", address: "Post Office"}];


let initial = new VillageState("Post Office", parcels);
// console.log("Initial> ", initial);
let next = initial.move("Alice's House");
// console.log("Next> ", next);
