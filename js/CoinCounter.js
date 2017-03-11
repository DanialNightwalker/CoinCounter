function CoinQty()
{
   //--- Setting variables ---//
   var EnteredValue = document.getElementById("ChangeEntry").value;
   var CoinValues = [];
   var CoinValuesSorted = [];
   for(i = 0; i < 4; i++)
   {
      CoinValuesSorted[i] = CoinValues[i] = document.getElementById("Coin" + (i+1)).value;
   }
   CoinValuesSorted.sort(function(a, b){return b - a});

   //--- Processing data ---//
   var h = 0;
   while(h < 4)
   {
      for(i = 0; i < 4; i++)
      {
         if(CoinValuesSorted[h] == CoinValues[i])
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
            h++;
         }
      }
   }
}