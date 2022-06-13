import React from 'react';
import { useParams } from 'react-router-dom';

const SingleEntry = props => {
  const { id: journalEntryId} = useParams();
console.log(journalEntryId);
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            Username
          </span>{' '}
          entry on createdAt
        </p>
        <div className="card-body">
          <p>Journal Text</p>
        </div>
      </div>
    </div>
  );
};

export default SingleEntry;
