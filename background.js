"use strict";

chrome.commands.onCommand.addListener(cmd => {
  if(cmd === "focus-text-box") {
    chrome.tabs.executeScript({
      file: "inject.js",
      matchAboutBlank: true,
      runAt: "document_start"
    });
  }
});