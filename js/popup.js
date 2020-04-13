window.onload = function() {
    console.log("1");
    getObject();

    // localStorageの文字列をJSONで取得
    function getObject() {
        console.log("2");
        let check = document.getElementById("swi1").checked
        console.log(check)
        chrome.storage.sync.get(['ndb'], function (result) {
            console.log(result.ndb);
            var status = result.ndb;
            if (status===undefined){
                status = true;
                setObject(status);
            }
            document.getElementById("swi1").checked = status
            console.log(status)
        });
    };
    // JSONを文字列でlocalStorageに保存
     function setObject(selected) {
        console.log("3");
        chrome.storage.sync.set({'ndb':selected});
    };

    // オプションデータの更新
    $('#swi1').change(function() {
        console.log("6");
        var selected1 = document.getElementById("swi1").checked;
        setObject(selected1);
        getObject();
        console.log("Update OK");
    });
};

        
