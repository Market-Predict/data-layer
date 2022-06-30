import axios from 'axios';

var indices = [{
  name: 'Dow Jones',
  key: "^DJI",
  country: "US",
  region: "North America"
}, {
  name: 'NASDAQ 100',
  key: "^NDX",
  country: "US",
  region: "North America"
}, {
  name: 'NASDAQ Composite',
  key: "^IXIC",
  country: "US",
  region: "North America"
}, {
  name: 'S&P 500',
  key: "^GSPC",
  country: "US",
  region: "North America"
}, {
  name: 'CBOE Volatility',
  key: "^VIX",
  country: "US",
  region: "North America"
}, {
  name: 'US Dollar',
  key: "DX-Y.NYB",
  country: "US",
  region: "North America"
}, {
  name: 'AEX',
  key: "^AEX",
  country: "NL",
  region: "Europe"
}, {
  name: 'CAC 40',
  key: "^FCH",
  country: "FR",
  region: "Europe"
}, {
  name: 'DAX',
  key: "^GDAXI",
  country: "DE",
  region: "Europe"
}, {
  name: 'Euro Stoxx 50',
  key: "^STOXX50E",
  country: "DE",
  region: "Europe"
}, {
  name: 'FTSE 100',
  key: "^FTSE",
  country: "GB",
  region: "Europe"
}, {
  name: 'FTSE MIB INDEX',
  key: "FTSEMIB.MI",
  country: "IT",
  region: "Europe"
}, {
  name: 'IBEX 35',
  key: "^IBEX",
  country: "ES",
  region: "Europe"
}, {
  name: 'MOEX Russia',
  key: "IMOEX.ME",
  country: "RU",
  region: "Europe"
}, {
  name: 'RTSI',
  key: "RTSI.ME",
  country: "RU",
  region: "Europe"
}, {
  name: 'FTSE China A50',
  key: "XIN9.FGI",
  country: "CN",
  region: "Asia"
}, {
  name: 'Hang Seng',
  key: "^HSI",
  country: "CN",
  region: "Asia"
}, {
  name: 'Nikkei 225',
  key: "^N225",
  country: "JP",
  region: "Asia"
}];

var commodities = {
  "energy": {
    "Crude Oil": "CL=F",
    "Brent Crude Oil": "BZ=F",
    "Natural Gas": "NG=F",
    "Heating Oil": "HO=F"
  },
  metals: {
    "Gold": "GC=F",
    "Silver": "SI=F",
    "Copper": "HG=F",
    "Platinum": "PA=F"
  },
  agriculture: {
    "Coffee": "KC=F",
    "Corn": "ZC=F",
    "Wheat": "KE=F",
    "Sugar": "SB=F",
    "Cotton": "CT=F",
    "Cocoa": "CC=F"
  }
};

