/* eslint-disable no-undef */
const { agent } = require("supertest");
const { server } = require("../src/server");

const request = agent(server);

jest.setTimeout(5000);

afterAll((done) => {
  server.close();
  done();
});

// Register test.
describe("POST - Register - /api/v1/register", () => {
  test("Should register", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "admin",
      lastname: "admin",
      email: "admin@admin.com",
      password: "admin123",
    });

    expect(response.status).toEqual(201);
    expect(response.body.code).toEqual(201);
    expect(response.body.status).toEqual(1);
    expect(response.body.msg).toBe("User created");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (First name can not be empty)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "",
      lastname: "admin",
      email: "admin@admin.com",
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("First name can not be empty");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (First name is not valid)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: 123,
      lastname: "admin",
      email: "admin@admin.com",
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("First name is not valid");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (SQL_INJECTION_DETECTED)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "';--",
      lastname: "admin",
      email: "admin@admin.com",
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("SQL_INJECTION_DETECTED");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (Last name can not be empty)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "admin",
      lastname: "",
      email: "admin@admin.com",
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Last name can not be empty");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (Last name is not valid)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "admin",
      lastname: 123,
      email: "admin@admin.com",
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Last name is not valid");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (SQL_INJECTION_DETECTED)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "admin",
      lastname: "';--",
      email: "admin@admin.com",
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("SQL_INJECTION_DETECTED");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (Email can not be empty)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "admin",
      lastname: "admin",
      email: "",
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Email can not be empty");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (Email is not valid)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "admin",
      lastname: "admin",
      email: 123,
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Email is not valid");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (Email already exists)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "admin",
      lastname: "admin",
      email: "admin@admin.com",
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Email already exists");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (Password can not be empty)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "admin",
      lastname: "admin",
      email: "admin@admin.com",
      password: "",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Password can not be empty");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (Password is not valid)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "admin",
      lastname: "admin",
      email: "admin@admin.com",
      password: 123,
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Password is not valid");
    expect(response.body.data).toBeNull();
  });

  test("Should not register (Password must contain at least 8 characters)", async () => {
    const response = await request.post("/api/v1/register").send({
      firstname: "admin",
      lastname: "admin",
      email: "admin@admin.com",
      password: "admin",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Password must contain at least 8 characters");
    expect(response.body.data).toBeNull();
  });
});

// Login test.
describe("POST - Login - /api/v1/login", () => {
  test("Should login", async () => {
    const response = await request.post("/api/v1/login").send({
      email: "admin@admin.com",
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(1);
    expect(response.body.msg).toBe("Authenticated");
    expect(response.body.data).toBeNull();
  });

  test("Should not login (Email can not be empty)", async () => {
    const response = await request.post("/api/v1/login").send({
      email: "",
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Email can not be empty");
    expect(response.body.data).toBeNull();
  });

  test("Should not login (Email is not valid)", async () => {
    const response = await request.post("/api/v1/login").send({
      email: 123,
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Email is not valid");
    expect(response.body.data).toBeNull();
  });

  test("Should not login (Unable to authenticate)", async () => {
    const response = await request.post("/api/v1/login").send({
      email: "admin123@admin.com",
      password: "admin123",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Unable to authenticate");
    expect(response.body.data).toBeNull();
  });

  test("Should not login (Password can not be empty)", async () => {
    const response = await request.post("/api/v1/login").send({
      email: "admin@admin.com",
      password: "",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Password can not be empty");
    expect(response.body.data).toBeNull();
  });

  test("Should not login (Password is not valid)", async () => {
    const response = await request.post("/api/v1/login").send({
      email: "admin@admin.com",
      password: 123,
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Password is not valid");
    expect(response.body.data).toBeNull();
  });

  test("Should not login (SQL_INJECTION_DETECTED)", async () => {
    const response = await request.post("/api/v1/login").send({
      email: "admin@admin.com",
      password: "';--",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("SQL_INJECTION_DETECTED");
    expect(response.body.data).toBeNull();
  });

  test("Should not login (Unable to authenticate)", async () => {
    const response = await request.post("/api/v1/login").send({
      email: "admin@admin.com",
      password: "admin1234",
    });

    expect(response.status).toEqual(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toEqual(0);
    expect(response.body.msg).toBe("Unable to authenticate");
    expect(response.body.data).toBeNull();
  });
});
