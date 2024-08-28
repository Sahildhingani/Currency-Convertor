let amount=document.querySelector("#amount");
let summit=document.querySelector("#summit");
let from_ele;
let to_ele;

let select=document.querySelector("#select1");
let from=document.querySelector("#from");
for(let i in countryList){
    let ele=document.createElement("option");
    ele.value=countryList[i];
    ele.innerText=i;
    select.appendChild(ele);
    if(i==="USD"){
        ele.selected="selected";
    }
}
select.addEventListener('change',(ele)=>{
    console.log(ele.target.value);
    let new_scr=`https://flagsapi.com/${ele.target.value}/flat/64.png`;
    from.src=new_scr
    from_ele=ele.target.value;
})


let select2=document.querySelector("#select2");
let to=document.querySelector("#to");
for(let i in countryList){
    let ele=document.createElement("option");
    ele.value=countryList[i];
    ele.innerText=i;
    select2.appendChild(ele);
    if(i==="INR"){
        ele.selected="selected";
    }
}
select2.addEventListener('change',(ele)=>{
    console.log(ele.target.value);
    let new_scr=`https://flagsapi.com/${ele.target.value}/flat/64.png`;
    to.src=new_scr;
    to_ele=ele.target.value;
})
// handel api call 

let URL=`https://api.currencyapi.com/v3/latest?apikey=cur_live_g7hlEQB9nJot65mEtzJaXBDo8ItCFajsjXGlmFs9&currencies=${to_ele}&base_currency=${from_ele}`
    summit.addEventListener('click',()=>{
        console.log("sumit is clicked")
        console.log(amount.value);
        fetch(URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let inrValue = data.data.USD.value;
        let ans=amount.value*inrValue;
        console.log(ans);
    })
    })
    

   

