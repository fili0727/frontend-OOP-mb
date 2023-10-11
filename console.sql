-- create database
CREATE DATABASE musicDb;

-- navigate to musicDb
USE musicDb;

-- dropping all tables for updating
DROP TABLE artists, albums, tracks, tracks_artists, tracks_albums,albums_artists;


-- Create the artists table
CREATE TABLE artists (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(256) UNIQUE NOT NULL,
   career_start VARCHAR(256),
   img VARCHAR(256)

);

-- Create the albums table
CREATE TABLE albums (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(256) NOT NULL UNIQUE,
     release_date VARCHAR(256)
);



-- Create the tracks table with foreign keys to artists and albums
CREATE TABLE tracks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(256) NOT NULL UNIQUE,
    duration TIME
);

-- Create the tracks_albums linking table
CREATE TABLE tracks_albums (
    track_id INT,
    album_id INT,
    PRIMARY KEY (track_id, album_id),
    FOREIGN KEY (track_id) REFERENCES tracks(id),
    FOREIGN KEY (album_id) REFERENCES albums(id)
);

-- Create the tracks_artists linking table
CREATE TABLE tracks_artists (
    track_id INT,
    artist_id INT,
    PRIMARY KEY (track_id, artist_id),
    FOREIGN KEY (track_id) REFERENCES tracks(id),
    FOREIGN KEY (artist_id) REFERENCES artists(id)
);

CREATE TABLE albums_artists (
    album_id INT,
    artist_id INT,
    PRIMARY KEY ( album_id,artist_id),
    FOREIGN KEY (album_id) REFERENCES albums(id),
    FOREIGN KEY (artist_id) REFERENCES artists(id)
);


INSERT INTO artists (name, career_start, img)
VALUES
    ("The Beatles", "1960", "https://cdn2.picryl.com/photo/1964/12/31/televisie-optreden-van-the-beatles-in-treslong-te-hillegom-309d1d-1024.jpg"),
    ("Michael Jackson", "1964", "https://upload.wikimedia.org/wikipedia/commons/f/f0/2003_Michael_Jackson_at_The_Cable_Show_%2829358712934%29_%281%29.jpg"),
    ("Elvis Presley", "1954", "https://cdn2.picryl.com/photo/1958/06/01/elvis-presley-1958-ca3edc-1024.jpg"),
    ("Madonna", "1979", "https://upload.wikimedia.org/wikipedia/commons/1/1e/Madonna_and_Jeremy_Scott_2017_Met_Gala_%28cropped%29.png"),
    ("Bob Dylan", "1961","https://upload.wikimedia.org/wikipedia/commons/5/5d/Bob_Dylan_Gospel_Tour_1980.jpg"),
    ("Beyoncé", "1997", "https://upload.wikimedia.org/wikipedia/lt/9/93/Beyonce_Formation.jpg"),
    ("Prince", "1976", "https://media.lex.dk/media/167675/standard_compressed_Prince_at_Coachella__cropped_.jpg"),
    ("David Bowie", "1963", "https://upload.wikimedia.org/wikipedia/commons/0/0c/David_Bowie_-_TopPop_1974_03_%28cropped%29.png"),
    ("Whitney Houston", "1977", "https://live.staticflickr.com/2081/2310475988_5d0707afba_z.jpg"),
    ("Adele", "2006", "https://upload.wikimedia.org/wikipedia/commons/f/fd/ADELE_LIVE_2017_at_ADELAIDE_OVAL%2C_South_AUSTRALIA_%283%29_%28cropped%29.jpg"),
    ("Queen", "1970", "https://live.staticflickr.com/3545/3474558151_220d8ed0e2_w.jpg"),
    ("Frank Sinatra", "1935","https://cdn2.picryl.com/photo/2021/03/25/frank-sinatra-1957-studio-portrait-close-up-b5429f-1024.jpg"),
    ("Ella Fitzgerald", "1934","https://upload.wikimedia.org/wikipedia/commons/1/16/03-31-1962_18659_Ella_Fitzgerald_%284086747029%29.jpg"),
    ("Jay-Z", "1995","https://live.staticflickr.com/3040/2649487728_939f9a2cfd_b.jpg"),
    ("Bob Marley", "1962", "https://live.staticflickr.com/6210/6138054927_5bda6e0708_b.jpg"),
    ("Taylor Swift", "2006","https://live.staticflickr.com/8096/8588000453_c302127fd3_b.jpg");


