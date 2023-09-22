const getCounter = document.querySelector('.counter')
const getCounterTitle = document.querySelector('.counter__title')
const increaseButton = document.querySelector('.counter__button--increase');
const decreaseButton = document.querySelector('.counter__button--decrease');
const resetButton = document.querySelector('.counter__reset-button');
const counterValueElement = document.querySelector('.counter__value');

resetButton.addEventListener('click', () => {
  //01 set counter value to 0
  counterValueElement.textContent = 0;

  //02 Reset background color
  getCounter.classList.remove('counter--limit')

  //03 Reset counter title
  getCounterTitle.innerHTML = 'FANCY COUNTER'

  //04 enabled increase and decrease buttons
  increaseButton.disabled = false;
  decreaseButton.disabled = false;

  //05 unfocus (blur) reset button
  resetButton.blur();
})


decreaseButton.addEventListener('click', () => {
  //01 get current value of counter 
  const currentValue = counterValueElement.textContent

  //02 convert value to number type 
  const currentValueAsNumber = +currentValue

  //03 increment by 1  
  let newValue = currentValueAsNumber - 1;

  //04 check if new value is less than 0
  if (newValue < 0) {
    newValue = 0;
  }

  //05 set counter element with new value 
  counterValueElement.textContent = newValue

  //06 unfocus (blur) reset button
  decreaseButton.blur();
})


const incrementCounter = () => {
  //01 get current value of counter 
  const currentValue = counterValueElement.textContent;

  //02 convert value to number type 
  const currentValueAsNumber = +currentValue;

  //03 increment by 1 
  let newValue = currentValueAsNumber + 1;

  //04 check if new value is greater than 5
  if (newValue > 5) {
    newValue = 5;

    //04.1 get a visual indicator
    getCounter.classList.add('counter--limit')

    //04.2 update counter Title
    getCounterTitle.innerHTML = 'Limit! Buy <b>Pro</b> for >5'

    //04.3 disable increase and decrease buttons
    increaseButton.disabled = true;
    decreaseButton.disabled = true;
  }

  //05 set counter element with new value 
  counterValueElement.textContent = newValue;

  //06 unfocus (blur) reset button
  increaseButton.blur();
}

increaseButton.addEventListener('click', incrementCounter);
document.addEventListener('keydown', incrementCounter)