var cryptocurrencies = {
  "Bitcoin USD": "BTC-USD",
  "Ethereum USD": "ETH-USD",
  "Binance Coin USD": "BNB-USD",
  "XRP USD": "XRP-USD",
  "Cardano USD": "ADA-USD",
  "Solana USD": "SOL-USD",
  "Dogecoin USD": "DOGE-USD",
  "Polkadot USD": "DOT-USD",
  "HEX USD": "HEX-USD",
  "TRON USD": "TRX-USD",
  "SHIBA INU USD": "SHIB-USD",
  "UNUS SED LEO USD": "LEO-USD",
  "Avalanche USD": "AVAX-USD",
  "Polygon USD": "MATIC-USD",
  "yOUcash USD": "YOUC-USD",
  "Uniswap USD": "UNI1-USD",
  "Litecoin USD": "LTC-USD",
  "Lido stETH USD": "STETH-USD",
  "FTX Token USD": "FTT-USD",
  "Chainlink USD": "LINK-USD",
  "Stellar USD": "XLM-USD",
  "Crypto.com Coin USD": "CRO-USD",
  "NEAR Protocol USD	": "NEAR-USD",
  "Algorand USD": "ALGO-USD",
  "Cosmos USD": "ATOM-USD",
  "Monero USD": "XMR-USD",
  "Bitcoin Cash USD": "BCH-USD",
  "Ethereum Classic USD": "ETC-USD",
  "Chain USD": "XCN1-USD",
  "VeChain USD": "VET-USD",
  "Flow USD": "FLOW-USD",
  "Decentraland USD": "MANA-USD",
  "Hedera USD": "HBAR-USD",
  "Internet Computer USD": "ICP-USD",
  "THETA USD": "THETA-USD",
  "Elrond USD": "EGLD-USD",
  "Frax USD": "FRAX-USD",
  "Axie Infinity USD": "AXS-USD",
  "Toncoin USD": "TONCOIN-USD",
  "The Sandbox USD": "SAND-USD",
  "ApeCoin USD": "APE3-USD",
  "Tezos USD": "XTZ-USD",
  "Filecoin USD	": "FIL-USD",
  "Helium USD	": "HNT-USD",
  "Bitcoin SV USD": "BSV-USD",
  "KuCoin Token USD": "KCS-USD",
  "EOS-USD": "EOS USD",
  "Zcash USD": "ZEC-USD",
  "Maker USD": "MKR-USD",
  "Aave USD": "AAVE-USD",
  "IOTA USD": "MIOTA-USD",
  "Huobi Token USD": "HT-USD",
  "eCash USD": "XEC-USD",
  "Neutrino USD USD": "USDN-USD",
  "The Graph USD": "GRT1-USD",
  "OKB USD": "OKB-USD",
  "Liquity USD USD": "LUSD-USD",
  "THORChain USD": "RUNE-USD",
  "Klaytn USD": "KLAY-USD",
  "Fantom USD": "FTM-USD",
  "Waves USD": "WAVES-USD",
  "Neo USD": "NEO-USD",
  "Quant USD": "QNT-USD",
  "Basic Attention Token USD": "BAT-USD",
  "PAX Gold USD": "PAXG-USD",
  "Chiliz USD": "CHZ-USD",
  "Zilliqa USD": "ZIL-USD",
  "BitTorrent USD": "BTT-USD",
  "Loopring USD": "LRC-USD",
  "Dash USD": "DASH-USD",
  "Stacks USD": "STX-USD",
  "DeFiChain USD": "DFI-USD",
  "PancakeSwap USD": "CAKE-USD",
  "Green Metaverse Token USD": "GMT3-USD",
  "Enjin Coin USD": "ENJ-USD",
  "Kusama USD": "KSM-USD",
  "Tether Gold USD": "XAUT-USD",
  "Fruits USD": "FRTS-USD",
  "Curve DAO Token USD": "CRV-USD",
  "Gala USD": "GALA-USD",
  "Celo USD": "CELO-USD",
  "Amp USD": "AMP-USD",
  "Holo USD": "HOT1-USD",
  "Kava USD": "KAVA-USD",
  "1inch Network USD": "1INCH-USD",
  "Nexo USD": "NEXO-USD",
  "NEM USD": "XEM-USD",
  "Storj USD": "STORJ-USD",
  "XDC Network USD": "XDC-USD",
  "Safe USD": "SAFE1-USD",
  "Mina USD": "MINA-USD",
  "WEMIX USD": "WEMIX-USD",
  "Synthetix USD": "SNX-USD",
  "Decred USD": "DCR-USD",
  "Counos X USD": "CCXX-USD",
  "Arweave USD": "AR-USD",
  "GateToken USD": "GT-USD",
  "Kadena USD": "KDA-USD",
  "Qtum USD": "QTUM-USD",
  "Symbol USD": "XYM-USD",
  "Gnosis USD": "GNO-USD",
  "Compound USD": "COMP1-USD",
  "Threshold USD": "T-USD",
  "Bitcoin Gold USD": "BTG-USD",
  "Harmony USD": "ONE1-USD",
  "Convex Finance USD": "CVX-USD",
  "BORA USD": "BORA-USD",
  "Theta Fuel USD": "TFUEL-USD",
  "IOST USD": "IOST-USD",
  "OMG Network USD": "OMG-USD",
  "IoTeX USD": "IOTX-USD",
  "Audius USD": "AUDIO-USD",
  "Oasis Network USD": "ROSE-USD",
  "ICON USD": "ICX-USD",
  "BinaryX USD": "BNX-USD",
  "The Transfer Token USD": "TTT1-USD",
  "BitDAO USD": "BIT1-USD",
  "Kyber Network Crystal v2 USD": "KNC-USD",
  "TitanSwap USD": "TITAN-USD",
  "Ravencoin USD": "RVN-USD",
  "Ankr USD": "ANKR-USD",
  "Celsius USD": "CEL-USD",
  "0x USD": "ZRX-USD",
  "Trust Wallet Token USD": "TWT-USD",
  "NXM USD": "NXM-USD",
  "Osmosis USD": "OSMO-USD",
  "Serum USD": "SRM-USD",
  "Golem USD": "GLM-USD",
  "Terra USD": "LUNA2-USD",
  "WOO Network USD": "WOO-USD",
  "MXC USD": "MXC-USD",
  "LINK USD": "LN-USD",
  "Balancer USD": "BAL-USD",
  "JUST USD": "JST-USD",
  "Livepeer USD": "LPT-USD",
  "Ontology USD": "ONT-USD",
  "Swipe USD": "SXP-USD",
  "Siacoin USD	": "SC-USD",
  "SKALE Network USD": "SKL-USD",
  "WAX USD": "WAXP-USD",
  "yearn.finance USD": "YFI-USD",
  "Moonbeam USD": "GLMR-USD",
  "Immutable X USD": "IMX1-USD",
  "SwissBorg USD": "CHSB-USD",
  "Horizen USD": "ZEN-USD",
  "Ethereum Name Service USD": "ENS-USD",
  "Astar USD": "ASTR-USD",
  "LooksRare USD": "LOOKS-USD",
  "Hive USD": "HIVE-USD",
  "Polymath USD": "POLY-USD"
};

