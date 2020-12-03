DROP DATABASE IF exists carousel;

CREATE DATABASE carousel;

use carousel;

CREATE TABLE attraction (attractionID int NOT NULL auto_increment, reviewCount int, duration int, trip_address varchar(200), trip_hours int, trip_days int, trip_description TEXT, attractionTitle varchar(100), PRIMARY KEY (attractionID));

CREATE TABLE images (imageID int NOT NULL auto_increment, attractionID int,  urlLink varchar(300), PRIMARY KEY (imageID), FOREIGN KEY(attractionID) REFERENCES attraction(attractionID));

create TABLE reviews (reviewID int not null auto_increment, attractionID int, travelerRating int, PRIMARY KEY (reviewID), FOREIGN KEY (attractionID) REFERENCES attraction(attractionID));

create TABLE hours (hoursID int not null auto_increment, attractionID int, hours JSON, PRIMARY KEY (hoursID), FOREIGN KEY (attractionID) REFERENCES attraction(attractionID));

create TABLE tours (toursID int not null auto_increment, attractionID int, tours JSON, PRIMARY KEY (toursID), FOREIGN KEY (attractionID) REFERENCES attraction(attractionID));

create TABLE improve (improveID int not null auto_increment, attractionID int, improvement JSON, PRIMARY KEY (improveID), FOREIGN KEY (attractionID) REFERENCES attraction(attractionID));


