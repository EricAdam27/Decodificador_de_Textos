const inputTexto = document.querySelector(".inputTexto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
	const textoEncriptado = encriptar(inputTexto.value);
	mensagem.value = textoEncriptado;
}

// a = ai
// e = enter
// i = imes
// o = ober
// u = ufat

function encriptar(stringEncriptada) {
	let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "obe"], ["u", "ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();

	for (var i = 0; i < matrizCodigo.length; i++) {
		if (stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}

	return stringEncriptada;
}

function btnDesencriptar() {
	const textoDesencriptado = desencriptar(inputTexto.value);
	mensagem.value = textoDesencriptado;
}

function desencriptar(stringDesencriptada) {
	let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "obe"], ["u", "ufat"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for (var i = 0; i < matrizCodigo.length; i++) {
		if (stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}

	return stringDesencriptada;
}