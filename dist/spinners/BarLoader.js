(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'domkit/appendVendorPrefix', 'domkit/insertKeyframesRule', '../helpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('domkit/appendVendorPrefix'), require('domkit/insertKeyframesRule'), require('../helpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.appendVendorPrefix, global.insertKeyframesRule, global.helpers);
    global.BarLoader = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _appendVendorPrefix, _insertKeyframesRule, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _appendVendorPrefix2 = _interopRequireDefault(_appendVendorPrefix);

  var _insertKeyframesRule2 = _interopRequireDefault(_insertKeyframesRule);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  /**
   * @type {object}
   */
  var keyframesLong = {
    '0%': {
      left: '-35%',
      right: '100%'
    },
    '60%': {
      left: '100%',
      right: '-90%'
    },
    '100%': {
      left: '100%',
      right: '-90%'
    }

    /**
     * @type {object}
     */
  };var keyframesShort = {
    '0%': {
      left: '-200%',
      right: '100%'
    },
    '60%': {
      left: '107%',
      right: '-8%'
    },
    '100%': {
      left: '107%',
      right: '-8%'
    }

    /**
     * @type {string}
     */
  };var animationNameLong = (0, _insertKeyframesRule2.default)(keyframesLong);

  /**
   * @type {string}
   */
  var animationNameShort = (0, _insertKeyframesRule2.default)(keyframesShort);

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      _classCallCheck(this, Loader);

      return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
    }

    _createClass(Loader, [{
      key: 'getLineStyle',
      value: function getLineStyle() {
        return {
          position: 'absolute',
          height: this.props.height,
          display: 'block',
          backgroundColor: this.props.color,
          borderRadius: 2,
          backgroundClip: 'padding-box',
          overflow: 'hidden',
          willChange: 'left right'
        };
      }
    }, {
      key: 'getAnimationStyle',
      value: function getAnimationStyle(i) {
        var animation = void 0;
        var animationFillMode = 'forwards';

        if (i === 1) {
          animation = [animationNameLong, '2.1s', 'cubic-bezier(0.65, 0.815, 0.735, 0.395)', 'infinite'].join(' ');
        } else if (i === 2) {
          animation = [animationNameShort, '2.1s', '1.15s', 'cubic-bezier(0.165, 0.84, 0.44, 1)', 'infinite'].join(' ');
        }

        return {
          animation: animation,
          animationFillMode: animationFillMode
        };
      }
    }, {
      key: 'getStyle',
      value: function getStyle(i) {
        if (i === 0) {
          var color = this.props.color;


          return {
            position: 'relative',
            height: this.props.height,
            width: this.props.width,
            overflow: 'hidden',
            backgroundColor: (0, _helpers.calculateRgba)(color, 0.2),
            backgroundClip: 'padding-box'
          };
        }

        return (0, _appendVendorPrefix2.default)(this.getLineStyle(i), this.getAnimationStyle(i));
      }
    }, {
      key: 'renderLoader',
      value: function renderLoader(loading) {
        if (loading) {
          return _react2.default.createElement(
            'div',
            { id: this.props.id, className: this.props.className },
            _react2.default.createElement(
              'div',
              { style: this.getStyle(0) },
              _react2.default.createElement('div', { style: this.getStyle(1) }),
              _react2.default.createElement('div', { style: this.getStyle(2) })
            )
          );
        }

        return null;
      }
    }, {
      key: 'render',
      value: function render() {
        return this.renderLoader(this.props.loading);
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  /**
   * @type {object}
   */
  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number

    /**
     * @type {object}
     */
  };Loader.defaultProps = {
    loading: true,
    color: '#000000',
    width: 100,
    height: 4
  };

  exports.default = Loader;
});