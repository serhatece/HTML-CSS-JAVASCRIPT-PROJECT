document.addEventListener("DOMContentLoaded", () => {
  // DOM öğelerini seçiyoruz
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const weightVal = document.getElementById("weight-val");
  const heightVal = document.getElementById("height-val");
  const result = document.getElementById("result");
  const categoryElem = document.getElementById("category");

  // BMI hesaplama fonksiyonu
  const calculateBMI = () => {
    const weight = parseInt(weightInput.value); // Ağırlık
    const height = parseInt(heightInput.value); // Boy

    // Ağırlık ve boyu güncelleme
    weightVal.textContent = `${weight} kg`;
    heightVal.textContent = `${height} cm`;

    // BMI hesaplama
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1); // Formül
    result.textContent = bmi; // Sonucu güncelleme

    // Kategori belirleme
    let category = ""; // Kategori değişkeni
    if (bmi < 18.5) {
      category = "Underweight"; // Zayıf
      result.style.color = "red";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal weight"; // Normal ağırlık
      result.style.color = "green";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Overweight"; // Fazla kilolu
      result.style.color = "orange";
    } else {
      category = "Obese"; // Obez
      result.style.color = "red";
    }

    // Kategori DOM öğesine atanıyor
    categoryElem.textContent = category;
  };

  // Ağırlık ve boy girişlerine olay dinleyicileri ekleme
  weightInput.addEventListener("input", calculateBMI);
  heightInput.addEventListener("input", calculateBMI);
});
