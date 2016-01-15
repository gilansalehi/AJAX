var FollowToggle = function(el) {
  this.$el = $(el);
  this.userid = this.$el.attr("data-userid"); //lookup $().data
  this.followState = this.$el.attr("data-follow-state");
  this.url = "/users/" + this.userid + "/follow";
  this.$el.on("click", this.handleClick.bind(this));
  this.render();
};

FollowToggle.prototype.render = function () {
  var text;
  if (this.followState === "true") {
    text = "Unfollow!";
  } else if (this.followState === "false") {
    text = "Follow!";
  }
  this.$el.html(text);
};

FollowToggle.prototype.handleClick = function (e) {
  // debugger;
  e.preventDefault();
  var self = this;
  if (this.followState === "false") {

    var $button = $(e.currentTarget); // amend
    // var data = $button.serializeJSON();

    $.ajax({
      type: "POST",
      url: self.url,
      dataType: "json",
      // data: data,
      success: function () {
        // debugger
        self.$el.attr("data-follow-state", "true");
        self.followState = "true";
        self.render();
      },
    });
  } else if (this.followState === "true") {

    // $button = $(e.currentTarget);
    // var data = $button.serializeJSON();

    $.ajax({
      type: "DELETE",
      url: self.url,
      // data: data,
      dataType: "json",
      success: function () {
        self.$el.attr("data-follow-state", "false");
        self.followState = "false";
        self.render();
      },
    });
  }
};


module.exports = FollowToggle;
