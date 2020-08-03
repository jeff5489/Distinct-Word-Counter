const puppeteer = require('puppeteer');    

(async() => {    
    console.log("first log reached")
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();   
        await page.goto('file:///C://Users/je/Documents/Puppeteer/Code/test.html');  
        const pageContent = await page.$$eval('p', el => el.map(el => el.innerHTML))
        // console.log('pageContent: ' + pageContent)
        const resultSplit = pageContent.toString().split(/[ .,]+/)
        await console.log(numberWords(resultSplit))
        // console.log('resultSplit: ' + resultSplit)
        await page.close();
        await browser.close();    
    } catch(e) {
        console.log(e)
    }
})();

async function numberWords(stringArray){
    console.log("function numberWords reached")
    countWords = [];
    stringArray.forEach(element => {
        lowerCase = element.toLowerCase()
        if(!countWords.some(el => el.word === lowerCase)){
            tempObject = {word: lowerCase, count: 1}
            countWords.push(tempObject)
        }else if(countWords.some(el => el.word === lowerCase)){
            index = countWords.findIndex(i => i.word === lowerCase);
            countWords[index].count++;
        }
    });
    console.log('Number of distinct words: ' + countWords.length)
    return countWords
}

// Navigate to doc - DONE
// Select all p tags and store in array - DONE
// Create countOfWords array - DONE
// for each word in first array, add a object to countOfWords array with word and count variable of 1 - DONE
    // if word already exists, just add one to count variable in object of existing word - DONE
// console.log countOfWords - DONE
// log how many indivdual words - DONE
// create document with one words and its count per line