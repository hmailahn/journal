import React from 'react';
import JournalEntryList from '../components/JournalEntryList';

import { useQuery } from '@apollo/client';
import { QUERY_JOURNALENTRIES } from '../utils/queries';


const Home = () => {

      // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_JOURNALENTRIES);
  const journalEntries = data?.journalEntries || [];
console.log(journalEntries);

  return (
    <main>
      <div className='flex-row justify-space-between'>
      <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <JournalEntryList journalEntries={journalEntries} title="Some Feed for Thought(s)..." />
      )}
    </div>
      </div>
    </main>
  );
};

export default Home;
