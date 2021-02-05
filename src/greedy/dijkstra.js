//dijkstra graph starting at initialNode
function dijkstraController(graph, initialNode) {
    var solutions = {};
    solutions[initialNode] = [];
    solutions[initialNode].distance = 0;
    
    while(true) {
      var parent = null;
      var nearest = null;
      var distance = Infinity;
      
      //for each existing solution
      for(var n in solutions) {
        if(!solutions[n]) continue;
        var ndistance = solutions[n].distance;
        var adjacentNodes = graph[n];

        for(var a in adjacentNodes) {
          if(solutions[a]) continue;
          var d = adjacentNodes[a] + ndistance;
          if(d < distance) {
            parent = solutions[n];
            nearest = a;
            distance = d;
          }
        }
      }
      //if no more solutions be break
      if(distance === Infinity){break}
      solutions[nearest] = parent.concat(nearest);
      solutions[nearest].distance = distance;
    }
    return solutions;
}

export {dijkstraController}