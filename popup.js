//document.addEventListener("DOMContentLoaded", changeSize, false);
btn.addEventListener("click",changeSize);


function changeSize() {
  const clearBtn = document.getElementById("clear");
  const submitBtn = document.getElementById("submit");
  var textSize = document.getElementById("size").value;
  document.getElementById("sizeOutput").innerHTML = textSize;
  chrome.storage.local.set({key: textSize}, function() {
  console.log('Value is set to ' + textSize);
  });
  const css = '.Mz6pEf {Number of Lines: ' + chosenSize + ' !important;}';
  const tabId = getTabId();
  chrome.scripting.insertCSS(
    {
      target: {tabId: tabId},
      css: css,s
    },
    () => { ... });

  submitBtn.addEventListener("click", () => {
  
  });

   

  clearBtn.addEventListener("click", () => {
    });
}
