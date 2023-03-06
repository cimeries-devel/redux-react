import React from 'react';

export const Comment = ({ comentario }) => (
  <div className="d-flex text-muted pt-3">
    <p className="pb-3 mb-0 small lh-sm border-bottom">
        <strong className="d-block text-gray-dark">{comentario.title}</strong>
        <strong className="d-block text-gray-dark">{comentario.email}</strong>
        {comentario.body}
    </p>
  </div>
);
