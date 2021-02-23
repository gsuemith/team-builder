import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'
import data from './dummy-data/defaultMembers'
import { useState } from 'react'

import TeamMember from './components/TeamMember'
import Form from './forms/Form'

const defaultInput = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [team, setTeam] = useState(data)
  const [formValues, setFormValues] = useState(defaultInput)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      id: Math.floor(Math.random()*1000000000)
    }

    console.log(newMember)

    setTeam([...team, newMember])
    setFormValues(defaultInput)
  }

  return (
    <div className="App d-flex flex-column align-items-center">
      <h1>Team Members</h1>
      <Form submit={submitForm} update={updateForm} values={formValues}/>
      <Container>
        {team.map(member => (
          <TeamMember info={member} key={member.id}/>
        ))}
      </Container>
    </div>
  );
}

export default App;
