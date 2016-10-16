'use strict';

var Koa = require('koa');
var ld = require('lodash');

var info = Object.assign(ld.pick(require('../package'), ['name', 'version']), {
  NODE_ENV: process.env.NODE_ENV
});

var app = new Koa();

app.use(function (ctx) {
  var method = ctx.method;
  var url = ctx.url;

  if (method !== 'GET') {
    return;
  }

  switch (url) {
    case '/healthz':
      ctx.body = info;
  }
});

module.exports = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWFsdGguanMiXSwibmFtZXMiOlsiS29hIiwicmVxdWlyZSIsImxkIiwiaW5mbyIsIk9iamVjdCIsImFzc2lnbiIsInBpY2siLCJOT0RFX0VOViIsInByb2Nlc3MiLCJlbnYiLCJhcHAiLCJ1c2UiLCJtZXRob2QiLCJjdHgiLCJ1cmwiLCJib2R5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxNQUFNQyxRQUFRLEtBQVIsQ0FBWjtBQUNBLElBQU1DLEtBQUtELFFBQVEsUUFBUixDQUFYOztBQUVBLElBQU1FLE9BQU9DLE9BQU9DLE1BQVAsQ0FBY0gsR0FBR0ksSUFBSCxDQUFRTCxRQUFRLFlBQVIsQ0FBUixFQUErQixDQUFDLE1BQUQsRUFBUyxTQUFULENBQS9CLENBQWQsRUFBbUU7QUFDOUVNLFlBQVVDLFFBQVFDLEdBQVIsQ0FBWUY7QUFEd0QsQ0FBbkUsQ0FBYjs7QUFJQSxJQUFNRyxNQUFNLElBQUlWLEdBQUosRUFBWjs7QUFFQVUsSUFBSUMsR0FBSixDQUFRLGVBQU87QUFBQSxNQUNMQyxNQURLLEdBQ1dDLEdBRFgsQ0FDTEQsTUFESztBQUFBLE1BQ0dFLEdBREgsR0FDV0QsR0FEWCxDQUNHQyxHQURIOztBQUViLE1BQUlGLFdBQVcsS0FBZixFQUFzQjtBQUFFO0FBQVE7O0FBRWhDLFVBQVFFLEdBQVI7QUFDRSxTQUFLLFVBQUw7QUFDRUQsVUFBSUUsSUFBSixHQUFXWixJQUFYO0FBRko7QUFJRCxDQVJEOztBQVVBYSxPQUFPQyxPQUFQLEdBQWlCUCxHQUFqQiIsImZpbGUiOiJoZWFsdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBLb2EgPSByZXF1aXJlKCdrb2EnKVxuY29uc3QgbGQgPSByZXF1aXJlKCdsb2Rhc2gnKVxuXG5jb25zdCBpbmZvID0gT2JqZWN0LmFzc2lnbihsZC5waWNrKHJlcXVpcmUoJy4uL3BhY2thZ2UnKSwgWyduYW1lJywgJ3ZlcnNpb24nXSksIHtcbiAgTk9ERV9FTlY6IHByb2Nlc3MuZW52Lk5PREVfRU5WXG59KVxuXG5jb25zdCBhcHAgPSBuZXcgS29hKClcblxuYXBwLnVzZShjdHggPT4ge1xuICBjb25zdCB7IG1ldGhvZCwgdXJsIH0gPSBjdHhcbiAgaWYgKG1ldGhvZCAhPT0gJ0dFVCcpIHsgcmV0dXJuIH1cblxuICBzd2l0Y2ggKHVybCkge1xuICAgIGNhc2UgJy9oZWFsdGh6JzpcbiAgICAgIGN0eC5ib2R5ID0gaW5mb1xuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcFxuIl19