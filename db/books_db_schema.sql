CREATE TABLE book (
    book_id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    year INTEGER NOT NULL,
    pages INTEGER NOT NULL,
    author_id INTEGER NOT NULL,
    FOREIGN KEY (author_id) REFERENCES author (author_id)
);

CREATE TABLE author (
    author_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE genre (
    genre_id INTEGER PRIMARY KEY,
    genre_name TEXT NOT NULL
);

-- junction table connecting book with genre
CREATE TABLE book_genre (
    fk_book_id INTEGER NOT NULL,
    fk_genre_id INTEGER NOT NULL,
    FOREIGN KEY (fk_book_id) REFERENCES book (book_id),
    FOREIGN KEY (fk_genre_id) REFERENCES genre (genre_id)
);
