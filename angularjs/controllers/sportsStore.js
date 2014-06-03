angular.module("sportsStore").controller("sportsStoreCtrl", function($scope){
	$scope.data = {
		products: [
			{ name: "Product 1", desciption: "A product", category: "Category 1", price:100},
			{ name: "Product 2", desciption: "A product", category: "Category 1", price:110},
			{ name: "Product 3", desciption: "A product", category: "Category 2", price:210},
			{ name: "Product 4", desciption: "A product", category: "Category 3", price:202}
		]
	}
});