// Changes Images class when click on image
//1- Get Id of Clicked Image
var clickedImageId = "";
let actorName = "";
let allImages = Array.from(
  document.querySelectorAll(
    "img#first, img#second, img#third, img#fourth ,img#fifth"
  )
);
function reply_click(clicked_id) {
  allImages = Array.from(
    document.querySelectorAll(
      "img#first, img#second, img#third, img#fourth ,img#fifth"
    )
  );

  clickedImageId = clicked_id;
  //remove all active classes

  allImages.forEach((node) => {
    node.classList.remove("active");
  });
  //add the active class to the selected image
  document.getElementById(clickedImageId).className = "active";
  //change the Title of Actor and Description of it depend on id
  switch (clickedImageId) {
    case "first":
      document.getElementById("actorName").innerHTML = "Millie Bobby Brown";
      document.getElementById("actorDes").innerHTML =
        "Millie Bobby Brown is a British actress and model. In 2018, Brown was featured in the Time 100 list of the world's most influential people, and was appointed as a UNICEF Goodwill Ambassador, the then youngest person selected for this position.";
      break;

    case "second":
      document.getElementById("actorName").innerHTML = "Finn Wolfhard";
      document.getElementById("actorDes").innerHTML =
        "Finn Wolfhard is a Canadian actor and musician. His acting roles include Mike Wheeler in the Netflix series Stranger Things, for which he has won Screen Actors Guild Award for Outstanding Performance by an Ensemble in a Drama Series out of three nominations.";
      break;

    case "third":
      document.getElementById("actorName").innerHTML = "David Harbour";
      document.getElementById("actorDes").innerHTML =
        "David Kenneth Harbour is an American actor. He gained recognition for his portrayal of Jim Hopper in the Netflix science fiction drama series Stranger Things, for which he earned a Critics' Choice Television Award in 2018. For the role, he also received Primetime Emmy Award and Golden Globe Award nominations.";
      break;

      case "fourth":
      document.getElementById("actorName").innerHTML = "Noah Schnapp";
      document.getElementById("actorDes").innerHTML =
        "Noah Cameron Schnapp is a Canadian-American actor. He plays Will Byers in the Netflix science fiction horror streaming television series Stranger Things, for which he won the Screen Actors Guild Award for Outstanding Performance by an Ensemble in a Drama Series with his fellow cast members.";
      break;
      case "fifth":
      document.getElementById("actorName").innerHTML = "Gaten Matarazzo ";
      document.getElementById("actorDes").innerHTML =
        "Gaetano John 'Gaten' Matarazzo III is an American actor. He began his career on the Broadway stage as Benjamin in Priscilla, Queen of the Desert and as Gavroche in Les Misérables.";
      break;
  }
}
