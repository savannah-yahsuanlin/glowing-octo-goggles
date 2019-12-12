var checkBox = document.querySelector('input');
var para = document.querySelector('p');
var shoppingDone = false;


checkBox.addEventListener('change', function(){
  checkBox.disabled = true;
  shoppingDone = true;
  updateAllowance();
});

function updateAllowance(){
  if(shoppingDone === true){
    var money = 10;
  }else{
    var money = 5;
  }

  para.textContent = 'Child has earned $' + money + 'this week';
 }

 updateAllowance();