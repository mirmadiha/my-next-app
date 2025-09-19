function Settings({ params }) {
    console.log(params);
    return (
        <>
            <h1>Hi this is settings page for {params.username}</h1>
        </>
    );
}

export default Settings;