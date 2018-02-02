export default ({ code = 200, msg = '', data = {}, success = true }) => {
  return {
    code: 200,
    message: msg,
    result: data,
    success: success
  };
};
