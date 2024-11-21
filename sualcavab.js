const startGame = confirm(
  `Menyumuza daha çox seçim əlavə etməklə və məhz sifariş verdiyiniz zaman hazırlanmış təzə burgerləri təqdim etməklə biz hər zaman müştərilərimizə və yeməklərimizə olan sadiqliyimizi nümayiş edirik. 
  
Şifariş vermək üçün menyuya göz atın.`
);

if (startGame) {
  const q1 = confirm(`
------------------------------------------
Yeməklər.
------------------------------------------
1. Hamburger                         $2.99
2. 🌟CheesBurger                  $5.99
3. Double CheesBurger          $7.99
4. Big Mac                              $9.99
------------------------------------------
İçkilər.
------------------------------------------
4. Kola                                    $2.99
5. Fanta                                  $2.99
6. Ayran                                 $2.99
7. 🌟Sprite                            $0.99
------------------------------------------`);
  if (q1) {
    const yourMeal = prompt(`İstədiyiniz yeməyi qeyd edin.`);

    let price;
    let price2;

    if (yourMeal == "1") {
      price = 2.99;
    } else if (yourMeal == "2") {
      price = 5.99;
    } else if (yourMeal == "3") {
      price = 7.99;
    } else if (yourMeal == "4") {
      price = 9.99;
    } else {
      alert("🍔 Seçdiyiniz yemək menyuda yoxdur.");
      startGame();
    }

    const yourDrink = prompt(`İstədiyiniz içkiyi qeyd edin.`);
    if (yourDrink == "5") {
      price2 = 2.99;
    } else if (yourDrink == "6") {
      price2 = 2.99;
    } else if (yourDrink == "7") {
      price2 = 0.99;
    } else if (yourDrink == "8") {
      price2 = 2.99;
    } else {
      alert("🍹 Seçdiyiniz içki menyuda yoxdur.");
      startGame();
    }

    alert(`💸 Sizin hesabınız ${price + price2} manatdır.`);
    alert(`✅ Sizin Sifarişiniz hazırlanır.`);
  } else {
    alert("❌ Sifariş vermədiniz.");
  }
} else {
  database1 = [];

  const yourOffer = confirm(
    `Endirimli təkliflər almaq üçün qeydiyyatdan keçmək istəyirsiniz ?`
  );
  if (yourOffer) {
    const yourName = prompt(`Adınızı qeyd edin.✍`);

    if (yourName) {
    } else {
      alert("Adınızı qeyd etmədiniz.");
      startGame();
    }

    const yourNumber = prompt(`Nömrənizi qeyd edin.✍`);

    if (yourNumber) {
    } else {
      alert("Nömrənizi qeyd etmədiniz.");
      startGame();
    }

    database1.push(yourName);
    database1.push(yourNumber);
    alert(`${yourName} siz artıq McDonaldsın rəsmi müştərisisiniz.
Endirimlər ${yourNumber} nömrəsinə göndəriləcək 📧. `);

    console.log(database1);
  } else {
    alert("Yenə gözləyərik.");
  }
}
