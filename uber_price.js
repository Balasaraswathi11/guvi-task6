
class Uber{
    constructor (basefare, rateperkm, addictionalcharges=0, waitingcharges=0){
        this.basefare=basefare
        this.rateperkm=rateperkm
        this.addictionalcharges=addictionalcharges
        this.waitingcharges=waitingcharges
    }
details()
{return `   
Basefare = ${this.basefare},
RatePerKm = ${this.rateperkm},
Addictional Charges = ${this.addictionalcharges},
Waiting charges = ${this.waitingcharges} `
}
distancetravelled(distance,Unit)
{let distanceinm;
    if(Unit.toLowerCase()=="km"||Unit.toLowerCase()=="kms"){
     distanceinm =distance
}
else if(Unit.toLowerCase()=='m'){
    distanceinm=distance/1000 }
    else{return 'invalid please enter m or km'}

    return this.rateperkm*distanceinm

}

waitingfare(time,unit)
{let timeinminute;
    if(unit.toLowerCase()=="hour"||unit.toLowerCase()=='hours'){
     timeinminute=time*60}
    else if(unit.toLowerCase()=="min"||unit.toLowerCase()=="mins"){
       timeinminute=time
    }

return this.waitingcharges*timeinminute

}
 totalfare(distance,Unit,time,unit){
        return this.basefare+this.distancetravelled(distance,Unit)+this.waitingfare(time,unit)+this.addictionalcharges
    }

}
 const nonAcUber= new Uber(50,14,0,0.5)
 const AcUber=new Uber(60,20,30,2)
 const luxuriousUber=new Uber(100,50,40,5)


 console.log(nonAcUber.distancetravelled(2,"km"))// 28
 console.log(nonAcUber.distancetravelled(500,"m"))// 7
 console.log(nonAcUber.waitingfare(1,"hour"))// 30
 console.log(nonAcUber.waitingfare(10,"min"))// 5
 console.log(nonAcUber.totalfare(20,"km",30,"min")) // 365
 

 console.log(AcUber.distancetravelled(5, "km")); // 100
 console.log(AcUber.distancetravelled(1000, "m")); // 20
 console.log(AcUber.waitingfare(2, "hour")); // 240
 console.log(AcUber.waitingfare(20, "min")); // 40
 console.log(AcUber.totalfare(30, "km", 45, "min")); // 780
 
 console.log(luxuriousUber.distancetravelled(10, "km")); // 500
 console.log(luxuriousUber.distancetravelled(2000, "m")); // 100
 console.log(luxuriousUber.waitingfare(2, "hour")); // 600
 console.log(luxuriousUber.waitingfare(15, "min")); // 75
 console.log(luxuriousUber.totalfare(40, "km", 60, "min")); //2440

