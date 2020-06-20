// @ts-check

/* // BEGIN
export default (filepath, period, cb) => {
  let lastCheckTime = Date.now();

  const check = (timerId) => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        cb(err);
        return;
      }
      const { mtimeMs } = stats;
      if (mtimeMs > lastCheckTime) {
        cb(null);
        lastCheckTime = mtimeMs;
      }
    });
  };

  const timerId = setInterval(() => check(timerId), period);
  return timerId;
};
// END */