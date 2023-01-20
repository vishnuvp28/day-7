

var request= new XMLHttpRequest();

request.open('Get','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');

request.send();

request.onload=function(){
var data=JSON.parse(request.response);
    
    
    
    // 1.Get all the countries from Asia continent /region using Filter function

  let continent = data.filter((v) => v.region === "Asia").map((v)=> v.name);
   console.log(continent);

    //2.Get all the countries with a population of less than 2 lakhs using Filter function

     let pop = data.filter((p)=> p.population < 200000).map((l)=> l.name);
       console.log(pop);
    
    
    //3.Print the following details name, capital, flag using forEach function
            
       data.forEach(ele => console.log(`${ele.name} - ${ele.capital},${ele.flag}`));
               
    //4.Print the total population of countries using reduce function

       let totalpopulation = data.map((ele)=> ele.population);
       let popul = totalpopulation.reduce((acc,ite)=> acc + ite);
       console.log(popul);

    //5.Print the country which uses US Dollars as currency.

     let curren = data.filter((r)=>{

      for(let curs in r.currencies){
          if(r.currencies[curs].code === "USD")
          return true;
      }

     });
     console.log(curren);

let ind = data.filter((i)=>i.india)
console.log(ind);
}