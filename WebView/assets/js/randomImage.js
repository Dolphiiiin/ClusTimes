function imgRandom(path) {
    let imglist = [
        path + "1.png",
        path + "2.png",
        path + "3.png",
        path + "4.png",
        path + "5.png",
        path + "6.jpg",
        path + "7.png",
        path + "8.png",
        path + "9.png",
        path + "10.png",
        path + "11.png",
        path + "12.jpg",
        path + "13.jpg",
        path + "14.jpg",
        path + "15.png",
        path + "16.png",
        path + "17.png"
    ];


    let selectnum = Math.floor(Math.random() * imglist.length);
    document.getElementById("sideBanner").src = imglist[selectnum];
    imglist.splice(selectnum, 1);
    selectnum = Math.floor(Math.random() * imglist.length);
    document.getElementById("sideBanner2").src = imglist[selectnum];
    imglist.splice(selectnum, 1);
    selectnum = Math.floor(Math.random() * imglist.length);
    document.getElementById("sideBanner3").src = imglist[selectnum];
}
