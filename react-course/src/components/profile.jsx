function Welcome() {
    return <h1>Welcome Home</h1>;
}

function Profile(props) {
    return (
        <div>
            <h2>{props.Name}</h2>
            <p>{props.Role}</p>
        </div>
    );
}

export { Welcome, Profile };