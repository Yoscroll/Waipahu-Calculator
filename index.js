var answer;
function cal(op,num1,num2){
  if (op=="add"||"addition"||"plus"){
      answer=num1+num2;
  }
  else if(op=="subtract"||"subtraction"||"minus"){
    answer=num1-num2;
  }
  else if(op=="divide"||"division"){
    answer=num1/num2;
  }
  else if(op=="multiply"||"multiplication"||"times"){
    answer=num1*num2;
  }
  console.log(answer);
}

cal("add",1,2);