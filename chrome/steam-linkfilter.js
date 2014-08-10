/* trim the "?url=" part of the url */
var RedirectURI = window.location.search.substr(5);

/* redirect and unescape the RedirectURI */
document.location = unescape(RedirectURI);
