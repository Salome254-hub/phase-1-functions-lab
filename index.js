// Code your solution in this file!
function distanceFromHqInBlocks(blocks)
 {
    if(blocks>42){
    
        console.log(blocks=blocks-42);
        return blocks;
    
    }
    
    else
    {console.log(blocks=42-blocks);
      return blocks;
    }
    
    
}

function distanceFromHqInFeet(feet){
    
return (parseInt(distanceFromHqInBlocks(feet),10)*264); 


}

function distanceTravelledInFeet(start, destination){
    let distance;
    if(start>destination){
    distance=start-destination;}
    else if(destination>start){
    distance=destination-start;}
    return (parseInt(distance,10)*264)
    



}
function calculatesFarePrice(start,destination){
const chdistance=distanceTravelledInFeet(start, destination);
if(chdistance <= 400)
{
return 0;

}
else if(chdistance>400&&chdistance<=2000)
{

return (chdistance-400)*0.02;

}else if(chdistance>2000&&chdistance<=2500){
    return 25;
}
else {

    
    return 'cannot travel that far';

}

}
  