console.log('PARENT: ',window.parent);
console.log('OPENER: ', window.opener);
window.parent.postMessage('closeNetverifyIframe', '*');