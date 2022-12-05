let ratingData=[
    {restaurant:'KFC',rating:5 },
    {restaurant:'Burger King',rating:4 },
    {restaurant:'KFC',rating:3 },
    {restaurant:'Domino',rating:2 },
    {restaurant:'Subway',rating:3 },
    {restaurant:'Domino',rating:1 },
    {restaurant:'Subway',rating:4 },
    {restaurant:'Pizza Hut',rating:5 }
    ];
let sumData={};
for(let element of ratingData){
    if(sumData[element.restaurant]){
        sumData[element.restaurant].sum=sumData[element.restaurant]+element.rating;
        sumData[element.restaurant].n++;
    }
  else{
      sumData[element.restaurant]={ 
          sum:element.rating,
          n:1
      };
  }  
}
let averageData=[];
for(let element of Object.keys(sumData)){
averageData.push({
    name:element,
    rating: sumData[element].sum/sumData[element].n
});
}
console.log(averageData);
for(let newobj of averageData)
{ 
if(newobj.rating>=4)
{ console.log(newobj);
 }
 }