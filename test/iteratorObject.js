const myFavouriteAuthors = {
    allAuthors: {
        fiction: [
            'Agatha Christie',
            'J. K. Rowling',
            'Dr. Seuss'
        ],
        scienceFiction: [
            'Neal Stephenson',
            'Arthur Clarke',
            'Isaac Asimov',
            'Robert Heinlein'
        ],
        fantasy: [
            'J. R. R. Tolkien',
            'J. K. Rowling',
            'Terry Pratchett'
        ],
    }
}
const iterator = {
    [Symbol.iterator]() {

        const genres = Object.values(this.allAuthors)
        let currentAuthorIndex = 0;
        let currentGenresIndex = 0;
        return {
            next() {
                const authors = genres[currentGenresIndex];
                if (currentAuthorIndex == authors.length) {
                    currentGenresIndex++;
                    currentAuthorIndex = 0;
                }
                if (currentGenresIndex == genres.length) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
                return {
                    value: genres[currentGenresIndex][currentAuthorIndex++],
                    done: false
                }
            }
        }

    }
}

Object.assign(myFavouriteAuthors, iterator)


console.log(...myFavouriteAuthors);