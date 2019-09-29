const createUser = User => (name, lastname) => {
    if (!name || !lastname) {
        throw new Error(`Name: ${name}, Lastname: ${lastname}`)
    }
    const user = new User({ name, lastname });
    return user.save();
}

const listUsers = User => () => {
    return User.find();
}

module.exports = User => {
    return {
        createUser: createUser(User),
        listUser: listUsers(User)
    }
}