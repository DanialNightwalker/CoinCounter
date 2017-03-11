function CoinQty()
{
   var CoinValues = [25, 10, 5, 1];
   var CoinCounts = [0, 0, 0, 0];
   var EnteredValue = document.getElementById("ChangeEntry").value;
   
   
   if(Math.floor(EnteredValue/CoinValues[0])>0)
   {
      document.getElementById("Counter" + CoinValues[0]).innerHTML = Math.floor(EnteredValue/CoinValues[0]);
      EnteredValue = EnteredValue - (Math.floor(EnteredValue/CoinValues[0]) * CoinValues[0]);
   }
   
   
   
   
   //var Quarters = Math.floor(EnteredValue/CoinValues[0]);
     
   //document.getElementById("Container").innerHTML = EnteredValue;
}