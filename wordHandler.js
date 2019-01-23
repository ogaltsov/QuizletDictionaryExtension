

function onClickFunction(info, tab) {
  console.log("Word to translate: " + info.selectionText);

  //request to translate api

  //user choose determine term

  //request to dictionary api for description of termin

  //request to qAPI for our titles

  //user choose title

  sendToDictionary(info, tab);
}

//add tab to context menu
  var context = "selection";
  var title = "Add to dictionary";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": onClickFunction});


function sendToDictionary (info, tab) {
  var body = "title=" + info.selectionText;

  var xhr = new XMLHttpRequest(); 
  
  xhr.onreadystatechange = function() {
    //...
  }
  xhr.open("POST", "https://api.quizlet.com/2.0/sets", true);
  xhr.setRequestHeader("Authorization", "Basic " + btoa(user + ":" + password)); //creds are undefined yet

  xhr.send(body);
}

