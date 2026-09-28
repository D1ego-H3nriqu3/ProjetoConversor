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

            break
        case("2"):

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

    function sairSistema(){
        console.log("\n...Saindo do sistema de conversor...\n")
        indice = false
    }