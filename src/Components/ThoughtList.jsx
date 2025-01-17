import React from "react";

export const ThoughtList = ({ thoughts, loading, LikeThoughtComponent, handleLikeThought }) => {
  return (
    <div className="thought-list">
      {loading ? (
        <p>Loading...</p>
      ) : thoughts.length === 0 ? (
        <p>No thoughts found.</p>
      ) : (
        <div className="thought-container">
          {thoughts.map((thought) => (
            <div className="thought-box" key={thought._id}>
              <p>{thought.message}</p>
              <LikeThoughtComponent thoughtId={thought._id} handleLikeThought={handleLikeThought} />
              <span> x{thought.hearts}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

