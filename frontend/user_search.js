var UserSearch = function(el) {
  this.$el = $(el);
  this.$el.on("input", this.handleInput.bind(this));
};

UserSearch.prototype.handleInput = function (e) {
  e.preventDefault();
  var self = this;
  var $nav = $(e.currentTarget);
  var data = {query: $nav.find(".nav-search-input").val()};
  // {user_id: 3,{ query: 'hi'}}


  $.ajax({
    type: "GET",
    url: "/users/search",
    dataType: "json",
    data: data,
    success: function (data, textStatus, xhr) {

      self.render(data);
    }
  });


  //
};

UserSearch.prototype.render = function (data) {
  var $ul = this.$el.find("ul.users");
  $ul.empty();
  // var parsedData = JSON.parse(data);

};

// success: function (data, statusText, xhr) {
//   var $li = $("<li>");
//   $("<a>")
//     .attr("href", "/posts/" + data.id)
//     .html(data.title)
//     .appendTo($li);
//   $(".posts").prepend($li);
//
//   $title.val("");
//   $body.val("");
// },
module.exports = UserSearch;
