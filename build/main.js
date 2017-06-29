require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var _require = __webpack_require__(1),
    join = _require.join,
    resolve = _require.resolve;

var fs = __webpack_require__(11);
var webpack = __webpack_require__(25);
var content = fs.readFileSync(resolve('./assets/js/rem.js'), 'utf8');

module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    middleware: 'check-auth'
  },
  head: {
    title: 'love394',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{
      innerHTML: content
    }],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Global CSS
  */
  css: [{
    src: resolve('./assets/css/variable.styl'),
    lang: 'stylus'
  }, {
    src: resolve('./assets/css/main.styl'),
    lang: 'stylus' // 指定 scss 而非 sass
  }],
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#ffaca8'
  },
  build: {
    module: {
      rules: [{
        // 在页面中加载图片示例：var imgstr = require("./imgs/3.png")
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [{
          loader: 'url-loader',
          query: {
            limit: 8192,
            name: 'images/[name].[hash].[ext]'
          }
        }]
      }, {
        test: /\.html$/,
        use: ['html-loader']
      }, {
        test: /\.(pug|jade)$/,
        use: ['pug-loader']
      }, {
        // 编译es6
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }]
    },
    vendor: ['axios'],
    postcss: [__webpack_require__(20)({ remUnit: 46.875 })]
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__db_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_mongo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_mongo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_mongo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_bodyparser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_session2__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_session2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_koa_session2__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ exports["a"] = function (app, nuxt) {
  var _this = this;

  var router = new __WEBPACK_IMPORTED_MODULE_2_koa_router___default.a();

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */])(router);

  app.use(__WEBPACK_IMPORTED_MODULE_7_koa_session2___default()({
    key: "SESSIONID"
  }));

  app.use(__WEBPACK_IMPORTED_MODULE_5_koa_mongo___default()({
    user: __WEBPACK_IMPORTED_MODULE_4__db_auth__["a" /* default */].username,
    pass: __WEBPACK_IMPORTED_MODULE_4__db_auth__["a" /* default */].password,
    host: '127.0.0.1',
    port: 27017,
    db: 'member'
  })).use(__WEBPACK_IMPORTED_MODULE_6_koa_bodyparser___default()()).use(router.routes()).use(router.allowedMethods()).use(function () {
    var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ctx.status = 200; // koa defaults to 404 when it sees that status is unset
              _context.next = 3;
              return nuxt.render(ctx.req, ctx.res);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(8);


/* harmony default export */ exports["a"] = function (router) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__member__["a" /* default */])(router);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */])(router);
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongodb__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongodb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongodb__);
/* unused harmony export add */
/* unused harmony export remove */
/* unused harmony export findOne */
/* unused harmony export findAll */
/* unused harmony export editAll */
/* unused harmony export edit */


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var ERRORS = {
  SUCCESS: {
    errno: 0,
    errmsg: 'success'
  },
  MEMBER_ENROLLED: {
    errno: 10001,
    errmsg: '您已报过名'
  },
  MEMBER_NOT_EXIST: {
    errno: 10002,
    errmsg: '您非本班成员，无法报名'
  },
  MEMBER_PAYED: {
    errno: 10003,
    errmsg: '您已交费'
  }
};

/* harmony default export */ exports["a"] = function (router) {
  router.post('/api/member/add', add);
  router.post('/api/member/edit', edit);
  router.post('/api/member/remove', remove);
  router.get('/api/member/list', findAll);
  router.post('/api/member/list', editAll);
};

