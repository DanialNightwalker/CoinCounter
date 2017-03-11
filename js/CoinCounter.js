function CoinQty()
{
   var CoinValues = [25, 10, 5, 1];
   var EnteredValue = document.getElementById("ChangeEntry").value;
   
   
   for(i = 0; i < 4; i++)
   {
      var Coins = Math.floor(EnteredValue/CoinValues[i]);
      if(Coins > 0)
      {
         document.getElementById("Counter" + CoinValues[i]).parentElement.style.display = "inherit";
         document.getElementById("Counter" + CoinValues[i]).innerHTML = Coins;
         EnteredValue = EnteredValue - (Coins * CoinValues[i]);
      }
      else
      {
         document.getElementById("Counter" + CoinValues[i]).parentElement.style.display = "none";
      }
   }
   
   
   
   //var Quarters = Math.floor(EnteredValue/CoinValues[0]);
     
   //document.getElementById("Container").innerHTML = EnteredValue;
}