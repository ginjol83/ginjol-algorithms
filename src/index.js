import { dijkstraController }     from "./greedy/dijkstra";
import { kruskalController }      from "./greedy/kruskal";
import { primController }         from "./greedy/prim";
import { mergeSortController }    from "./divideAndConquerAlgorithm/mergeSort";
import { quickSortController }    from "./divideAndConquerAlgorithm/quickSort";
import { linearSearchController } from "./bruteForce/linearSearch";


//#region Divide and Conquer Algorithm
function mergeSort(array) { return mergeSortController(array) }
function quickSort(items, left, right) { return quickSortController(items, left, right) }
//#endregion Divide and Conquer Algorithm

//#region Greedy Algorithm
function dijkstra(graph, initialNode) { return dijkstraController(graph, initialNode) }
function prim(graph, initialNode) { return primController(graph, initialNode) }

function kruskal(graph, edge) { return kruskalController(graph, edge) }
//#endregion Greedy Algorithm

//#Brute Force Algorithm
function linearSearch(arr, key){ return linearSearchController(arr, key) }
//#endregion Brute Force Algorithm

export { dijkstra, kruskal, prim, mergeSort, quickSort, linearSearch }