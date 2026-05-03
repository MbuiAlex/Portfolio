import React from "react";
import { useState } from "react";
import './App.css';
import AddProjectForm from "./Components/AddProjectForm";
import SearchForm from "./Components/SearchForm";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Digital Gallery", description: "An online platform that showcases digital art and photography, allowing artists to display their work and art enthusiasts to explore and purchase unique pieces." },
    { id: 2, title: "E-Book Store", description: "A comprehensive online store that offers a wide range of e-books across various genres, enabling users to browse, purchase, and download their favorite titles instantly." },
    { id: 3, title: "Smart Barber Shop", description: "An innovative booking system for barber shops that allows customers to schedule appointments, view services, and receive notifications for upcoming appointments." },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [search, setSearch] = useState("");

  function handleAddProject (e){
    e.preventDefault();

    const newProject = {
      id: projects.length + 1,
      title: newTitle,
      description: newDescription,
    };

    setProjects([...projects, newProject]);
    setNewTitle("");
    setNewDescription("");
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>Track All Projects and Add new Projects</h1>
      </header>

      <main>
        <AddProjectForm
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
          handleAddProject={handleAddProject}
        />

        <SearchForm
          search={search}
          setSearch={setSearch}
          filteredProjects={filteredProjects}
        />
      </main>
    </div>
  );
}

export default App;