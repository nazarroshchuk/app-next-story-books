export function getPaginationList(selectedPage, numberOfPages) {

    if(numberOfPages < 8) {
        return [...Array.from({length: numberOfPages}, (_, i) => i + 1)];
    }

    if (selectedPage < 5) {
        return [...Array.from({length: 5}, (_, i) => i + 1), '...', numberOfPages];
    }

    if (selectedPage >= 5 && selectedPage < numberOfPages - 3) {
        return [1, '...', selectedPage - 1, selectedPage, selectedPage + 1, '...', numberOfPages];
    }


    return [1, '...', ...Array.from({length: 5 }, (_, i) => i + (numberOfPages - 4 ))];

}