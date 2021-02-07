import _ from 'underscore';


function kruskalController(graph, edges) {
    var mst = [];
    var forest = _.map(graph, function(node) { return [node]; });
    var sortedEdges = _.sortBy(edges, function(edge) { return -edge[2]; });
    while(forest.length > 1) {
        var edge = sortedEdges.pop();
        var n1 = edge[0],
            n2 = edge[1];

        var t1 = _.filter(forest, function(tree) {
            return _.include(tree, n1);
        });
            
        var t2 = _.filter(forest, function(tree) {
            return _.include(tree, n2);
        });

        if (t1 != t2) {
            forest = _.without(forest, t1[0], t2[0]);
            forest.push(_.union(t1[0], t2[0]));
            mst.push(edge);
        }
    }
    return mst;
}

export { kruskalController }