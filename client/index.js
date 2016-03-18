(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("socket.io-client"), require("react-bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "socket.io-client", "react-bootstrap"], factory);
	else if(typeof exports === 'object')
		exports["Chat"] = factory(require("react"), require("socket.io-client"), require("react-bootstrap"));
	else
		root["Chat"] = factory(root["react"], root["socket.io-client"], root["react-bootstrap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Chat = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _socket = __webpack_require__(2);

	var _socket2 = _interopRequireDefault(_socket);

	var _login_block = __webpack_require__(3);

	var _login_block2 = _interopRequireDefault(_login_block);

	var _chat_window = __webpack_require__(4);

	var _chat_window2 = _interopRequireDefault(_chat_window);

	__webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chat = exports.Chat = function (_React$Component) {
	  _inherits(Chat, _React$Component);

	  function Chat(props) {
	    _classCallCheck(this, Chat);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chat).call(this, props));

	    _this.state = {
	      username: null,
	      socket: null,
	      messages: []
	    };
	    _this.connect = _this.connect.bind(_this);
	    _this.login = _this.login.bind(_this);
	    _this.sendMessage = _this.sendMessage.bind(_this);
	    return _this;
	  }

	  _createClass(Chat, [{
	    key: 'connect',
	    value: function connect() {
	      var _this2 = this;

	      var socket = _socket2.default.connect(this.props.url);

	      socket.on('connected', function (_ref) {
	        var messages = _ref.messages;

	        _this2.setState({ messages: messages });
	      });

	      socket.on('messages', function (_ref2) {
	        var messages = _ref2.messages;

	        _this2.setState({ messages: messages });
	      });

	      this.setState({ socket: socket });
	    }
	  }, {
	    key: 'login',
	    value: function login(username) {
	      this.setState({ username: username });
	      this.connect();
	    }
	  }, {
	    key: 'logout',
	    value: function logout() {
	      socket.disconnect();
	      this.setState({
	        username: null,
	        socket: null,
	        messages: []
	      });
	    }
	  }, {
	    key: 'sendMessage',
	    value: function sendMessage(text) {
	      this.state.socket.emit('send', { user: this.state.username, text: text });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var loggedIn = !!this.state.username;
	      return _react2.default.createElement(
	        'div',
	        { className: 'chat-component' },
	        _react2.default.createElement(_chat_window2.default, {
	          sendMessage: this.sendMessage,
	          messages: this.state.messages,
	          logout: this.logout,
	          visible: loggedIn,
	          connected: !!this.state.socket,
	          username: this.state.username }),
	        _react2.default.createElement(_login_block2.default, { visible: loggedIn, login: this.login })
	      );
	    }
	  }]);

	  return Chat;
	}(_react2.default.Component);

	Chat.propTypes = {
	  url: _react2.default.PropTypes.string.isRequired,
	  onConnected: _react2.default.PropTypes.func,
	  onMessage: _react2.default.PropTypes.func,
	  onDisconnected: _react2.default.PropTypes.func
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginBlock = function (_React$Component) {
	  _inherits(LoginBlock, _React$Component);

	  function LoginBlock(props) {
	    _classCallCheck(this, LoginBlock);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginBlock).call(this, props));

	    _this.login = _this.login.bind(_this);
	    return _this;
	  }

	  _createClass(LoginBlock, [{
	    key: 'login',
	    value: function login() {
	      var username = this.refs.input.value.trim();
	      if (username) {
	        this.refs.input.value = '';
	        this.props.login(username);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var visibilityClass = this.props.visible ? 'hide' : '';
	      return _react2.default.createElement(
	        'div',
	        { className: 'login-block-component ' + visibilityClass },
	        _react2.default.createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Sign in to continue'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-8 col-md-offset-2' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-group' },
	                _react2.default.createElement(
	                  'label',
	                  null,
	                  'Username'
	                ),
	                _react2.default.createElement('input', { ref: 'input', type: 'text', className: 'form-control', autofocus: true })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-footer clearfix' },
	            _react2.default.createElement(
	              'button',
	              { onClick: this.login, className: 'btn btn-success btn-sm pull-right' },
	              'Ok'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return LoginBlock;
	}(_react2.default.Component);

	LoginBlock.propTypes = {
	  login: _react2.default.PropTypes.func.isRequired
	};

	exports.default = LoginBlock;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _menu_bar = __webpack_require__(5);

	var _menu_bar2 = _interopRequireDefault(_menu_bar);

	var _messages_container = __webpack_require__(7);

	var _messages_container2 = _interopRequireDefault(_messages_container);

	var _message_input = __webpack_require__(9);

	var _message_input2 = _interopRequireDefault(_message_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChatWindow = function (_React$Component) {
	  _inherits(ChatWindow, _React$Component);

	  function ChatWindow() {
	    _classCallCheck(this, ChatWindow);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChatWindow).apply(this, arguments));
	  }

	  _createClass(ChatWindow, [{
	    key: 'render',
	    value: function render() {
	      var visibilityClass = this.props.visible ? '' : 'hide';
	      return _react2.default.createElement(
	        'div',
	        { className: 'chat-window-component ' + visibilityClass },
	        _react2.default.createElement(
	          'div',
	          { className: 'panel panel-primary' },
	          _react2.default.createElement(_menu_bar2.default, { logout: this.props.logout }),
	          _react2.default.createElement(_messages_container2.default, { username: this.props.username, messages: this.props.messages }),
	          _react2.default.createElement(_message_input2.default, { disabled: !this.props.connected, send: this.props.sendMessage })
	        )
	      );
	    }
	  }]);

	  return ChatWindow;
	}(_react2.default.Component);

	ChatWindow.propTypes = {
	  messages: _react2.default.PropTypes.array.isRequired,
	  sendMessage: _react2.default.PropTypes.func.isRequired
	};

	exports.default = ChatWindow;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

	var _reactBootstrap2 = _interopRequireDefault(_reactBootstrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuBar = function (_React$Component) {
	  _inherits(MenuBar, _React$Component);

	  function MenuBar() {
	    _classCallCheck(this, MenuBar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MenuBar).apply(this, arguments));
	  }

	  _createClass(MenuBar, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'panel-heading clearfix menu-bar-component' },
	        _react2.default.createElement(
	          'div',
	          { className: 'panel-title' },
	          _react2.default.createElement(
	            'strong',
	            null,
	            'Chat'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.DropdownButton,
	            { id: 'menu', title: ' ', bsStyle: 'primary', bsSize: 'xsmall' },
	            _react2.default.createElement(
	              _reactBootstrap.MenuItem,
	              { onClick: this.props.logout },
	              _react2.default.createElement('i', { className: 'glyphicon glyphicon-off' }),
	              ' Logout'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return MenuBar;
	}(_react2.default.Component);

	MenuBar.propTypes = {
	  logout: _react2.default.PropTypes.func.isRequired
	};

	exports.default = MenuBar;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _message = __webpack_require__(8);

	var _message2 = _interopRequireDefault(_message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MessagesContainer = function (_React$Component) {
	  _inherits(MessagesContainer, _React$Component);

	  function MessagesContainer() {
	    _classCallCheck(this, MessagesContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MessagesContainer).apply(this, arguments));
	  }

	  _createClass(MessagesContainer, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var messages = this.props.messages.map(function (m, i) {
	        return _react2.default.createElement(_message2.default, { username: _this2.props.username, key: i, user: m.user, text: m.text });
	      });
	      return _react2.default.createElement(
	        'div',
	        { className: 'panel-body messages-container' },
	        _react2.default.createElement(
	          'ul',
	          null,
	          messages
	        )
	      );
	    }
	  }]);

	  return MessagesContainer;
	}(_react2.default.Component);

	exports.default = MessagesContainer;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Message = function (_React$Component) {
	  _inherits(Message, _React$Component);

	  function Message() {
	    _classCallCheck(this, Message);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Message).apply(this, arguments));
	  }

	  _createClass(Message, [{
	    key: 'render',
	    value: function render() {
	      var messageClass = this.props.username == this.props.user ? 'alert-warning own message' : 'alert-info message';
	      return _react2.default.createElement(
	        'li',
	        { className: 'clearfix', key: this.props.key },
	        _react2.default.createElement(
	          'div',
	          { className: 'alert ' + messageClass },
	          _react2.default.createElement(
	            'strong',
	            null,
	            this.props.user,
	            ':'
	          ),
	          ' ',
	          this.props.text
	        )
	      );
	    }
	  }]);

	  return Message;
	}(_react2.default.Component);

	exports.default = Message;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MessageInput = function (_React$Component) {
	  _inherits(MessageInput, _React$Component);

	  function MessageInput(props) {
	    _classCallCheck(this, MessageInput);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MessageInput).call(this, props));

	    _this.onSend = _this.onSend.bind(_this);
	    return _this;
	  }

	  _createClass(MessageInput, [{
	    key: 'onSend',
	    value: function onSend(e) {
	      e.preventDefault();
	      var text = this.refs.input.value.trim();
	      if (text) {
	        this.props.send(text);
	        this.refs.input.value = '';
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'panel-footer' },
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.onSend },
	          _react2.default.createElement(
	            'div',
	            { className: 'input-group' },
	            _react2.default.createElement('input', { ref: 'input', type: 'text', className: 'form-control', placeholder: 'Type your message...' }),
	            _react2.default.createElement(
	              'span',
	              { className: 'input-group-btn' },
	              _react2.default.createElement(
	                'button',
	                _defineProperty({
	                  type: 'submit',
	                  disabled: this.props.disabled,
	                  className: 'btn btn-default' }, 'type', 'button'),
	                'Send!'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return MessageInput;
	}(_react2.default.Component);

	MessageInput.propTypes = {
	  send: _react2.default.PropTypes.func.isRequired
	};

	exports.default = MessageInput;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, ".chat-component {\n  min-height: 400px; }\n  .chat-component .clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .chat-component .hide {\n    display: none; }\n  .chat-component .chat-window-component .messages-container {\n    min-height: 200px; }\n    .chat-component .chat-window-component .messages-container ul {\n      list-style: none;\n      padding-left: 0; }\n  .chat-component .chat-window-component .message {\n    padding: 4px 15px;\n    max-width: 60%;\n    float: right;\n    word-wrap: break-word; }\n  .chat-component .chat-window-component .message.own {\n    float: left; }\n  .chat-component .chat-window-component .menu-bar-component .dropdown {\n    float: right; }\n  .chat-component .chat-window-component .menu-bar-component .dropdown-menu {\n    right: 0;\n    left: auto; }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;