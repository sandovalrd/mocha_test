const UserService = require("../../libs/user/user_service");
const sinon = require('sinon');
const assert = require("assert");

describe('UserService test', () => {
    it('has a module', () => {
        assert(UserService);
    });

    describe('listUser test', () => {
        it('lists users', () => {
            const MockModel = {
                find: sinon.spy()
            }
            const userService = UserService(MockModel);
            userService.listUser();
            const expected = true;
            const actual = MockModel.find.calledOnce;
            assert.equal(actual, expected);
        });
    });

    describe('createUser test', () => {
        it('created users', () => {
            const save = sinon.spy();
            let name;
            let lastname;
            const MockModel = function(data) {
                name = data.name;
                lastname = data.lastname;
                return {
                    ...data,
                    save
                };
            };

            const userService = UserService(MockModel);
            userService.createUser("foo", "foo");
            const expected = true;
            const actual = save.calledOnce;
            assert.equal(actual, expected);
            assert.equal(name, "foo");
            assert.equal(lastname, "foo");
        });
    });
});