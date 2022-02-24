import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="marquee-outer">
      <div className="marquee-inner">
        <img src="//https://blog.nsslha.org/wp-content/uploads/2019/06/Paporto_Tutoring-1060x707.jpg" width="94" height="88" alt="Tutoring session"/></div>
        </div>
        
        <div className="flex-row justify-center">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <ThoughtForm />
          </div>
          <div className="col-12 col-md-8 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ThoughtList
                thoughts={thoughts}
                title="Some Feed for Thought(s)..."
              />
            )}
          </div>
        </div>
    </main>
  );
};

export default Home;
