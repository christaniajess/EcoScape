const words = ["sustainable restaurants here!", "yummy restaurants here!"];
const el = document.querySelector("#typewriter");

const sleepTime = 100;
let currWordIndex = 0;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const effect = async () => {
  while (true) {
    currWord = words[currWordIndex];

    for (let i = 0; i < currWord.length; i++) {
      el.innerText = currWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(500);

    if (currWordIndex >= words.length - 1) {
      currWordIndex = 0;
      await sleep(1000);
    } else currWordIndex++;
  }
};

effect();

// for the tabs
areas = ['All', 'Central','East','South','North','West']
var numtab = 1
string = ''
tabs = document.getElementById('tabs')
for(area of areas)
{
    if(numtab==1)
    {
        string+=
        `<input id='tab${numtab}' type='radio' name='tabs' checked>
        <label for='tab${numtab}'>${area}</label>
        `
        numtab++
    }
    else
    {
        string +=
        `<input id='tab${numtab}' type='radio' name='tabs'>
        <label for='tab${numtab}'>${area}</label>`
        numtab++
    }
}
tabs.innerHTML = string





