import axios from 'axios';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["api", "url", "method", "headers", "params", "data"];
var yahoo = /*#__PURE__*/axios.create({
  baseURL: 'https://query1.finance.yahoo.com/v7/finance/download/'
});
var apiMapper = {
  yahoo: yahoo
};
var fetch = function fetch(_ref) {
  var _ref$api = _ref.api,
      api = _ref$api === void 0 ? 'yahoo' : _ref$api,
      _ref$url = _ref.url,
      url = _ref$url === void 0 ? '/' : _ref$url,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'GET' : _ref$method,
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      config = _objectWithoutPropertiesLoose(_ref, _excluded);

  return apiMapper[api](_extends({
    url: url,
    method: method,
    headers: headers,
    params: params,
    data: data
  }, config));
};

var Converter = /*#__PURE__*/function () {
  function Converter(data) {
    this.data = data;
  }

  var _proto = Converter.prototype;

  _proto.toCSV = function toCSV() {
    if (typeof this.data === 'string') {
      this.data = this.data.split('\n');
    }

    return this;
  };

  _proto.toJSON = function toJSON() {
    if (Array.isArray(this.data)) {
      var header = this.data[0].split(',');
      var data = this.data.slice(1); // @ts-ignore

      this.data = data.reduce(function (acc, item) {
        var obj = {};

        if (item.includes('null')) {
          return acc;
        }

        item.split(',').forEach(function (val, i) {
          // @ts-ignore
          obj[header[i].replace(' ', '')] = val;
        });
        return [].concat(acc, [obj]);
      }, []);
      return this;
    }

    return this;
  };

  _proto.save = function save() {
    return this.data;
  };

  return Converter;
}();

export { Converter, fetch };
//# sourceMappingURL=data-layer.esm.js.map
