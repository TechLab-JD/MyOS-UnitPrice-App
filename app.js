const $=id=>document.getElementById(id);
const u=x=>'$'+(Math.round(x*1000)/1000)+' each';
function up(){
  const a=(+$('up-ap').value)/(+$('up-as').value||1),b=(+$('up-bp').value)/(+$('up-bs').value||1);
  $('up-ar').textContent=isFinite(a)?u(a):'-';$('up-br').textContent=isFinite(b)?u(b):'-';
  if(!isFinite(a)||!isFinite(b)){$('up-win').textContent='Enter both items';return;}
  if(Math.abs(a-b)<1e-9)$('up-win').textContent='Same price per unit';
  else{const lo=Math.min(a,b),hi=Math.max(a,b),pct=Math.round((hi-lo)/hi*100);
    $('up-win').textContent=(a<b?'Item A':'Item B')+' is cheaper by '+pct+'% per unit';}
}
['up-ap','up-as','up-bp','up-bs'].forEach(id=>$(id).addEventListener('input',up));up();
