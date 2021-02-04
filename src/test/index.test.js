import {dijkstra, kruskal, prim} from "../";

// create a network
const graph = { 
      '2': { '3': 1, '4': 1, R: 1 },
      '3': { '2': 1, '4': 1, '6': 1, '13': 1 },
      '4': { '2': 1, '3': 1, '5': 1, '8': 1 },
      '5': { '4': 1, '7': 1, '11': 1 },
      '6': { '3': 1, '13': 1, '15': 1 },
      '7': { '5': 1, '10': 1 },
      '8': { '4': 1, '11': 1, '13': 1 },
      '9': { '14': 1 },
      '10': { '7': 1 },
      '11': { '5': 1, '8': 1, '12': 1 },
      '12': { '11': 1 },
      '13': { '3': 1, '6': 1, '8': 1, '14': 1 },
      '14': { '9': 1, '13': 1 },
      '15': { '6': 1 },
      R: { '2': 1 }
};

var start = '10'

describe("should return the minimum distance", () => {
    it("should return 5", () => {
        const solution = dijkstra(graph,start)
        console.log('Solution is: '+solution)
        expect(solution.R[1]).toEqual('5');
    });
});