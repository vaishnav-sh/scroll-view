let currentMode = 0;
chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    status: "on",
  };

  if (currentMode == 0) {
    chrome.tabs.sendMessage(tab.id, msg);
    currentMode++;
  } else if (currentMode == 1) {
    currentMode--;
    msg.status = "off";
    chrome.tabs.sendMessage(tab.id, msg);
  }
}
