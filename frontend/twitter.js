var FollowToggle = require("./follow_toggle.js");

$(function () {
  $("button.follow-toggle").each(function (i, el) {
    // this === el
    new FollowToggle(this);
    console.log("constructed!");
  });
}());
