import React from 'react';

// import { useQuery } from '@apollo/client';
// import { QUERY_JOURNALENTRIES } from '../utils/queries';

//   // use useQuery hook to make query request
//   const { loading, data } = useQuery(QUERY_JOURNALENTRIES);
//   const journalEntries = data?.journalEntries || [];
// console.log(journalEntries);

const Profile = () => {
    return (
      <div>
        <div className="flex-row mb-3">
          <h2 className="bg-dark text-secondary p-3 display-inline-block">
            {/* Viewing <usernames>'s profile. */}
          </h2>
        </div>
  
        <div className="flex-row justify-space-between mb-3">
          <div className="col-12 mb-3 col-lg-8">{/* PRINT THOUGHT LIST  */}</div>
  
          <div className="col-12 col-lg-3 mb-3">{/* PRINT FRIEND LIST */}</div>
        </div>
      </div>
    );
  };
  
  export default Profile;
  