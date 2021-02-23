import { Card } from 'reactstrap'

const TeamMember = ({ info }) => {
    const { name, email, role } = info
    return (
        <Card className="m-3 p-3 shadow">
            <h3>{name}</h3>
            <h5>Email: <span className="text-muted">{email}</span></h5>
            <h5>Role: <span className="text-muted">{role}</span></h5>
        </Card>
    )
}

export default TeamMember
