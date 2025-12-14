# Development Pipeline Planner

A full-stack web application designed to help users visually create, manage, and analyze development pipelines using a node-based interface.

## Features

-   **Interactive Pipeline Builder**: Drag-and-drop interface powered by React Flow to design your pipeline.
-   **Node Customization**: Various node types (Input, Output, LLM, Text, etc.) to suit different pipeline needs.
-   **Real-time Validation**: Backend analysis to check for directed acyclic graph (DAG) properties.
-   **Modern Tech Stack**: Built with React for the frontend and FastAPI for the backend.

## Tech Stack

-   **Frontend**: React.js, React Flow, Zustand (State Management)
-   **Backend**: Python, FastAPI, NetworkX (Graph Analysis)

## Prerequisites

Before you begin, ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [Python](https://www.python.org/) (v3.8 or higher)

## Installation & Setup

### 1. Backend Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2.  (Optional) Create and activate a virtual environment:
    ```bash
    python -m venv venv
    # Windows
    .\venv\Scripts\activate
    # macOS/Linux
    source venv/bin/activate
    ```

3.  Install the required dependencies:
    ```bash
     pip install fastapi uvicorn pydantic networkx python-multipart
    ```

4.  Start the backend server:
    ```bash
    uvicorn main:app --reload
    ```
    The backend will run at `http://localhost:8000`.

### 2. Frontend Setup

1.  Open a new terminal and navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the frontend application:
    ```bash
    npm start
    ```
    The frontend will run at `http://localhost:3000`.

## Usage

1.  Open your browser and visit `http://localhost:3000`.
2.  Use the toolbar to add nodes to the canvas.
3.  Connect nodes by dragging from handles.
4.  Click **Submit** to send the pipeline to the backend for analysis.
5.  Receive real-time feedback on the number of nodes, edges, and DAG status.