-- Insert data into the albums table
INSERT INTO albums (title, release_date)
VALUES
    ("Abbey Road", "1969-09-26"),
    ("Thriller", "1982-11-30"),
    ("Elvis Presley", "1956-03-23"),
    ("Like a Virgin", "1984-11-12"),
    ("Highway 61 Revisited", "1965-08-30"),
    ("Dangerously In Love", "2003-06-22"),
    ("Purple Rain", "1984-06-25"),
    ("The Rise and Fall of Ziggy Stardust and the Spiders from Mars", "1972-06-16"),
    ("Whitney Houston", "1985-02-14"),
    ("21", "2011-01-19"),
    ("A Night at the Opera", "1975-11-21"),
    ("In the Wee Small Hours", "1955-04-25"),
    ("Ella Fitzgerald Sings the Cole Porter Song Book", "1956-03-20"),
    ("The Blueprint", "2001-09-11"),
    ("Legend", "1984-05-08"),
    ("Midnights", "2022-10-21");

-- Insert data into the tracks table
INSERT INTO tracks (title, duration)
VALUES
    ("Come Together", "4:19"),
    ("Billie Jean", "4:54"),
    ("Heartbreak Hotel", "2:12"),
    ("Like a Virgin", "3:47"),
    ("Like a Rolling Stone", "6:09"),
    ("Crazy in Love", "3:55"),
    ("Purple Rain", "8:34"),
    ("Starman", "4:18"),
    ("I Will Always Love You", "4:31"),
    ("Rolling in the Deep", "3:48"),
    ("Bohemian Rhapsody", "5:54"),
    ("In the Wee Small Hours of the Morning", "3:18"),
    ("I Get a Kick Out of You", "3:06"),
    ("Takeover", "4:27"),
    ("No Woman, No Cry", "3:57"),
    ("Anti-hero", "3:21");


-- Insert data into the linking tables tracks_albums and tracks_artists
INSERT INTO tracks_albums (track_id, album_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10),
    (11, 11),
    (12, 12),
    (13, 13),
    (14, 14),
    (15, 15),
    (16, 16);


INSERT INTO tracks_artists (track_id, artist_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10),
    (11, 11),
    (12, 12),
    (13, 13),
    (14, 14),
    (15, 15),
    (16, 16);

INSERT INTO albums_artists (album_id,artist_id )
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10),
    (11, 11),
    (12, 12),
    (13, 13),
    (14, 14),
    (15, 15),
    (16, 16);


SELECT id, name, career_start FROM artists;


SELECT tracks.*,
        artists.name AS artistName,
        artists.id AS artistId
FROM tracks
INNER JOIN tracks_artists ON tracks.id = tracks_artists.track_id
INNER JOIN artists ON tracks_artists.artist_id = artists.id;



INSERT INTO albums (title, release_date) VALUES ("Testb", "later");
INSERT INTO albums_artists VALUES (LAST_INSERT_ID(), 7);

SELECT tracks.title as trackTitle, albums.title as albumTitle, artists.name as artistTitle
FROM tracks
INNER JOIN tracks_albums ON tracks.id = tracks_albums.track_id
INNER JOIN albums ON tracks_albums.album_id = albums.id
INNER JOIN tracks_artists ON tracks.id = tracks_artists.track_id
INNER JOIN artists ON tracks_artists.artist_id = artists.id
WHERE tracks.id = 4;



INSERT INTO tracks_artists (track_id, artist_id)
VALUES (5, 7)




