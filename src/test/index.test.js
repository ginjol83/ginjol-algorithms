import {dijkstra, kruskal, prim, mergeSort, quickSort, linearSearch } from "../";
  
const array=[5,3,7,6,2,9];
const items = [5,3,7,6,2,9];

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

describe("should return the sorted array", () => {
    it("should return 2", () => {
        const solution = mergeSort(array)
        console.log('mergeSort Solution is: '+solution)
        expect(solution).toEqual([2,3,5,6,7,9]);
    });
});


describe("should return the sorted array", () => {
    it("should return 2", () => {
        const solution = quickSort(items, 0, items.length - 1)
        console.log('quickSort Solution is: '+solution)
        expect(solution).toEqual([2,3,5,6,7,9]);
    });
});


describe("should return the finded element", () => {
    it("should return 2", () => {
        const solution = linearSearch([2,3,5,6,7,9], 7)
        console.log('linearSearch Solution is: '+solution)
        expect(solution).toEqual(4);
    });
});

describe("should return the finded element", () => {
    it("should return -1", () => {
        const solution = linearSearch([2,3,5,6,7,9], 1)
        console.log('linearSearch Solution is: '+solution)
        expect(solution).toEqual(-1);
    });
});