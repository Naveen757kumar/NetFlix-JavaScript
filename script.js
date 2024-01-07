// array of objects 
let movies=[
    {
        name:"Leo",
        poster:"./leoo.jpg",
        rating:"8.7"
    },
    {
        name:"Jailer",
        poster:"./jailerr.jpg",
        rating:"9.2"
    },
    {
        name:"Vikram",
        poster:"./Vikram.jpg",
        rating:"9.1"
    },
    {
        name:"Bahubali",
        poster:"./bahubali.jpg",
        rating:"9.2"
    },
    {
        name:"Pokiri",
        poster:"./pokiri.jpg",
        rating:"9.5"
    },
    {
        name:"Pursuit of Happyness",
        poster:"./pursuit.jpg",
        video:"./pursuit.mp4",
        rating:"9.6"
    },
    {
        name:"Matrix",
        poster:"./matrix.jpg",
        reting:"9.8"
    },
    {
        name:"Dark Knight",
        poster:"./dark.jpg",
        rating:"9.0"
    },
    {
        name:"Munthani Mudichi",
        poster:"./mun.jpg",
        rating:"9.2"
    },
    {
        name:"Avengers Endgame",
        poster:"./avengers.webp",
        rating:"9.0"
    }
]






function displayMovies(data)
{

    document.getElementById("mov").innerHTML="";
let htmlString=``;


for(let i=0;i<data.length;i++)
{
    htmlString=htmlString+`
    
    <div class="movie">
        <div id="over" class="overlay">
            <div id="vid" class="video">
               <video width=100% height=100% controls> <source src="./pursuit.mp4" type="video/mp4"> </video>
    
            </div>
            <div class="details">
                <h1>${data[i].name}</h1>
                <h2>IMDB: ${data[i].rating}</h2>
                
    
            </div>
        </div>
        <img class="poster" src="${data[i].poster}" alt="avenger">
    
    </div>
    
    `;
}
document.getElementById("mov").innerHTML=htmlString;

}

displayMovies(movies);

function searchMovie(){
    let movieName=document.getElementById("search").value;

    if(movieName!=="")
    {
        let result=movies.filter(function(movie)
        {
            return movie.name.toUpperCase().includes(movieName.toUpperCase());
        })

        displayMovies(result);
    }
    else{
        displayMovies(movies);
    }

   
}




/*let movies1DIV= document.createElement("div");
movies1DIV.classList.add("movie");

let overlayDIV=document.createElement("div");
overlayDIV.classList.add("overlay");
movies1DIV.appendChild(overlayDIV);
console.log(movies1DIV)*/

