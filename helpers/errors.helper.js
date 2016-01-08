var util = require('util');

module.exports = HTTPError;

function HTTPError() {
  'use strict';
  Error.call(this, arguments);
}

util.inherits(HTTPError, Error);

HTTPError.prototype = {
  NotFound: NotFoundFn,
  IntervalServerError: IntervalServerErrorFn
}

function NotFoundFn(message) {
  'use strict';
  HTTPError.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.statusCode = 404;
  this.message = message;
  this.name = 'NotFound';
}

function IntervalServerErrorFn(message) {
  'use strict';
  HTTPError.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.statusCode = 500;
  this.message = message;
  this.name = 'IntervalServerError';
}
