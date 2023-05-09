var noun = ["крыса", "мартышка","свинья", "корова"];
var adjective = ["сопливая", "вонючая", "глупая", "крикливая"];
console.log("Ты "+adjective[Math.floor(Math.random()*(noun.length))] +" " +noun[Math.floor(Math.random()*(adjective.length))] );