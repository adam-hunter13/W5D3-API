// document.getElementById("button1").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Button Clicked";
//   });


const pDemo = document.getElementById("demo")
const btn = document.querySelector("#button1")

function click(){
    console.log("Button Clicked")
    axios.get("https://swapi.dev/api/planets/2")
    .then(response => {
        console.log(response.data)
        console.log(response.data.residents)
        for(let i=0; i < response.data.residents.length; i++){
            axios.get(response.data.residents[i])
            .then(res => {
                const person = document.createElement("li")
                person.textContent = (res.data.name)
                pDemo.appendChild(person)
                console.log(res.data.name)

            })
            // console.log(response.data.residents[i])
        }
        
    })

    .catch(error => {
        console.log(error)
      })
}

document.getElementById("button1").addEventListener("click", click)



