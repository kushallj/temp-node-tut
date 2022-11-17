class Graph{
  constructor(n){
    this.Adjlist = new Array(n).fill(new Set())
  }

  addEdge(u, v) {
    this.Adjlist[u].add(v)
    this.Adjlist[v].add(v)
  }
  
}