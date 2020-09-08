// given a list of connections "from - to" place, output a adjacent list
// Proposed: https://eloquentjavascript.net/07_robot.html

const roadGraph = buildGraph(roads);

/**
 * @param  { string[] } edges indicates the connetions between places
 * @return { graph } graph is undirected reresented in an adjacent list.
 * 
 * This funtion receives a array of string with the format from - to, se above:
 * 
 * [ 
 *      "My house - Your house",
 *      "My heart - Your heart"
 * ]
 */
function buildGraph(roads) {
    graph = {};
    
    function addEdge(from, to) {
        if(graph[from]) {
            graph[from].push(to);
        } else {
            graph[from] = [to];
        }
    }
    
    roads.map(road => {
        [from, to] = road.split('-');
        addEdge(from, to);
        addEdge(to, from);
    });
    
    console.log(graph);
    
    return graph;
}

function getGraph() {
    return roadGraph;
} 

