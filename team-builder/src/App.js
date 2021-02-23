import './App.css';
import data from './dummy-data/defaultMembers'
import { useState } from 'react'

import TeamMember from './components/TeamMember'

function App() {
  const [team, setTeam] = useState(data)

  return (
    <div className="App">
      {team.map(member => (
        <TeamMember info={member} key={member.id}/>
      ))}
    </div>
  );
}

export default App;
