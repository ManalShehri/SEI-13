$(document).ready(() => {
  $("button#submit").on("click", addToDo);
});

const addToDo = () => {
  const $inputBox = $("#input-box");
  const todo = $inputBox.val();
  $inputBox.val("");
  const $div = jQuery("<div>").addClass("to-do-item").html(`<h3>${todo}</h3>`);

  const $button = $("<button>").text("COMPLETED");
  $button.appendTo($div);
  $button.on("click", moveToDo);

  $("div#to-do-list").append($div);
};

const moveToDo = (evt) => {
  const $toDoDiv = $(evt.currentTarget).parent();
  const $button = $toDoDiv.children().eq(1);
  $toDoDiv.removeClass("to-do-item").addClass("done-item");
  $button.text("REMOVE");
  $button.on("click", removeToDo);
  $toDoDiv.appendTo($("#completed"));
};

const removeToDo = (evt) => {
  $(evt.currentTarget).parent().remove();
};
