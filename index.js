class People = {
  constractor(name){
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
student.sleep();

//test

