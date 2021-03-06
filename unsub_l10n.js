/*! @source http://purl.eligrey.com/github/l10n.js/blob/master/l10n.js*/
!function(){"use strict";var t,e,n="undefined",r="string",i=self.navigator,o=String,a=Object.prototype.hasOwnProperty,l={},c={},u=!1,f=!0,s=/^\s*application\/(?:vnd\.oftn\.|x-)?l10n\+json\s*(?:$|;)/i,p="locale",h="defaultLocale",g="toLocaleString",y="toLowerCase",v=Array.prototype.indexOf||function(t){for(var e=this.length,n=0;e>n;n++)if(n in this&&this[n]===t)return n;return-1},d=function(e){var n=new t,r={};n.open("GET",e,u),n.send(null);try{r=JSON.parse(n.responseText)}catch(i){setTimeout(function(){var t=new Error("Unable to load localization data: "+e);throw t.name="Localization Error",t},0)}return r},w=o[g]=function(t){if(arguments.length>0&&"number"!=typeof t)if(typeof t===r)w(d(t));else if(t===u)c={};else{var e,n,i;for(e in t)if(a.call(t,e)){if(n=t[e],e=e[y](),e in c&&n!==u||(c[e]={}),n===u)continue;if(typeof n===r){if(0!==o[p][y]().indexOf(e)){e in l||(l[e]=[]),l[e].push(n);continue}n=d(n)}for(i in n)a.call(n,i)&&(c[e][i]=n[i])}}return Function.prototype[g].apply(o,arguments)},b=function(t){for(var e,n=l[t],r=0,i=n.length;i>r;r++)e={},e[t]=d(n[r]),w(e);delete l[t]},L=o.prototype[g]=function(){var t,n=e,r=o[n?h:p],i=r[y]().split("-"),a=i.length,s=this.valueOf();e=u;do if(t=i.slice(0,a).join("-"),t in l&&b(t),t in c&&s in c[t])return c[t][s];while(a--);return!n&&o[h]?(e=f,L.call(s)):s};if(typeof XMLHttpRequest===n&&typeof ActiveXObject!==n){var m=ActiveXObject;t=function(){try{return new m("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new m("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new m("Msxml2.XMLHTTP")}catch(n){}throw new Error("XMLHttpRequest not supported by this browser.")}}else t=XMLHttpRequest;if(o[h]=o[h]||"",o[p]=i&&(i.language||i.userLanguage)||"",typeof document!==n)for(var T,M=document.getElementsByTagName("link"),O=M.length;O--;){var X=M[O],x=(X.getAttribute("rel")||"")[y]().split(/\s+/);s.test(X.type)&&(-1!==v.call(x,"localizations")?w(X.getAttribute("href")):-1!==v.call(x,"localization")&&(T={},T[(X.getAttribute("hreflang")||"")[y]()]=X.getAttribute("href"),w(T)))}}();

$(function() {
  String.toLocaleString({
    "fr": {
      "Update preferences for":     "Mettre à jour les préférences pour",
      "Unsubscribe from":           "Se désabonner de",
      "Unsubscribe from all":       "Se désabonner de tout",
      "has been unsubscribed from": "a été désabonné de",
      "all marketing emails":       "tous les emails de marketing",
    }
  });

  $(".localizable").each(function () {
    $(this).html($(this).html().toLocaleString());
  });
});