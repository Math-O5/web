function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
} 

function bfs(roadGraph, from, to) {
    let vis = {};
    let routing = [{at: from, route: []}];
    vis[from] = 1;
    for(let i = 0; i < routing.length; ++i) {
        let {at, route} = routing[i];
        for(let place of roadGraph[at]) {
            if(place === to) return route.concat(place);
            if(!vis[place]) {
                routing.push({at: place, route: route.concat(place)});
                vis[place]=1;
            }
        }
    }
}

function nextOrientation({place, parcels}, route) {
    if(route.length == 0) {
        let parcel = parcels[0];
        
        // find the place
        if(parcel.place != place) {
            route = bfs(roadGraph, place, parcel.place);
        } 
        // find the address
        else {
            route = bfs(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

function runRobot(state, robot, memory) {
    for(let turn = 0;turn < 3*MAX_STOPS; turn++) {
        if(state.parcels.length === 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

runRobot(VillageState.random(), nextOrientation, []);