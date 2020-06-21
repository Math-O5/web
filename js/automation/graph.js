// Proposed: https://eloquentjavascript.net/07_robot.html

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
function buildGraph(edges) {
    
    let graph = Object.create(null);
    
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }
  
  const roadGraph = buildGraph(roads);