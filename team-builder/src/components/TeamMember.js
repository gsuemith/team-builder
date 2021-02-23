

const TeamMember = ({ info }) => {
    const { name, email, role } = info
    return (
        <div>
            <h2>{name}</h2>
            <h3>Email: {email}</h3>
            <h3>Role: {role}</h3>
        </div>
    )
}

export default TeamMember
