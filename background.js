// Context Menu
chrome.contextMenus.create({
    id: "proposImages-add",
    title: "Add image to ProposImages",
    contexts: ["image"],
})

chrome.contextMenus.onClicked.addListener(function(info) {
    switch (info.menuItemId) {
        case "proposImages-add":
            chrome.tabs.create({ url:"/images.html" }, sendMessageToTab(info));
            break;
    }
})

function sendMessageToTab(info) {
    setTimeout(onCreatedInner, 500);
    function onCreatedInner() {
        chrome.runtime.sendMessage(info.srcUrl)
    }
}

