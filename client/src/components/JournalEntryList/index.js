import React from 'react';

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
              {journalEntry.username} 
              thought on {journalEntry.createdAt}
            </p>
            <div className="card-body">
              <p>{journalEntry.journalText}</p>
              <p className="mb-0">
                Click to{' '}
               see the entry!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JournalEntryList;