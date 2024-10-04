function AddMoto(){
    let moto = {
        "marca": "honda",
        "modelo": "Titan",
        "ano": 2020,
        "cor": "vermelha"    
    }
    console.log(moto);
}

function AddMoto2(){
    let moto = {
        "marca": document.getElementById("marca").value ,
        "modelo": document.getElementById("modelo").value,
        "ano": document.getElementById("fabricacao").value,
        "cor": document.getElementById("cor").value   
    }
    console.log(moto);
}

function AddMotosArray(){
    let motos = [
        {
            "marca": "Honda",
            "modelo": "Titan",
            "ano": 2020,
            "cor": "vermelha"
        },
        {
            "marca": "BMW",
            "modelo": "R 1250 GS",
            "ano": 2023,
            "cor": "Azul"
        },
        {
            "marca": "Honda",
            "modelo": "Biz",
            "ano": 2014,
            "cor": "Preta"
        }
    ];

    let moto = {
        "marca": document.getElementById("marca").value ,
        "modelo": document.getElementById("modelo").value,
        "ano": document.getElementById("fabricacao").value,
        "cor": document.getElementById("cor").value 
    }

    // motos.unshift(moto); atras
    // motos.push(moto); frente
    motos.push(moto);

    console.log(motos);
}