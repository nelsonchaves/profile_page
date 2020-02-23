let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("gitName1").innerHTML = gitObject[0].name;
    document.getElementById("gitName2").innerHTML = gitObject[1].name;
    

  }
};

gitHubRequest.open("GET", "https://api.github.com/users/nelsonchaves/repos", true);
gitHubRequest.send();

$(document).ready(function () {
  $(".social-icons li img").hover(
    function () {
      $(this).css({ "width": "75px" });
    },
    function () {
      $(this).css({ "width": "30px" });
    }
  );

});

$(document).ready(function () {
  $(".social-icons li img").hover(function () {
    $(this).css({ "height": "75px" });
  },
    function () {
      $(this).css({ "height": "30px" });
    }
  );

});
