from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import networkx as nx

app = FastAPI()

# Add CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    
    # Create a directed graph from the edges
    G = nx.DiGraph()
    
    # Add nodes (optional for DAG check but good for completeness)
    for node in pipeline.nodes:
        G.add_node(node['id'])
        
    # Add edges
    for edge in pipeline.edges:
        G.add_edge(edge['source'], edge['target'])
    
    # Check if DAG
    is_dag = nx.is_directed_acyclic_graph(G)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }
