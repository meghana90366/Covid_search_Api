// let searchInput =document.getElementById('search');
// let template=document.getElementById('template');
// searchInput.addEventListener('keyup', e=>{
//     // if(e.key==='Enter'){
//         let searchText=e.target.value;
//         SearchGitUser(searchText);
//     // }
// });
// async function SearchGitUser(searchValue){
//     let URL="https://api.covid19api.com/country";
//     let DATA= await window.fetch(`${URL}/${searchValue}`);
//     let JSON =await DATA.json();
//     let{ID,Country,CountryCode}=JSON[635];
//     template.innerHTML=` 
    
   
//     <h3 id="m">id : ${ID}</h3>
//     <h3 id="n">country name : ${Country}</h3>
//     <h3 id="o"> country code : ${CountryCode}</h3>
//     `;
    

// } 
// SearchGitUser();













let searchInput = document.getElementById('search');
let templete = document.getElementById('templete');
searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
        let searchText = e.target.value;
        searchGitUser(searchText);
    }
})
async function searchGitUser(searchValue){
    let URL = 'https://api.covid19api.com/country';
    let DATA = await window.fetch(`${URL}/${searchValue}`);
    let JSON = await DATA.json();
    let {Deaths,Country,Confirmed,Active,Recovered,Date,CountryCode} = JSON[666];
templete.innerHTML =`
<main>
    <section class="main">
    <div class="covid">
       <h1 class="country">${Country} </h1>
      
    </div>
    
        
    <div class="pos">
    <h1 class="positive">${Confirmed}</h1>
    <p class="positive1">Positive Cases</p>
    </div>
       
    <div class="neg">
        <h1 class="Deaths">${Deaths}</h1>
        <p class="Deaths1">Deaths</p>
    
    </div>
    </section>
    <section class="second"> 
    <div class="active">
        <h1 class="Active1">${Active}</h1>
        <p class="Active">Active Cases</p>
    </div> 
    <div class="recover">
        <h1 class="recovered1">${Recovered}</h1>
        <p class="recovered">Recovered</p>
    </div> 

    <div class="po">
    <h1 class="positiv">${Confirmed}</h1>
    <p class="positiv1">Positive Cases</p>
    </div>

    </section>
    <section class="third"> 
    <div class="active">
        <h1 class="Active1">${CountryCode}</h1>
        <p class="Active">CountryCode</p>
    </div> 
    <div class="recover">
        <h1 class="recovered1">${Date}</h1>
        <p class="recovered">Date</p>
    </div> 

    <div class="po">
    <h1 class="positiv">${Deaths}</h1>
    <p class="positiv1">Deaths</p>
    </div>

    </section>
   
</main>`
}