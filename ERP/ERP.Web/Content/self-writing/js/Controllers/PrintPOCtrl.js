﻿app.controller('PrintPOCtrl', function ($scope, $http) {
    //this gets the full url
    var url = document.location.href;
    //this removes the anchor at the end, if there is one
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    //this removes the query after the file name, if there is one
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    //this removes everything before the last slash in the path
    url = url.substring(url.lastIndexOf("/") + 1, url.length);
    //return


    //hàm tìm kiếm
    $scope.getdatadonPO = function (masoPO) {
        $http.post(window.location.origin + '/api/Api_DonHangPO/PrintDonPO/' + masoPO)
         .then(function (response) {
             if (response.data) {
                 $scope.thongtinbaogia = response.data;
                 $scope.thongtinchung = $scope.thongtinbaogia.ChungPO;
                 $scope.thongtinchitiet = $scope.thongtinbaogia.ChiTietPO;
             }
         }, function (error) {
             console.log(error);
         })
    }
    $scope.getdatadonPO(url);
    $scope.CurrentDate = new Date();
    //$scope.getTotal = function () {
    //    var total = 0;
    //    for (var i = 0; i < $scope.thongtinchitiet.length; i++) {
    //        var product = $scope.thongtinchitiet[i];
    //        total += product.THANH_TIEN;
    //    }
    //    return total;
    //}



    $scope.printToCart = function (printSectionId) {
        var innerContents = document.getElementById(printSectionId).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="styl  esheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();

    }

    $scope.BackToList = function () {
        window.location.href = "/KinhDoanh/DonHangPO/DonPOHome";
    };

    $scope.BackToEdit = function () {
        window.location.href = "/KinhDoanh/DonHangPO/Edit/" + url;
    };

});
