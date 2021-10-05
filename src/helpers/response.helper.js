const FAIL = 0;
const PASS = 1;

function httpResponse(code, status, msg, data) {
  return {
    code,
    status,
    msg,
    data,
  };
}

function http200(status = PASS, msg = "Success", data = null) {
  return {
    code: 200,
    status,
    msg,
    data,
  };
}

function http201(status = PASS, msg = "Created", data = null) {
  return {
    code: 201,
    status,
    msg,
    data,
  };
}

module.exports = { PASS, FAIL, httpResponse, http200, http201 };
