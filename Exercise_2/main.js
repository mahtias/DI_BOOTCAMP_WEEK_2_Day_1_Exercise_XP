const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
//1 Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.


let myWatchedSeriesLength = myWatchedSeries 
console.log(myWatchedSeriesLength.length)


// 2 Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched

let myWatchedSeriesSentence ="my poorwer of the week"

// 3 Console.log a sentence using both of the variables created above
console.log(myWatchedSeriesSentence)




// part 2

// 1  Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2]="friends"
console.log(myWatchedSeries)

 // 2 Add, at the end of the array, the name of another series you watched.

 myWatchedSeries.push("my poower of the week");

 // 3 Add, at the beginning of the array, the name of your favorite series.

 myWatchedSeries.unshift("my poower of the week")

 // 4 - Delete the series “black mirror”.

 myWatchedSeries.shift();

 // 5 Console.log the third letter of the series “money heist”.

 console.log(myWatchedSeries[2])

 // 6 Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

 console.log(myWatchedSeries)




