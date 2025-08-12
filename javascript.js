
const convertButton = document.querySelector(".click")
const select = document.querySelector(".euro-dolar")



convertButton.addEventListener("click", convertValues)
const convertValues = async () => {

    
    const input = document.querySelector(".currency").value
    const US = document.querySelector(".value-two")
    const brasil = document.querySelector(".value-one")
    

    const data = await feach("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high

    
    if(select.value == "dolar"){
        US.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / dolarToday)}
    
    if(select.value == "euro"){
        US.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input / euroToday)}
    
    brasil.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input)

}


select.addEventListener("change", changeCurrency) 
function changeCurrency(){
    const name = document.getElementById("two")
    const img = document.querySelector(".bandeira")

    if(select.value == "dolar"){
        name.innerHTML = "Dólar Americano"
        img.src = "./assets/estados-unidos (1) 1.png"
    }

    if(select.value == "euro"){
        name.innerHTML = "Euro"
        img.src = "./assets/Euro.png"
    }

    convertValues()
}





