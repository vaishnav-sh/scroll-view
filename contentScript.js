chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if (message.status === "on") {
    const addScrollView = document.createElement("div");
    addScrollView.id = "progress-bar";
    // scroll indicator functionality
    window.onscroll = function () {
      let pos = document.documentElement.scrollTop;
      let calc_height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      let scroll = (pos * 100) / calc_height;
      addScrollView.style.width = scroll + "%";
    };
    document.body.appendChild(addScrollView);
  } else if (message.status === "off") {
    document.getElementById("progress-bar").remove();
  }
}
