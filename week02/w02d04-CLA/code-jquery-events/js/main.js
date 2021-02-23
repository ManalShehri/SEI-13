// https://upload.wikimedia.org/wikipedia/commons/1/1a/Riyadh%2C_Saudi_Arabia_%282048x1367%29_%2836864830374%29.jpg
// https://pbs.twimg.com/media/ES7zhiXXkAA00nt.jpg
//
// https://i0.wp.com/www.regulatedforexksa.com/wp-content/uploads/2020/07/%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9-%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D9%85-%D8%A7%D9%81%D8%B6%D9%84-%D8%B4%D8%B1%D9%83%D8%A9-%D9%88%D8%B3%D8%A7%D8%B7%D8%A9-%D9%85%D8%A7%D9%84%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9-.jpg

$("li>a").on("click", (evt) => {
  evt.preventDefault();
  const text = evt.target.innerText;
  console.log("you clicked on  " + evt.target.innerText);
  $("section.box-2").removeClass("awesome");
});

const sectionsAwesome = $("section.box-2");
sectionsAwesome.first().on("click", (evt) => {
  sectionsAwesome.addClass("awesome");
});

/* $(document).ready(() => {
  console.log("Document READY!");
  window.setTimeout(() => {
    $("li.hidden").removeClass("hidden");
  }, 3000);
}); */

$("select").change((data) => {
  $(`#${data.target.value}`).toggleClass("hidden");
});

console.log("JS working");
