
var pageMod = require('sdk/page-mod')
  , self    = require('sdk/self');

pageMod.PageMod({
  include: 'https://steamcommunity.com/linkfilter/*',
  contentScriptWhen: 'start',
  contentScriptFile: self.data.url('steam-linkfilter.js')
});
