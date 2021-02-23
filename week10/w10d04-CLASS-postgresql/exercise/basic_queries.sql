-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
SELECT * FROM authors;

-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;

-- Get all authors born in the 20th centruy or later
SELECT * FROM authors WHERE birth_year >= 1900;

-- Get all authors born in the USA
SELECT * FROM authors WHERE nationality = 'United States of America';

-- Get all books published on 1985
SELECT * FROM books WHERE publication_date = 1985;

-- Get all books published before 1989
SELECT * FROM books WHERE publication_date < 1989;

-- Get just the title of all books.
SELECT title from books;

-- Get just the year that 'A Dance with Dragons' was published
  -- Cry when you realize how long it's been
SELECT publication_date FROM books WHERE title='A Dance with Dragons';

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * FROM books where title ILIKE '%the%';

-- Add yourself as an author
INSERT INTO authors (name, nationality, birth_year) VALUES ('Hou', 'USA', 1987);
-- Note we omit the ID because the authors table has a SERIAL PRIMARY KEY constraint
-- so the DB adds a new ID for us automatically.

-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books (title, publication_date, author_id) VALUES ('Programmin Piece of Cake', 2019, 12);
INSERT INTO books (title, publication_date, author_id) VALUES ('Smoothies for Programmers', 2019, 12);

-- Update one of your books to have a new title
UPDATE books SET title = 'Basketball for Programmers' WHERE title ='Smoothies for Programmers';

-- Delete your books
DELETE FROM books where title = 'Basketball for Programmers' OR title = 'Programmin Piece of Cake';

-- Delete your author entry
DELETE FROM authors where name = 'Hou';
-- OR if we found the ID earlier, use that to find and delete instead.
DELETE FROM authors where ID = 10;