var add = function () {
  var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var req, query, exits, member, result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = ctx.request.body;
            query = { name: req.name };
            _context.next = 4;
            return ctx.mongo.db('member').collection('member').find(query).toArray();

          case 4:
            exits = _context.sent;

            if (!exits.length) {
              _context.next = 9;
              break;
            }

            ctx.body = {
              errno: 10001,
              errmsg: 'Member exits.'
            };
            _context.next = 14;
            break;

          case 9:
            member = {
              name: req.name || '',
              phone: req.phone || '',
              is_payed: req.is_payed || 0,
              is_enrolled: req.is_enrolled || 0,
              enrolled_time: +new Date(),
              pay_time: +new Date()
            };
            _context.next = 12;
            return ctx.mongo.db('member').collection('member').insert(member);

          case 12:
            result = _context.sent;

            ctx.body = {
              errno: 0,
              errmsg: 'success'
            };

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function add(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var remove = function () {
  var _ref2 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var query, result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = ctx.request.body || {};

            query._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mongodb__["ObjectId"])(query._id);
            _context2.prev = 2;
            _context2.next = 5;
            return ctx.mongo.db('member').collection('member').deleteOne(query);

          case 5:
            result = _context2.sent;

            if (result.result.ok) {
              responseError(ctx, 'SUCCESS');
            }
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](2);

            console.log(_context2.t0);

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 9]]);
  }));

  return function remove(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var findOne = function () {
  var _ref3 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    var query;
    return __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            query = ctx.request.body || {};

            query._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mongodb__["ObjectId"])(query._id);
            _context3.next = 4;
            return ctx.mongo.db('member').collection('member').find(query).toArray();

          case 4:
            ctx.body = _context3.sent;

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function findOne(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var findAll = function () {
  var _ref4 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
    var query;
    return __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            query = ctx.request.body || {};
            _context4.next = 3;
            return ctx.mongo.db('member').collection('member').find(query).toArray();

          case 3:
            ctx.body = _context4.sent;

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function findAll(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var editAll = function () {
  var _ref5 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
    var req, list, i, query, update, result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            req = ctx.request.body;
            list = req.data || [];
            _context5.prev = 2;
            i = 0;

          case 4:
            if (!(i < list.length)) {
              _context5.next = 13;
              break;
            }

            query = {
              _id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mongodb__["ObjectId"])(list[i]._id)
            };
            update = {
              '$set': {
                name: list[i].name,
                phone: list[i].phone,
                is_payed: list[i].is_payed,
                is_enrolled: list[i].is_enrolled,
                enrolled_time: list[i].enrolled_time,
                pay_time: list[i].pay_time
              }
            };
            _context5.next = 9;
            return ctx.mongo.db('member').collection('member').update(query, update, { upsert: true });

          case 9:
            result = _context5.sent;

          case 10:
            i++;
            _context5.next = 4;
            break;

          case 13:
            responseError(ctx, 'SUCCESS');
            _context5.next = 19;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5['catch'](2);

            console.log(_context5.t0);

          case 19:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[2, 16]]);
  }));

  return function editAll(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var edit = function () {
  var _ref6 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx, next) {
    var req, keys, query, update, exist, result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            req = ctx.request.body;
            keys = Object.keys(req);
            query = {
              _id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mongodb__["ObjectId"])(req.id)
            };
            update = {};
            _context6.next = 6;
            return ctx.mongo.db('member').collection('member').find(query).toArray();

          case 6:
            exist = _context6.sent;

            if (!exist.length) {
              _context6.next = 11;
              break;
            }

            if (req.is_enrolled && exist[0].is_enrolled) {
              responseError(ctx, 'MEMBER_ENROLLED');
            } else if (req.is_payed && exist[0].is_payed) {
              responseError(ctx, 'MEMBER_PAYED');
            }
            _context6.next = 22;
            break;

          case 11:
            keys.forEach(function (item) {
              if (!update['$set']) {
                update['$set'] = {};
              }
              update['$set'][item] = req[item];
            });
            _context6.prev = 12;
            _context6.next = 15;
            return ctx.mongo.db('member').collection('member').updateOne(query, update);

          case 15:
            result = _context6.sent;

            if (result.result.ok) {
              responseError(ctx, 'SUCCESS');
            }
            _context6.next = 22;
            break;

          case 19:
            _context6.prev = 19;
            _context6.t0 = _context6['catch'](12);

            console.log(_context6.t0);

          case 22:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this, [[12, 19]]);
  }));

  return function edit(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

function responseError(ctx, type) {
  ctx.body = {
    errno: ERRORS[type].errno,
    errmsg: ERRORS[type].errmsg
  };
}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_objectid_to_timestamp__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_objectid_to_timestamp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_objectid_to_timestamp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sha1__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sha1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sha1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_url__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token__ = __webpack_require__(10);


var signup = function () {
  var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var req, existName, existEmail, now, user, result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = ctx.method === 'GET' ? __WEBPACK_IMPORTED_MODULE_4_url___default.a.parse(ctx.request.url, true).query : ctx.request.body;
            _context.next = 3;
            return ctx.mongo.db('member').collection('user').find({ username: req.username || '' }).toArray();

          case 3:
            existName = _context.sent;
            _context.next = 6;
            return ctx.mongo.db('member').collection('user').find({ email: req.email || '' }).toArray();

          case 6:
            existEmail = _context.sent;

            if (!existName.length) {
              _context.next = 12;
              break;
            }

            ctx.status = 200;
            ctx.body = {
              errno: 10001,
              errmsg: '该姓名已注册'
            };
            _context.next = 24;
            break;

          case 12:
            if (!existEmail.length) {
              _context.next = 17;
              break;
            }

            ctx.status = 200;
            ctx.body = {
              errno: 10002,
              errmsg: '该邮箱已注册'
            };
            _context.next = 24;
            break;

          case 17:
            now = +new Date();
            user = {
              username: req.username,
              email: req.email,
              password: __WEBPACK_IMPORTED_MODULE_3_sha1___default()(req.password), //加密
              token: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__token__["a" /* createToken */])(req.email), //创建token并存入数据库
              create_time: __WEBPACK_IMPORTED_MODULE_1_moment___default()(now).format('YYYY-MM-DD HH:mm:ss')
            };
            _context.next = 21;
            return ctx.mongo.db('member').collection('user').insert(user);

          case 21:
            result = _context.sent;


            ctx.status = 200;
            ctx.body = {
              success: true
            };

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var signin = function () {
  var _ref2 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var req, email, password, userExist, user, token, query, update, result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req = ctx.method === 'GET' ? __WEBPACK_IMPORTED_MODULE_4_url___default.a.parse(ctx.request.url, true).query : ctx.request.body;
            email = req.email;
            password = __WEBPACK_IMPORTED_MODULE_3_sha1___default()(req.password);
            _context2.next = 5;
            return ctx.mongo.db('member').collection('user').find({ email: email }).toArray();

          case 5:
            userExist = _context2.sent;

            if (userExist.length) {
              _context2.next = 11;
              break;
            }

            ctx.status = 200;
            ctx.body = {
              errno: 20001,
              errmsg: '该邮箱未注册'
            };
            _context2.next = 27;
            break;

          case 11:
            user = userExist[0];

            if (!(user.password === password)) {
              _context2.next = 25;
              break;
            }

            //生成一个新的token,并存到数据库
            token = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__token__["a" /* createToken */])(email);
            query = { email: email };
            update = { '$set': user };

            user.token = token;

            _context2.next = 19;
            return ctx.mongo.db('member').collection('user').updateOne(query, update);

          case 19:
            result = _context2.sent;

            ctx.cookies.set('token', token);
            ctx.status = 200;
            ctx.body = {
              errno: 0,
              errmsg: '登录成功',
              email: email,
              token: token //登录成功要创建一个新的token,应该存入数据库
            };
            _context2.next = 27;
            break;

          case 25:
            ctx.status = 200;
            ctx.body = {
              errno: 20002,
              errmsg: '密码错误'
            };

          case 27:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






/* harmony default export */ exports["a"] = function (router) {
  router.all('/api/user/signup', signup);
  router.all('/api/user/signin', signin);
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var auth = {
  "username": "shuiyi",
  "password": "Zyf$394394"
};
var adim = {
  "username": "admin",
  "password": "admin"
};
/* harmony default export */ exports["a"] = auth;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);
/* harmony export (immutable) */ exports["a"] = createToken;
/* unused harmony export checkToken */


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



function createToken(user_email) {
  var token = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.sign({ user_email: user_email }, 'love394', { expiresIn: '720h' });
  return token;
}

var checkToken = function () {
  var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var token, decoded;
    return __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!ctx.request.header['authorization']) {
              _context.next = 11;
              break;
            }

            token = ctx.request.header['authorization'].split(' ')[1];
            decoded = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.decode(token, 'love394');

            if (!(token && decoded.exp <= new Date() / 1000)) {
              _context.next = 8;
              break;
            }

            ctx.status = 401;
            ctx.body = {
              message: 'token过期'
            };
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt('return', next());

          case 9:
            _context.next = 13;
            break;

          case 11:
            ctx.status = 401;
            ctx.body = {
              message: '没有token'
            };

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function checkToken(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("koa-mongo");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("koa-session2");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("moment");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("mongodb");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("objectid-to-timestamp");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("postcss-px2rem");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("querystring");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("sha1");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("url");

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("webpack");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(3);


// Start nuxt.js
var start = function () {
  var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var config, nuxt;
    return __WEBPACK_IMPORTED_MODULE_0__Users_didi_work_Projects_WebstormProjects_love394_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Import and Set Nuxt.js options
            config = __webpack_require__(2);

            config.dev = !(app.env === 'production');
            // Instanciate nuxt.js
            _context.next = 4;
            return new __WEBPACK_IMPORTED_MODULE_2_nuxt___default.a(config);

          case 4:
            nuxt = _context.sent;

            if (!config.dev) {
              _context.next = 15;
              break;
            }

            _context.prev = 6;
            _context.next = 9;
            return nuxt.build();

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 // eslint-disable-line no-console
            = _context['catch'](6);

            console.error(_context.t0);process.exit(1);

          case 15:

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */])(app, nuxt);

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port // eslint-disable-line no-console
            );
          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[6, 11]]);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map