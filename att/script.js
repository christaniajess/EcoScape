const words = ['sustainable attractions','eco-friendly attractions'];
const el = document.querySelector('#typewriter')
const sleep = (time) => 
{
    return new Promise((resolve) => setTimeout(resolve,time));
        
};

const effect = async () => 
{
    while(true)
    {
        currWord = words[currWordIndex];
        for(let i=0; i<currWord.length; i++)
        {
            el.innerText = currWord.substring(0,i+1);
            await sleep(sleepTime);
        }
        await sleep (500);
        if(currWordIndex >=words.length-1)
        {
            currWordIndex=0;
            await sleep(1000);
        }
        else
        {
            currWordIndex++
        }
    }
};
effect()
