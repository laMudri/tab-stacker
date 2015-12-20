var tabs = require('sdk/tabs');
var timers = require('sdk/timers');
var timeout = -1;

tabs.on('activate', () => {
  timers.clearTimeout(timeout);
  if (!tabs.activeTab.isPinned)
    timeout = timers.setTimeout(() => {
      let newIndex = 0;
      for (let tab in tabs)
        if (tab.isPinned)
          newIndex++;
      tabs.activeTab.index = newIndex;
    }, 1000);
});

exports.onUnload = (reason) => { timers.clearTimeout(timeout); }
