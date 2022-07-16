async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const resetButton = document.querySelector('#reset');
    const url = "http://localhost:9001/counter";
    const counterRes = await fetch(url);
    const { value } = await counterRes.json()
    countValue = value
    console.log ({countValue});

    // let countValue = 0;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    function reset(){
       main();
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    resetButton.addEventListener('click', reset);
    countContainer.textContent = countValue;
}


console.log(new Date().getTime());
main()
console.log(new Date().getTime());

// The main function packages everything in its' function and then runs everytihing. It Encapsulates all the fiuunctioins in one function and then calls everything