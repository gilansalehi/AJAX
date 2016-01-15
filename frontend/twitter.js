var FollowToggle = require("./follow_toggle.js");
var UserSearch = require("./user_search.js");

$(function () {
  $("button.follow-toggle").each(function (i, el) {
    // this === el
    new FollowToggle(this);
    console.log("constructed!");
  });
}());

$(function () {
  $("nav.users-search").each(function (i, el) {
    // this === el
    new UserSearch(this);
    console.log("made search!!");
  });
}());
