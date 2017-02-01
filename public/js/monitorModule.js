


(function() {
    var currentX = null;
var currentY = null;
    var customTooltips = function (tooltip) {

    var helpers = Chart.helpers;
    var ctx = this._chart.ctx;
    var vm = this._view;

    if (vm == null || ctx == null || helpers == null || vm.opacity === 0) {
        return;
    }

    var tooltipSize = this.getTooltipSize(vm);

    var pt = {
        x: vm.x,
        y: vm.y
    };

    if (currentX == vm.x && currentY == vm.y) {
        return;
    }

    currentX = vm.x;
    currentY = vm.y;

   //  IE11/Edge does not like very small opacities, so snap to 0
    var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

    // Draw Background
    var bgColor = helpers.color(vm.backgroundColor);
    ctx.fillStyle = bgColor.alpha(opacity * bgColor.alpha()).rgbString();
    helpers.drawRoundedRectangle(ctx, pt.x, pt.y, tooltipSize.width, tooltipSize.height, vm.cornerRadius);
    ctx.fill();

    // Draw Caret
    this.drawCaret(pt, tooltipSize, opacity);

    // Draw Title, Body, and Footer
    pt.x += vm.xPadding;
    pt.y += vm.yPadding;

    // Titles
    this.drawTitle(pt, vm, ctx, opacity);

    // Body
    this.drawBody(pt, vm, ctx, opacity);

    // Footer
    this.drawFooter(pt, vm, ctx, opacity);
};


    var app = angular.module('monitor-module', ["chart.js","uiGmapgoogle-maps"]);
   

 app.controller('BarCtrl', ['$scope','$timeout', function($scope,$timeout) {
     $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
      $scope.tempChart={};
       $scope.tempChart.options = {
            legend: {
                display: false
            },
           
            responsive: true,
            tooltips: {
            enabled: false,
         /*   
            custom: customTooltips
            position:'average',
            titleFontSize:8,
            bodyFontSize:9*/
            
        },
           
            scales: {
               xAxes: [{
                            display: false}],
                             yAxes: [{
                            display: false}]
         
            }
        };
        
            $scope.tempChart.colors = ['#45b7cd'];
        $scope.tempChart.labels = ['0:00', '0:04', '0:08', '0:08', '0:12', '0:16', '0:20'];
        $scope.tempChart.series = ['°C'];
        $scope.tempChart.data = [
            [15, -2, 25, 0, -5, 11, 22]
        ];
        
        $scope.tempChart.datasetOverride = [{
            label: "°C",
            tension:0.2,
            type: 'line',
            fill:false,
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "rgba(75,192,192,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 1,
            pointRadius: 2,
            pointHitRadius: 10
         
         
        }];
        
        $timeout(function () {
    $scope.tempChart.data = [
      [28, 48, 40, 19, 86, 27, 90]
    ];
  }, 3000);
        
        
        $scope.barChart={};
        
        /* legend: {
                display: true
            },*/
        $scope.barChart.options = {
            legend: {
                display: false
            },
           
            responsive: true,
            tooltips: {
            enabled: false,
         /*   
            custom: customTooltips
            position:'average',
            titleFontSize:8,
            bodyFontSize:9*/
            
        },
           
            scales: {
               xAxes: [{
                            display: false}],
                             yAxes: [{
                            display: false}]
         
            }
        };
        $scope.barChart.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
        $scope.barChart.labels = ['0:00', '0:04', '0:08', '0:08', '0:12', '0:16', '0:20'];
        $scope.barChart.series = ['X', 'Y', 'Z'];
        $scope.barChart.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90],
            [44, 12, 72, 98, 11, 5, 40]
        ];
        $scope.barChart.datasetOverride = [{
            label: "X",
            tension:0.2,
            type: 'line',
            fill:false,
            pointBorderWidth: 0,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            pointHitRadius: 10
         
        }, {
            label: "Y",
         //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
           // hoverBorderColor: "rgba(255,99,132,1)",
            tension:0.2,
            type: 'line',
            fill:false,
            pointBorderWidth: 0,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            pointHitRadius: 10
        
        },
        {
            label: "Z",
            //borderColor:'rgb(75, 192, 192,1)',
            tension:0.2,
            //backgroundColor:'rgb(75, 192, 192,1)',
            type: 'line',
            fill:false,
            pointBorderWidth: 0,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            pointHitRadius: 10
        }];
    }]);

    
        /*
    * Directiva dashboard
    * recursoTemplate : /dashboardTemplate Express
    *restrict : elemnt
    */
   /* app.directive('dashboard', function() {
        return {
            restrict: 'E',
            templateUrl: '../views/dashboard.html'
        };
    });*/

  




})();
