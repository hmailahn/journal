import React from 'react';
import { Link } from 'react-router-dom';

const JournalEntryList = ({ journalEntries, title }) => {
  if (!journalEntries.length) {
    return <h3>No Entries Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {journalEntries &&
        journalEntries.map(journalEntry => (
          <div key={journalEntry._id} className="card mb-3">
            <p className="card-header">
                <Link
                to={`/profile/${journalEntry.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
              {journalEntry.username} 
              </Link>{' '}
              entry on {journalEntry.createdAt}
            </p>
            <div className="card-body">
            <Link to={`/journalEntry/${journalEntry._id}`}>
              <p>{journalEntry.journalText}</p>
              <p className="mb-0">
                Click to{' '}
               see the entry!
              </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JournalEntryList;