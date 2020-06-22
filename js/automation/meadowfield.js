// Proposed: https://eloquentjavascript.net/07_robot.html
const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

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

/**
 * 
 */
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        // if it is not possible go from this place to destination 
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {

            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                    return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
  );
  let next = first.move("Alice's House");
  