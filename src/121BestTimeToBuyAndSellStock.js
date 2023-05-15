
 // Вам дан массив prices, где prices[i] указана цена данной акции в день.ith
 // Вы хотите максимизировать свою прибыль, выбрав один день для покупки одной акции и выбрав другой день
 // в будущем для продажи этой акции.
 // Верните максимальную прибыль, которую вы можете получить от этой сделки.
 // Если вы не можете получить какую-либо прибыль, верните 0.
 const maxProfit = function(prices) {
     let minPrice = Infinity;
     let profit = 0;

     for (let i = 0; i < prices.length; i++) {
         if (prices[i] < minPrice) {
             minPrice = prices[i];
         } else if (prices[i] - minPrice > profit) {
             profit = prices[i] - minPrice;
         }
     }
     return profit
 };

maxProfit([7,1,5,3,6,4])