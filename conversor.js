import PromptSync from "prompt-sync";
const prompt = PromptSync();

let indice = true

do{
    console.log(`\n=== Conversor de Unidades ===
1. Celsius para Fahrenheit
2. Fahrenheit para Celsius
3. Quilômetros para Milhas
4. Milhas para Quilômetros
0. Sair`)
    let resposta = prompt("Escolha uma opção: ").trim()
    switch(resposta){
        case("1"):
            console.log("\n=== Celsius para Fahrenheit ===\n")
            celsiusF()
            break
        case("2"):
        console.log("\n=== Fahrenheit para Celsius ===\n")
            fCelsius()
            break
        case("3"):

            break
        case("4"):

            break
        case("0"):
            sairSistema()
            break
        default:
            console.log("\nDigite uma opção válida")
    }
}while(indice === true)

    function celsiusF(){
        let temperatura = Number(prompt("Digite a temperatura em Celsius: "))
        if(isNaN(temperatura)){
            console.log("\nDigite uma temperatura válida!\n")
            celsiusF()
        }else{
            let conversor = temperatura * 9 / 5 + 32.
            console.log(`\n${temperatura}°C equivalem a ${conversor}°F`)
        }
    }

    function fCelsius(){
        let temperatura = Number(prompt("Digite a temperatura em Fahrenheit: "))
        if(isNaN(temperatura)){
            console.log("\nDigite uma temperatura válida!\n")
            fCelsius()
        }else{
            let conversor = (temperatura - 32) * 5 / 9
            console.log(`\n${temperatura}°F equivalem a ${conversor.toFixed(2)}°C`)
        }
    }

    function sairSistema(){
        console.log("\n...Saindo do sistema de conversor...\n")
        indice = false
    }