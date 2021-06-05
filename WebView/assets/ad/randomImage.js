let imglist = [];
for(let i=1;i<=14;i++)
    imglist.push(i);
console.log(imglist);

let selectnum = Math.floor(Math.random() * imglist.length);
let output = "<advertisement src=" + imglist[selectnum] + ">";

document.getElementsByClassName("side").appendChild(output);