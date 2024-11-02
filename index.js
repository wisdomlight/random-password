const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];




let passwordEl1 = document.getElementById("password1-el")
console.log(passwordEl1)
let passwordEl2 = document.getElementById("password2-el")
console.log(passwordEl2)
function generatePassword(){
	let password = ""
	let randomNumber = ""
	for (let i = 0; i < 15; i++){
		let randomNumber = Math.floor(Math.random() * characters.length)
		password += characters[randomNumber]
	}
	return password 
}


function placePasswords(){
	passwordEl1.textContent = generatePassword()
	passwordEl2.textContent = generatePassword()
}
//console.log("This is 1st password: " + generatePassword())
//console.log("This is 2nd password: " + generatePassword())

