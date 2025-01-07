// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini

let son = 5;
let qoldiq = son % 2; // 5 ni 2 ga bo'lishdan qoldiq
alert(qoldiq);





// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

let randomSon = Math.floor(Math.random() * 10) + 1; // 1 dan 10 gacha random son
alert(randomSon);




// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

let son = 12.510;
let butunSon = Math.floor(son); // Natija: 12
console.log(butunSon);

let son = 12.510;
let butunSon = Math.ceil(son); // Natija: 13
console.log(butunSon);

let son = 12.510;
let butunSon = Math.round(son); // Natija: 13
console.log(butunSon);





// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 

function harfSoniTop(soz) {
    let harfSoni = soz.replace(/\s/g, '').length; // Bo'sh joylarni olib tashlab, uzunlikni hisoblaydi
    alert(harfSoni);
}

// Funksiyani chaqiramiz
harfSoniTop("MARS IT SCHOOL");




// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

function sozniChopEt() {
    for (let i = 0; i < 10; i++) {
        console.log("MARS IT SCHOOL");
    }
}

// Funksiyani chaqiramiz
sozniChopEt();


// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering


let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z"];

// Ismingiz uchun kerakli harflarni tanlang
let ism = harflar[2] + harflar[7] + harflar[0] + harflar[16] + harflar[18]; // C + H + A + R + S

console.log(ism); // "Charos"


// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering


let yosh = prompt("Yoshingizni kiriting:"); // Foydalanuvchidan yoshni so'rash

if (yosh > 18) {
    console.log("Siz balag'ot yoshiga yetgansiz");
} else if (yosh == 18) {
    console.log("Balog'at yoshi muborak");
} else {
    console.log("Siz balog'at yoshiga yetmagansiz");
}



// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

let ism = prompt("Ismingizni kiriting:"); // Foydalanuvchidan ismni so'rash
let teskariIsm = ism.split('').reverse().join(''); // Ismni teskari qilish
console.log(teskariIsm); // Teskari ismni chiqarish


// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring

// Foydalanuvchidan ism va yoshni so'rash
let ism = prompt("Ismingizni kiriting:");
let yosh = prompt("Yoshingizni kiriting:");

// Yangi elementlar yaratish
let div = document.createElement("div");
div.innerHTML = `Ismingiz: ${ism} <br> Yosh: ${yosh}`;

// Uslub qo'llash
div.style.fontSize = "20px"; 
div.style.color = "blue"; 
div.style.textAlign = "center";
div.style.marginTop = "20px";
div.style.fontFamily = "Arial, sans-serif";

// DOMga qo'shish
document.body.appendChild(div);


// Javob:Kodini yozib bering









// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов

let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Juft sonlarni filtrlash va chiqarish
let juftSonlar = sonlar.filter(son => son % 2 === 0);
console.log(juftSonlar);


// Javob :Kodini yozib bering