var tabs = require('sdk/tabs');
var timers = require('sdk/timers');
var timeout = -1;

tabs.on('activate', function () {
    timers.clearTimeout(timeout);
    if (!tabs.activeTab.isPinned)
        timeout = timers.setTimeout(function () {
            //tabs.activeTab.index = tabs.map(function (t) {
            //    return t.isPinned;
            //}).reduce(function (acc, x) {
            //    return x ? acc + 1 : acc;
            //}, 0);
            let newIndex = 0;
            for (let tab in tabs)
                if (tab.isPinned)
                    newIndex++;
            tabs.activeTab.index = newIndex;
        }, 1000);
});
