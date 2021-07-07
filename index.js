class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
   
   
yearsExperienceFromBeginningOf(year){
  var d = this.startDate ;
  var c = d.getFullYear();
 return year - c ;
}
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = {
      horizontal: beginningLocation.horizontal,
      vertical: beginningLocation.vertical
      
    };
    this.endingLocation = {
          horizontal: endingLocation.horizontal,
          vertical: endingLocation.vertical
    };
    
  }
  blocksTravelled(){
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    ;
    
  
    
  let  horizontalBlocks = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    console.log(horizontalBlocks);
    
   let verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
    console.log(verticalBlocks);
       return horizontalBlocks + verticalBlocks;
    }
    
    
    estimatedTime(peak){
      if (peak){
        return this.blocksTravelled()/2;
      }
      else
      {
        return this.blocksTravelled()/3;
      }
    }
 
}
