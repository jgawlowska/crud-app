import React, { useState } from "react";

export const AuthorsList = ({ authors = [], onDelete, onUpdate }) => {
  const [editingAuthorId, setEditingAuthorId] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const startEditing = (author) => {
    setEditingAuthorId(author.id);
    setName(author.name);
    setSurname(author.surname);
  };

  const saveChanges = () => {
    onUpdate(editingAuthorId, name, surname);
    setEditingAuthorId(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr key={author.id}>
            <td>
              {editingAuthorId === author.id ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                author.name
              )}
            </td>
            <td>
              {editingAuthorId === author.id ? (
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              ) : (
                author.surname
              )}
            </td>
            <td>
              {editingAuthorId === author.id ? (
                <>
                  <button onClick={saveChanges}>Save</button>
                  <button onClick={() => setEditingAuthorId(null)}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => startEditing(author)}>Edit</button>
                  <button onClick={() => onDelete(author.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
