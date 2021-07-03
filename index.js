class Driver{
  
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date('95');
  }
 
  
 
  yearsExperienceFromBeginningOf(year){
    this.startDate=this.startDate.getFullYear();
    return year-this.startDate ;
  }
}
class Route{
   constructor(beginningLocation , endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
   let ver= Number.parseInt(this.endingLocation.vertical)- Number.parseInt(this.beginningLocation.vertical);
   
   let hor=eastWest.indexOf(this.endingLocation.horizontal)-
   eastWest.indexOf(this.beginningLocation.horizontal);
   let numBlock=ver+hor;
  return numBlock;
  }
  estimatedTime(peakHour){
    
    let numerMinuts;
    
   if(peakHour){
      numerMinuts=this.blocksTravelled()/2;
      return numerMinuts;
    }
    else{
       numerMinuts=this.blocksTravelled()/3;
      return numerMinuts;
    }
    
  }
    
  
  
}