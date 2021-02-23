import '../index.css'
import { Form as FormStrap, Button } from 'reactstrap'

const roles = ['backend engineer', 
    'designer', 'frontend engineer', 'team lead', 'analyst', 
    'data architect', 'data scientist', 'fullstack developer']

const Form = ({ submit, update, values }) => {
    const submitForm = evt => {
        evt.preventDefault()
        console.log(evt.target)
        submit()
    }

    const updateForm = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const disableSubmit = () => (
        !values.email || !values.name || !values.role
    )

    return (
        <FormStrap onSubmit={submitForm} className="w-50 m-4 p-3 shadow">
            {/* Text input */}
            <label className="d-flex justify-content-between">
                Name:
                <input 
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={updateForm}
                />
            </label>
            <label className="d-flex justify-content-between">
                Email:
                <input 
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={updateForm}
                />
            </label>

            {/* Drop Down Menu */}
            <label 
                className="d-flex justify-content-between"
                onChange={updateForm}
            >
                Role:
                <select
                    name='role'
                    value={values.role}
                    onChange={updateForm}
                >
                    <option value="">--- select one ---</option>
                    {
                        roles.map(role => (
                            <option value={role} key={role}>
                                {role}
                            </option>
                        ))
                    }
                </select>
            </label>
            <Button disabled={disableSubmit()}>Add Member</Button>
        </FormStrap>
    )
}

export default Form
