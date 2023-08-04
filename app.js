let arr = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb"
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb"
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb"
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb"
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb"
    },
    {
        brand: "Motorola",
        model: "123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb"
    },
    {
        brand: "Iphone",
        model: "12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Iphone",
        model: "13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Iphone",
        model: "X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
]





let mobileList = document.getElementById("mobileList")
let inp = document.getElementById("inp")
let dropdown = document.getElementById("dropdown")


function displayMobileList() {
    let searchTex = inp.value.toLowerCase();
    let searchOption = dropdown.value;

    let filterMobiles = arr.filter((mobile) => {
        let mobileProperty = mobile[searchOption].toLowerCase();
        return mobileProperty === searchTex;
    });

    mobileList.innerHTML = "";
    if (filterMobiles.length === 0) {
        mobileList.innerHTML = "<p>Not found Mobile</p>";
    } else {
        filterMobiles.forEach((mobile) => {
            const mobileDetails = document.createElement("div");
            mobileDetails.innerHTML = `
              <p>Brand: ${mobile.brand}</p>
              <p>Model: ${mobile.model}</p>
              <p>Price: ${mobile.price}</p>
              <p>Camera: ${mobile.camera}</p>
              <p>RAM: ${mobile.ram}</p>
              <p>ROM: ${mobile.rom}</p>
              <hr>
            `;
            mobileList.appendChild(mobileDetails);
        });
    }
}
















// let mobileList = document.getElementById("mobileList")
// let inp = document.getElementById("inp")
// let dropdown = document.getElementById("dropdown")





// function displayMobileList() {
//     let searchTex = inp.value;
//     let searchOption = dropdown.value;

//     let filterMobiles = arr.filter((mobile) => {
//         return mobile[searchOption].toLowerCase() === searchTex.toLowerCase();
//     });
    

//     mobileList.innerHTML = "";
//     if (filterMobiles.length === 0) {
//         mobileList.innerHTML = "<p>Not found Mobile</p>";
//     } else {
//         filterMobiles.forEach((mobile) => {
//             let mobileDetails = document.createElement("div");
//             mobileDetails.innerHTML = `
//               <p>Brand:${mobile.brand}</p>
//               <p>Model:${mobile.model}</p>
//               <p>Price:${mobile.price}</p>
//               <p>Camera: ${mobile.camera}</p>
//               <p>RAM: ${mobile.ram}</p>
//               <p>ROM: ${mobile.rom}</p>
//               <hr>
//             `;
//             mobileList.appendChild(mobileDetails);
//         });
//     }
// }










// let brand = document.getElementById("brand")
// let model = document.getElementById("model")
// let price = document.getElementById("price")
// let camera = document.getElementById("camera")
// let ram = document.getElementById("ram")
// let rom = document.getElementById("rom")



