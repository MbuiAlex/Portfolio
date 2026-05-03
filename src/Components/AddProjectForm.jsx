import React from "react";

function AddProjectForm({ newTitle, setNewTitle, newDescription, setNewDescription, handleAddProject }) {
  return (
    <section className="addproject">
      <h2>Add Project</h2>
      <form onSubmit={handleAddProject}>
        <label>Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          required
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddProjectForm;