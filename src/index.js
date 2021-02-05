import { dijkstraController }     from "./greedy/dijkstra";
import { kruskalController }      from "./greedy/kruskal";
import { primController }         from "./greedy/prim";
import { mergeSortController }    from "./divideAndConquerAlgorithm/mergeSort";
import { quickSortController }    from "./divideAndConquerAlgorithm/quickSort";
import { linearSearchController } from "./bruteForce/linearSearch";


//#region 1. Recursive Algorithm
//#endregion Recursive Algorithm

//#region 2. Divide and Conquer Algorithm
function mergeSort(array) { return mergeSortController(array) }

function quickSort(items, left, right) { return quickSortController(items, left, right) }
//#endregion Divide and Conquer Algorithm

//#region 3. Dynamic Programming Algorithm
//#endregion Dynamic Programming Algorithm

//#region 4. Greedy Algorithm
function dijkstra(graph, initialNode) { return dijkstraController(graph, initialNode) }

function prim(graph, initialNode) { return primController(graph, initialNode) }

function kruskal(graph, initialNode) { return kruskalController(graph, initialNode) }
//#endregion Greedy Algorithm

//#region 5. Brute Force Algorithm

function linearSearch(arr, key){ return linearSearchController(arr, key) }

//#endregion Brute Force Algorithm

//#region 6. Backtracking Algorithm
//#endregion Backtracking Algorithm

export { dijkstra, kruskal, prim, mergeSort, quickSort, linearSearch }