(function() {

  var app = angular.module('itemList', []);

  app.controller('ListController', function(){
    this.products = items;
  });

  app.controller('ItemController', function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.controller('PostController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName; 
    };
  });

  var items = [
    {
      reviews: [{}]
    }
  ];

})();


 // -------search-----
it('search from text input', function () {
  var searchText = element(by.model('searchText'));
  searchText.clear();
});
