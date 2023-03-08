function AddTheProduct(event){

    event.preventDefault();
    // alert("Working");

    var proImage = document.getElementById("image").value;
    var proName = document.getElementById("name").value;
    var proPrice = document.getElementById("price").value;

    var product = {image:proImage, name:proName, price: proPrice}
    console.log(product, "product");

    var dataFromLS = JSON.parse(localStorage.getItem("products")) || [];
    dataFromLS.push(product);
    console.log(dataFromLS, "dataFromLS");

    localStorage.setItem("products", JSON.stringify(dataFromLS ));
    alert("product add to the website");

}
