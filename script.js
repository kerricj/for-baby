const messages = [
    "hello asawaaaa",
    "this is a small funny ahhh thing for our valentines HAHAHA, YOU LIKE THE IMAGE???",
    "uh ok so this is about it ah HAHAHAH, i just try out something cool and simple okie hehehe",
    "k bye, i love you, i need to go wash my army bags ah"
  ];
  
  let i = 0;
  
  function next() {
    i++;
    if (i < messages.length) {
      document.getElementById("message").innerText = messages[i];
      document.getElementById("photo").src = photos[i];
    }
  }

  const photos = [
    "images/image1.jpeg",
    "images/image2.jpeg",
    "images/image3.jpeg",
    "images/image4.jpeg",
  ];
