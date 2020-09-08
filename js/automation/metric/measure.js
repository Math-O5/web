const TIME_EXECUTION = 1000;

function executeRobot(state, robot, memory) {
    let totalTurns = 0;
    for(let i = 0; i < TIME_EXECUTION; ++i) {
        for(let turn = 0;turn < 3*MAX_STOPS; turn++) {
            if(state.parcels.length === 0) {
                totalTurns += turn;
                break;
            }
            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
        }
    }
    return totalTurns;
}

function compareRobots(robot1, memory1, robot2, memory2) {
    // My code here
    const state = VillageState.random();
    const totalTurns1 = executeRobot(state, robot1, memory1);
    const totalTurns2 = executeRobot(state, robot2, memory2);

    const avgRobot1 = totalTurns1 / TIME_EXECUTION;
    const avgRobot2 = totalTurns2 / TIME_EXECUTION;

    console.log("Avg1: ", avgRobot1);
    console.log("Avg2: ", avgRobot2);
}
  
compareRobots(nextOrientation, [], randomRobot, []);