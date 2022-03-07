/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/cookie",["./_base/kernel","./regexp"],function(d,k){d.cookie=function(g,e,b){var a=document.cookie;if(1==arguments.length)var f=(f=a.match(new RegExp("(?:^|; )"+k.escapeString(g)+"\x3d([^;]*)")))?decodeURIComponent(f[1]):void 0;else{b=b||{};a=b.expires;if("number"==typeof a){var c=new Date;c.setTime(c.getTime()+864E5*a);a=b.expires=c}a&&a.toUTCString&&(b.expires=a.toUTCString());e=encodeURIComponent(e);a=g+"\x3d"+e;for(var h in b)a+="; "+h,c=b[h],!0!==c&&(a+="\x3d"+c);document.cookie=
a}return f};d.cookie.isSupported=function(){"cookieEnabled"in navigator||(this("__djCookieTest__","CookiesAllowed"),navigator.cookieEnabled="CookiesAllowed"==this("__djCookieTest__"),navigator.cookieEnabled&&this("__djCookieTest__","",{expires:-1}));return navigator.cookieEnabled};return d.cookie});