const app = require("../../src/app");
const request = require("supertest");
const mongoose = require("../helper");
const assert = require("assert");

describe('App test', () => {
    it('has a module App', () => {
        assert(app);
    });

    let server;
    before(() => {
        server = app.listen(3001);
    });

    after(() => {
        server.close();
    });

    describe('user routes test', () => {
        it('can list users', async() => {
            await request(server).get("/users").expect(200);
        });

        it('can post users', async() => {
            await request(server).post("/users?name=foo&lastname=foo").expect(200);
        });

        it('fails if name is missing in post users', async() => {
            await request(server).post("/users?lastname=foo").expect(500);
        });

        it('fails if lastname is missing in post users', async() => {
            await request(server).post("/users?name=foo").expect(500);
        });

        it('fails if name and lastname is missing in post users', async() => {
            await request(server).post("/users").expect(500);
        });
    });

    describe('404', () => {
        it('returns 404', async() => {
            await request(server).post("/").expect(404);
        });
    });


});