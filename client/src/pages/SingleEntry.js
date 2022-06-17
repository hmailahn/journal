import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_JOURNALENTRY } from '../utils/queries';

const SingleEntry = props => {
  const { id: journalEntryId} = useParams();
console.log(journalEntryId);

const { loading, data } = useQuery(QUERY_JOURNALENTRY, {
  variables: { id: journalEntryId }
});

const journalEntry = data?.journalEntry || {};
console.log(journalEntry);

if (loading) {
  return <div>Loading...</div>;
}

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
         <Link to={`/profile/${journalEntry.username}`}> 
         <span style={{ fontWeight: 700 }} className="text-light">
            {journalEntry.username}
          </span> 
          </Link>
          {' '}
          entry on {journalEntry.createdAt}
        </p>
        <div className="card-body">
          <p>{journalEntry.journalText}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleEntry;
