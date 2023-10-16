const User = ({user}) => {
    // console.log(props);
    const {name} = user;

    return (
        <div>
            <div>name: {name}</div>
        </div>
    );
};

export {User};