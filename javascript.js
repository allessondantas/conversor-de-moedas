
const convertButton = document.querySelector(".click")
const select = document.querySelector(".euro-dolar")


function convertValues() {

    
    const input = document.querySelector(".currency").value
    const US = document.querySelector(".value-two")
    const brasil = document.querySelector(".value-one")
    

    const dolarToday = 5
    const euroToday = 6.2

    
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


select.addEventListener("change", changeCurrency) 
convertButton.addEventListener("click", convertValues)



