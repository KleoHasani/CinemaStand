const RESPONSE_STATUS = {
  fail: 0,
  pass: 1,
};

function httpResponse(code, status, msg, data) {
  return {
    code,
    status,
    msg,
    data,
  };
}

function http200(msg = "Success", data = null) {
  return {
    code: 200,
    status: RESPONSE_STATUS.pass,
    msg,
    data,
  };
}

function http201(msg = "Created", data = null) {
  return {
    code: 201,
    status: RESPONSE_STATUS.pass,
    msg,
    data,
  };
}

module.exports = { httpResponse, http200, http201, RESPONSE_STATUS };
