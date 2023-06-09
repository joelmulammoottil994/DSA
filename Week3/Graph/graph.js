class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
	}
	addEdge(v1, v2) {
		this.adjacencyList[v1].push(v2)
		this.adjacencyList[v2].push(v1)
	}
	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)

		this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
	}
	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop()
			this.removeEdge(vertex, adjacentVertex)
		}
        delete this.adjacentList[vertex]
	}
}
let g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('E', 'B')
g.addEdge('E', 'A')
g.addEdge('D', 'E')

// g.removeVertex('E')
// g.removeEdge('E', 'A')

console.log(g.adjacencyList)
