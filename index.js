class People = {
  constractor(name,age){
    this.name = name
  }
  walk(){
    console.log("walk)
     }
  talk(){
    console.log("talk")
    }
    dance(){
      console.log("dance")
    }
    sleep(){
      console.log("sleep")
    }
}

const student = new People("Abbas");
student.walk();
student.talk();
