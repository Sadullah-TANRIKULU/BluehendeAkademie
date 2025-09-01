const texte = {
  de: {
    titel: "Blühende Akademie",
    erstefrage: "Welche ist Meisterwerk? Warum?",
    sprachwaehl: "Sprache wählen:",
    zweitefrage: "Welche ist höher künstlich? Weshalb?",
    drittefrage:
      "Ist es möglich, dass Ebb und Flut könnten die Erde zerstören? Wieso?",
    simplenote: "Willkommen in unserem SimpleNote-Kanal. Bleibe auf dem Laufenden und erfahre mehr!",
    zurbuecher: "Sag ein Stichwort und finde es in deinem Telefon, wähl eine Abschnitt und lies!",
    zumtranskript: "Lass uns eine kurze Abschnitt vom Transkript des Videos auf Deutsch übersetzen!",
    kahoot: "Kahoot Zeit!",
    suchefaehigkeit: "Wie ist effektive Suche zu machen?",
    gebetuebung: "Namaz Übung! Rezitier laut!",
    gebetauswendiglernen:
      "Zeit, ein Gebet auswendig zu lernen! Zusammen und 7 Mal in der Reihe laut vorlesen!",
    fazit:
      "Lass uns heute, was wir gefühlen haben, was wir verstanden haben, was wir gedachten haben, was wir gelernt haben, als einen kurzen Text im Blog auf Deutsch oder auf Türkisch schreiben!",
  },
  tr: {
    titel: "Medresetü'z Zehra",
    erstefrage: "Hangisi sanat harikasıdır? Neden?",
    sprachwaehl: "Dil seçiniz:",
    zweitefrage: "Hangisi sanatça daha yüksektir? Neden?",
    drittefrage: "Gelgitlerin dünyayı yok etmesi mümkün mü? Neden?",
    simplenote: "SimpleNote Kanalımıza hoş geldiniz. Güncel kalın ve daha fazla bilgi alın!",
    zurbuecher: "Anahtar kelime söyle, bölüm seç ve oku!",
    zumtranskript: "Haydi videonun transkriptinden kısa bir bölümü Almancaya çevirelim!",
    kahoot: "Kahoot Zamanı!",
    suchefaehigkeit: "Etkili arama nasıl yapılır?",
    gebetuebung: "Namaz alıştırması! Yüksek sesle ezberden Kur'an tilaveti!",
    gebetauswendiglernen:
      "Ezberleme zamanı! Birlikte ve sırayla 7 kez yüksek sesle okuyalım!",
    fazit:
      "Bugün hissettiklerimizi, anladıklarımızı, düşündüklerimizi, öğrendiklerimizi blogda Almanca veya Türkçe olarak kısa bir metin şeklinde yazalım!",
  },
};

function wechselSprache(sprache) {
  for (let elID in texte[sprache]) {
    const el = document.getElementById(elID);

    if (el) {
      el.innerText = texte[sprache][elID];
    }
  }
}

wechselSprache("de");

document.getElementById("sprache").addEventListener("change", function () {
  wechselSprache(this.value);
});
