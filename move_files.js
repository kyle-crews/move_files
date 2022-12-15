var fs = require('fs');

// Assuming all files are in same folder
let files = ["9.png",
    "46.png",
    "114.png",
    "380.png",
    "610.png",
    "664.png",
    "896.png",
    "923.png",
    "1035.png",
    "1121.png",
    "1133.png",
    "1162.png",
    "1233.png",
    "1439.png",
    "1446.png",
    "1619.png",
    "1714.png",
    "1719.png",
    "1726.png",
    "2048.png"
];

// I am using simple for, you can use any variant here
for (var i = files.length - 1; i >= 0; i--) {
    var file = files[i];
    //    fs.rename("C:/Users/kyled/Dropbox/final_metadata_launch_v3/" + file, "./CCC_Digital_Tour/new/" + file, function(err) {
    fs.rename("./CCC_Digital_Tour/Round_3/" + file, "./CCC_Digital_Tour/Round_4/" + file, function(err) {
        if (err) console.log(err);
        console.log('Move complete.');
    });
}