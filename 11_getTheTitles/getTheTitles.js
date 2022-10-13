
const getTheTitles = function(Olist) {
    let titles = [];
    for (let i = 0; i < Olist.length; i++){
        titles.push(Olist[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;


/*
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]




function getTheTitles(books){
    let titles = [];
    for (let i = 0; i < books.length; i++){
        titles.push(books[i].title);
    }
    console.log(titles);

}

getTheTitles(books);
*/