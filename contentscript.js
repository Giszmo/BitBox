var regex = /1../gi;
matches = document.body.innerText.match(regex);
if (matches) {
  for(i=0; i<matches.length; i++ ) {
    console.log("hi " + matches[i]);
  }
  // mess with the page:
  $("p").hide({"duration":4000});
  // document.body.style.backgroundColor="red";
}