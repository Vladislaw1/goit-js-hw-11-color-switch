const refs = {
    start: document.querySelector("[data-action=start]"),
    stop: document.querySelector("[data-action=stop]"),
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

class colotPicer {
  constructor(arrColor) {
    this.arrColor = arrColor;
  }
  
  start() {
    intervalId = setInterval(this.chanheColor,1000);
    refs.start.disabled = true; 
  }
  stop() {
    clearInterval(intervalId);
    refs.start.disabled = false;
  }
  chanheColor() {
    const randomIndex = randomIntegerFromInterval(0,(colors.length - 1))
    document.body.style.backgroundColor = colors[randomIndex];
  }
  
}
          
  const colot_Picer = new colotPicer(colors);

  refs.start.addEventListener('click', () => {
    colot_Picer.start(randomIntegerFromInterval);
  });
  
  refs.stop.addEventListener('click', () => {
    colot_Picer.stop();
  });
        
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
  
        // function onStartChangeColor() {
          //      intervalId = setInterval(chanheColor,1000);
          //       console.dir(intervalId)
          //       refs.start.disabled = true;
          //   }
          
          //   function onStopChangeColor() {
            //       clearInterval(intervalId);
            //       refs.start.disabled = false;
            
            //     }
            
            
            //     function chanheColor() {
              //           const randomIndex = randomIntegerFromInterval(0,colors.length)
              //     document.body.style.backgroundColor = colors[randomIndex];
              // }