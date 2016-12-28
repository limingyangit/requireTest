require.config({
  baseUrl:'js/helper',
  paths:{
    math:'math',
    util:'util'
  }
});

require(['math','util'],function(math,util){
   console.log(math.add(4,2));
   console.log(math.diff(4,2));
  //  console.log(util);
});
