/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/DeferredList",["./_base/kernel","./_base/Deferred","./_base/array"],function(c,h,k){c.DeferredList=function(a,d,e,f,t){var l=[];h.call(this);var g=this;0!==a.length||d||this.resolve([0,[]]);var m=0;k.forEach(a,function(q,n){function p(b,r){l[n]=[b,r];m++;m===a.length&&g.resolve(l)}q.then(function(b){d?g.resolve([n,b]):p(!0,b)},function(b){e?g.reject(b):p(!1,b);if(f)return null;throw b;})})};c.DeferredList.prototype=new h;c.DeferredList.prototype.gatherResults=function(a){a=new c.DeferredList(a,
!1,!0,!1);a.addCallback(function(d){var e=[];k.forEach(d,function(f){e.push(f[1])});return e});return a};return c.DeferredList});