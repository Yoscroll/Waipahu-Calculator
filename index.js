var answer;
function cal(op,num1,num2){
  if (op=="add"){
      answer=num1+num2;
  }
  else if(op=="subtract"){
    answer=num1-num2;
  }
  else if(op=="divide"){
    answer=num1/num2;
  }
  else if(op=="multiply"){
    answer=num1*num2;
  }
  console.log(answer);
}

cal("add",1,2);