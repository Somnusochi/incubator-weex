define('@weex-component/repeat-track-by', function (require, exports, module) {

;
  module.exports = {
    data: function () {return {
      titlelist: [
        {text: 'Hello World1'},
        {text: 'Hello World2'}
      ]
    }}
  }


;module.exports.style = {
  "title": {
    "fontSize": 26,
    "color": "#FF0000"
  }
}

;module.exports.template = {
  "type": "container",
  "children": [
    {
      "type": "text",
      "repeat": {
        expression: function() { return this.titlelist },
        key: 'index',
        value: 'title'
      },
      "classList": [
        "title"
      ],
      "attr": {
        "trackBy": "text",
        "value": function () {return this.index + ': ' + this.title.text}
      }
    }
  ]
}

;})

// require module

bootstrap('@weex-component/repeat-track-by')
