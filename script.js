let allDrinksData = {};

// 從外部 JSON 檔載入資料
fetch('drinks.json')
  .then(response => response.json())
  .then(data => {
    allDrinksData = data;
    console.log('✅ 飲品資料載入完成！');
  })
  .catch(error => console.error('❌ 載入 drinks.json 發生錯誤：', error));

function drawDrink() {
  if (Object.keys(allDrinksData).length === 0) {
    alert('資料尚未載入完成，請稍候再試。');
    return;
  }

  const storeNames = Object.keys(allDrinksData);
  const randomStoreIndex = Math.floor(Math.random() * storeNames.length);
  const storeName = storeNames[randomStoreIndex];

  const availableDrinks = allDrinksData[storeName];
  const randomDrinkIndex = Math.floor(Math.random() * availableDrinks.length);
  const drinkName = availableDrinks[randomDrinkIndex];

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `
    <p style="color: #CC0000; font-size: 32px; margin-bottom: 5px;">就是這杯了！</p>
    <p>店名：<span style="color: #0077CC;">${storeName}</span></p>
    <p>飲品名稱：<span style="color: #00CC00;">${drinkName}</span></p>
  `;
}
