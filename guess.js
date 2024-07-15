
function main(){
    let max = 30;
    
    let attempt = 5;
    let result = Math.floor(Math.random() * max)

    document.getElementById('btn').addEventListener('click', () => {
        let num = document.getElementById('num').value;
        console.log(num)
       
        // let result = 10;
        let dif1 = result - num;
        let dif2 = num - result;
        console.log(result)
        if(result == num){
            console.log("gott it")
             document.getElementById('result').innerHTML = `amazing!!!.you predicted it 🎉🔥 ${num} is right <br> you take only ${attempt} great! ${result}`
        }
        // increase
        else if(result > num && dif1 <= 5 ){
            console.log("you are near to fire.you have to increase")
            document.getElementById('result').innerHTML = `your number ${num}<br> is soo near to the Result⏫ <br>😲😲`
        }
         // decrease
        else if(result < num && dif2 <= 5){
            console.log("you are near to fire. you have to decrease")
            document.getElementById('result').innerHTML = `your number ${num}<br> is soo near to the Result⏬ <br>😲😲`
        }
        else if(dif1 > 5 || dif2 >5){
            document.getElementById('result').innerHTML = `Your prediction ${num} is far away from the Number`
        }
        
    
        // attempt
        attempt--;
        document.getElementById('chances').innerHTML = `ONLY ${attempt} REMAINS`
        if(attempt === 0){
            document.getElementById("btn").disabled = true
            document.getElementById('result').innerHTML = `OOPS! 🤷‍♂️🤷‍♀️ OUT OF CHANCES`
        }
    
        // reset
         document.getElementById('reset').addEventListener('click', () => {
            document.getElementById('btn').disabled = false
            location.reload();
            console.log(result)
    })
    
    })
    
}
main();




