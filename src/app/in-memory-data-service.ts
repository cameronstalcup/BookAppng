import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const books = [
            { id: 1, title: 'Pride and Prejudice' },
            { id: 2, title: 'Anna Karenina' },
            { id: 3, title: 'Crime and Punishment' },
            { id: 4, title: 'The Great Gatsby' },
            { id: 5, title: '1984' },
            { id: 6, title: 'Adventures of Huckleberry Finn' },
            { id: 7, title: 'The Brothers Karamazov' },
            { id: 8, title: 'Middlemarch' },
            { id: 9, title: 'One Hundred Years of Solitude' },
            { id: 10, title: 'The Sound and the Fury' },
            { id: 11, title: 'The Catcher in the Rye' },
            { id: 12, title: 'The Metamorphosis' },
            { id: 13, title: 'To the Lighthouse' },
            { id: 14, title: 'On the Road' },
            { id: 15, title: 'Gulivers Travels' },
            { id: 16, title: 'The Portrait of a Lady' },
            { id: 17, title: 'The Illiad' },
            { id: 18, title: 'The Odyssey' },
            { id: 19, title: 'Catch-22' },
            { id: 20, title: 'Emma' },
            { id: 21, title: 'Brave New World' },
            { id: 22, title: 'To Kill a Mockingbird' },
            { id: 23, title: 'Jane Eyre' },
            { id: 24, title: 'Wuthering Heights' },
            { id: 25, title: 'Lord of the Flies' },
            { id: 26, title: 'The Aeneid' },
            { id: 27, title: 'The Call of the Wild' },
            { id: 28, title: 'Frankenstein' },
            { id: 29, title: 'The Sun Also Rises' },
            { id: 30, title: 'The Scarlet Letter' },
            { id: 31, title: 'A Farewell to Arms' },
            { id: 32, title: 'Great Expectations' },
            { id: 33, title: 'Candide' },
            { id: 34, title: 'The Picture of Dorian Gray' },
            { id: 35, title: 'Moby-Dick' },
            { id: 36, title: 'In Search of Lost Time' },
            { id: 37, title: 'Orlando' },
            { id: 38, title: 'The Age of Innocence' },
            { id: 39, title: 'Sense and Sensibility' },
            { id: 40, title: 'Slaughterhouse-Five' },
            { id: 41, title: 'Lolita' },
            { id: 42, title: 'Rebecca' },
            { id: 43, title: 'The Importance of Being Earnest' },
            { id: 44, title: 'East of Eden' },
            { id: 45, title: 'Madame Bovary' },
            { id: 46, title: 'A Clockwork Orange' },
            { id: 47, title: 'Heart of Darkness' },
            { id: 48, title: 'The Bell Jar' },
            { id: 49, title: 'The Crying of Lot 49' }       
        ];
        return {books};
    }
}