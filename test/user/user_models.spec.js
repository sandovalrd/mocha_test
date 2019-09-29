const assert = require("assert");
const mongoose = require("../helper");
const User = require("../../libs/user/user_models");

describe('User model test', () => {

    afterEach(async() => {
        await User.deleteMany({});
    });

    it('Has a module', () => {
        assert(User);
    });

    describe('Get user', () => {
        it('gets a users', async() => {
            const user = new User({ name: "Isaac", lastname: "Sandoval" });
            user.save();
            const foundUser = await User.findOne({ name: "Isaac" });
            const expected = "Isaac";
            const actual = foundUser.name;
            assert.equal(actual, expected);
        });
    });

    describe('Save user', () => {
        it('saves a users', async() => {
            const user = new User({ name: "Isaac", lastname: "Sandoval" });
            const saveUser = await user.save();
            const expected = "Isaac";
            const actual = saveUser.name;
            assert.equal(actual, expected);
        });
    });

    describe('Update user', () => {
        it('updates a users', async() => {
            const user = new User({ name: "Rafael", lastname: "Sandoval" });
            await user.save();
            user.name = "Isaac";
            const updatedUser = await user.save();
            const expected = "Isaac";
            const actual = updatedUser.name;
            assert.equal(actual, expected);
        });
    });
});