var currencies = {
  "EUR/USD": "EURUSD=X",
  "USD/JPY": "JPY=X",
  "GBP/USD": "GBPUSD=X",
  "AUD/USD": "AUDUSD=X",
  "NZD/USD": "NZDUSD=X",
  "EUR/JPY": "EURJPY=X",
  "GBP/JPY": "GBPJPY=X",
  "EUR/GBP": "EURGBP=X",
  "EUR/CAD": "EURCAD=X",
  "EUR/SEK": "EURSEK=X",
  "EUR/CHF": "EURCHF=X",
  "EUR/HUF": "EURHUF=X",
  "USD/CNY": "CNY=X",
  "USD/HKD": "HKD=X",
  "USD/SGD": "SGD=X",
  "USD/INR": "INR=X",
  "USD/MXN": "MXN=X",
  "USD/PHP": "PHP=X",
  "USD/IDR": "IDR=X",
  "USD/THB": "THB=X",
  "USD/MYR": "IDR=X",
  "USD/ZAR": "ZAR=X",
  "USD/RUB": "RUB=X"
};

var constants = {
  indices: indices,
  commodities: commodities,
  cryptocurrencies: cryptocurrencies,
  currencies: currencies
};

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

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

var Yahoo = /*#__PURE__*/function () {
  function Yahoo(fetcher) {
    this.fetcher = fetcher;
  }

  var _proto = Yahoo.prototype;

  _proto.getTicker = /*#__PURE__*/function () {
    var _getTicker = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ticker, options) {
      var url, _yield$this$fetcher, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = new URL("https://query1.finance.yahoo.com/v7/finance/download/" + ticker);
              Object.entries(options).forEach(function (_ref) {
                var key = _ref[0],
                    value = _ref[1];
                return url.searchParams.set(key, String(value));
              });
              _context.next = 4;
              return this.fetcher({
                url: url.toString(),
                method: 'GET'
              });

            case 4:
              _yield$this$fetcher = _context.sent;
              data = _yield$this$fetcher.data;
              return _context.abrupt("return", data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getTicker(_x, _x2) {
      return _getTicker.apply(this, arguments);
    }

    return getTicker;
  }();

  return Yahoo;
}();

var regions = ['HK', 'HU', 'MX', 'SG', 'JP', 'BR', 'IT', 'KR', 'TR', 'RO', 'CN', 'PL', 'PT', 'ID', 'SE', 'LU', 'FI', 'DE', 'AU', 'RU', 'IE', 'ZA', 'GB', 'IN', 'NL', 'CH', 'ES', 'CZ', 'FR', 'EA', 'NO', 'AT', 'CY', 'GR', 'DK', 'CA', 'US', 'NZ', 'BE'];

var ForexClub = /*#__PURE__*/function () {
  function ForexClub(fetcher) {
    this.fetcher = fetcher;
  }

  var _proto = ForexClub.prototype;

  _proto.getRegions = function getRegions() {
    return regions;
  };

  _proto.getCalendar = /*#__PURE__*/function () {
    var _getCalendar = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(options) {
      var url, _yield$this$fetcher, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = new URL('https://economcalendar.fxclub.org/api/events/');
              Object.entries(options).forEach(function (_ref) {
                var key = _ref[0],
                    value = _ref[1];
                return url.searchParams.set(key, value);
              });
              _context.next = 4;
              return this.fetcher({
                url: url.toString(),
                method: 'GET'
              });

            case 4:
              _yield$this$fetcher = _context.sent;
              data = _yield$this$fetcher.data;
              return _context.abrupt("return", data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getCalendar(_x) {
      return _getCalendar.apply(this, arguments);
    }

    return getCalendar;
  }();

  return ForexClub;
}();

export { Converter, ForexClub, Yahoo, constants, fetch };
//# sourceMappingURL=data-layer.esm.js.map
