import React from "react";
import ProjectItem from "./ProjectItem";

function SearchForm({ search, setSearch, filteredProjects }) {
  return (
    <section className="search">
      <input
        type="text"
        placeholder="Search Projects"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filter">
        {filteredProjects.length == 0 ? (
            <p className="error">No project found</p>
        ) : (
        filteredProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        )))}
      </div>
    </section>
  );
}

export default SearchForm;