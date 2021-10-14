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

module.exports = { httpResponse, RESPONSE_STATUS };
