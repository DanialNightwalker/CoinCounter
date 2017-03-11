function CoinQty()
{
   var EnteredValue = document.getElementById("ChangeEntry").value;
   var CoinValues = [];
   for(i = 0; i < 4; i++)
   {
      CoinValues[i] = document.getElementById("Coin" + (i+1)).value;
   }
     
   
   for(i = 0; i < 4; i++)
   {
      var Coins = Math.floor(EnteredValue/CoinValues[i]);
      if(Coins > 0)
      {
         document.getElementById("Counter" + (i+1)).parentElement.style.display = "inherit";
         document.getElementById("Counter" + (i+1)).innerHTML = Coins;
         EnteredValue = EnteredValue - (Coins * CoinValues[i]);
      }
      else
      {
         document.getElementById("Counter" + (i+1)).parentElement.style.display = "none";
      }
   }
   
   
   
   //var Quarters = Math.floor(EnteredValue/CoinValues[0]);
     
   //document.getElementById("Container").innerHTML = EnteredValue;
}