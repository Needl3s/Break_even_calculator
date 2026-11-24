const form = document.getElementById("calculator");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const sellingPrice = document.getElementById("selling-price").value;
    const variableCost = document.getElementById("variable-cost").value;
    const fixedCosts = document.getElementById("fixed-costs").value;

    const contributionMargin = sellingPrice - variableCost;

    if(fixedCosts === 0){
        result.textContent = "0 units needed to cover fixed costs.";
        return;
    }

    if(contributionMargin <= 0){
        result.textContent = "No break-even point at this selling price.";
        return;
    }

    const breakEvenUnits = Math.ceil(fixedCosts / contributionMargin);

    result.textContent = `You need to sell ${breakEvenUnits} unit(s) to break even`;
    
})