const conso = document.getElementById('consommation')
const distance = document.getElementById('distance')
const price = document.getElementById('price')
const idresult = document.getElementById('resulat')
const submit = document.getElementById('submit')

let consoChange = 0;
let distanceChange = 0;
let priceChange = 0;

conso.addEventListener('change', (e) =>
{
     consoChange = e.target.value;
})
distance.addEventListener('change', (e) =>
{
     distanceChange = e.target.value;
})
price.addEventListener('change', (e) =>
{
     priceChange = e.target.value;
})

console.log(consoChange);
console.log(distanceChange);
console.log(priceChange);

// Ma fonction qui me permet de calculer le resultat 
const resulat = () =>
{   
    // 
    let result = ((consoChange / 100) * distanceChange);
    console.log(result);
    // 
    let total = ((result * priceChange) / 100).toFixed(2);
    console.log(total);
    // Afficher le resultat total
    idresult.innerHTML = ` votre somme total : ${total}`;

}
// Ecouter la soumission du formulaire 
submit.addEventListener('click', (e) =>
{
    e.preventDefault()
    return resulat();
})
