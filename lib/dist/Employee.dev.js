"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employee =
/*#__PURE__*/
function () {
  function Employee(name, id, email) {
    _classCallCheck(this, Employee);

    //constructor for Employee class
    this.name = name; //set name property

    this.id = id; //set id property

    this.email = email; //set email property
  } // getters and setters


  _createClass(Employee, [{
    key: "getName",
    value: function getName() {
      //getter for name
      return this.name; //return name property
    }
  }, {
    key: "getId",
    value: function getId() {
      //getter for id
      return this.id; //return id property
    }
  }, {
    key: "getEmail",
    value: function getEmail() {
      //getter for email
      return this.email; //return email property
    }
  }, {
    key: "getRole",
    value: function getRole() {
      return "Employee";
    }
  }]);

  return Employee;
}();

module.exports = Employee;