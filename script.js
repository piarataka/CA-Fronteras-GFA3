function randomizer(){
    var num1, num2, num3;
    num1 = Math.ceil(Math.random() *20);
    num2 = Math.ceil(Math.random()*20);
    num3 = Math.ceil(Math.random() *20);
    return{
        number1: num1,
        number2: num2,
        number3: num3
    }
}

function main(){

    var num1, num2, num3,mins;
    const crucialnames= [
        "Axel",
        "Boris",
        "Carlos",
        "Damien",
        "Edith",
        "Fiona",
        "Gabriel",
        "Harith",
        "Ivy",
        "Jawhead",
        "Ḱ̶̖i̵̖͊ḃ̴̻ś̷̱î̶͓l̴͉̑o̴̦̔g̵̪̈",
        "Lionne",
        "Masha",
        "Naomi",
        "O'rant",
        "Pork",
        "Quinoa",
        "Rock",
        "Saran",
        "Tom",
        "Uranus",
        "Val",
        "Wisconsin",
        "Xavier",
        "Yu Zhong",
        "Zhask"

    ];

    num1 = randomizer().number1;
    num2 = randomizer().number2;
    num3 = randomizer().number3;
    mins = num2*num3;
    edit(num1, num2, num3, mins, crucialnames[num1-1], highestNum(num1,num2,num3)); 
}


function edit(Physical, Mental, Intellectual, multiply, name, largestNum){
    document.getElementById("phys").innerHTML+=Physical;
    document.getElementById("mntl").innerHTML+=Mental;
    document.getElementById("intl").innerHTML+=Intellectual;
    document.getElementById("mins").innerHTML+=+multiply+" minutes or "+Math.floor(multiply / 60)+"hrs and "+multiply%60+"mins to prepare.";
    document.getElementById("name").innerHTML+=name +" by the letter "+name.charAt(0);
    document.getElementById("SStat").innerHTML+= largestNum;
}

function highestNum(num1, num2, num3){
    var largestNum = Math.max(num1, num2, num3);
    var stringShow;
    if(num1==num2&& largestNum == num1){
        stringShow = "A tie between Physical("+num1+") and Mental("+num2+")";
    }else if(num1 == num3 &&largestNum == num1){
        stringShow = "A tie between Physical("+num1+") and Intellectual("+num3+")";
    }else if(num2 == num3 && largestNum == num2){
        stringShow = "A tie between Mental("+num2+") and Intellectual("+num3+")";
    }else if(largestNum == num2){
        stringShow = "Mental("+largestNum+")";
    }else if(largestNum == num3){
        stringShow = "Intellectual("+largestNum+")";
    }else if(largestNum == num1){
        stringShow = "Physical("+largestNum+")";
    }
    return stringShow;
}
