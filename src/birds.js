export const allBirds = [
    {id:0, name:"Northern Cardinal", color:'red'},
    {id:1, name:"Pine Warbler", color:'yellow'},
    {id:2, name:"Wood Duck", color:'multi'},
    {id:3, name:"Carolina Wren", color:'brown'},
    {id:4, name:"Great Blue Heron", color:'gray'},
    {id:5, name:"Eastern Bluebird", color:'blue'},
    {id:6, name:"Tufted Titmouse", color:'multi'},
    {id:7, name:"Wood Thrush", color:'brown'},
    {id:8, name:"Blue Jay", color:'blue'},
    {id:9, name:"Turkey Vulture", color:'black'},
    {id:10, name:"American Robin", color:'black'},
    {id:11, name:"Summer Tanager", color:'red'},
  ];

export const allMatchingBirds = [
    {dictId:0, name:"Northern Cardinal", type:"AM", color:'red'},
    {dictId:1, name:"Northern Cardinal", type:"AF", color:'red'},
    {dictId:2, name:"Wood Duck", type:"AM", color:'multi'},
    {dictId:3, name:"Wood Duck", type:"AF", color:'multi'},
    {dictId:4, name:"Eastern Bluebird", type:"AM", color:'blue'},
    {dictId:5, name:"Eastern Bluebird", type:"AF", color:'blue'},
    {dictId:6, name:"Summer Tanager", type:"AM", color:'blue'},
    {dictId:7, name:"Summer Tanager", type:"AF", color:'blue'},
    {dictId:8, name:"Mallard", type:"AM", color:'blue'},
    {dictId:9, name:"Mallard", type:"AF", color:'blue'},
    {dictId:10, name:"Ruddy Duck", type:"AM", color:'multi'},
    {dictId:11, name:"Ruddy Duck", type:"AF-J", color:'multi'},
    {dictId:12, name:"Indigo Bunting", type:"AM", color:'blue'},
    {dictId:13, name:"Indigo Bunting", type:"AF-J", color:'blue'},
    {dictId:14, name:"Mandarin Duck", type:"AM", color:'multi'},
    {dictId:15, name:"Mandarin Duck", type:"AF", color:'multi'},
    {dictId:16, name:"Red-bellied Woodpecker", type:"AM", color:'red'},
    {dictId:17, name:"Red-bellied Woodpecker", type:"AF", color:'red'},

]

export const allColors = {red:'#ff776e', yellow:'#ffeb0d', multi:'#ffffff', brown:'#cf9c7a', gray:'#d1d1d1',blue:'#82cbff'};


export function getRandom(matchingBirds){
    const length = matchingBirds.length;
    const selectedBirds = Array(6).fill(null);

    let randomId = [];
    
      while(randomId.length<5){
        let newNum = Math.floor(Math.random()*length);
        if(!randomId.includes(newNum)){
          if(newNum%2==0){
            randomId.push(newNum, newNum+1);
          }else{
            randomId.push(newNum-1, newNum);
          }
        }
      }
    
    //shuffle elements
    let currentIndex = randomId.length;
    let randomIndex;

    while(currentIndex!=0){
      randomIndex = Math.floor(Math.random()*randomId.length);
      currentIndex--;

      [randomId[currentIndex], randomId[randomIndex]] = [randomId[randomIndex], randomId[currentIndex]];
    }

    selectedBirds.forEach((bird,index)=>{
    selectedBirds[index] = matchingBirds[randomId[index]];
    selectedBirds[index] = {...selectedBirds[index], id:index};
  })

  return selectedBirds;
}