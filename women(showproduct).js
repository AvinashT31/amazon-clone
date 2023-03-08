window.onload = function(){
    
    // alert("workong");
    var divFromHtml = document.getElementById("DisplayProduct");
    console.log(divFromHtml, "divFromHtml");

    var productData = JSON.parse(localStorage.getItem("products"));
    console.log(productData, "productData");
    
    var array = [];

    for(var i=0; i< productData.length; i++){
        array += `<div><img src = "${productData[i].image}"></img><br><h4>${productData[i].name}</h4><br><p>${productData[i].price}</p><br></div>`
    }
    divFromHtml.innerHTML = array;
    console.log(array, "array");
}