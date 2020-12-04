DROP DATABASE IF exists carousel;

CREATE DATABASE carousel;


create table attraction (
  attractionID int NOT NULL auto_increment,
  reviewCount int, duration int,
  trip_address varchar(200),
  trip_hours int, trip_days int,
  trip_description TEXT,
  attractionTitle varchar(100),
  images JSON,
  hours JSON,
  tours JSON,
  PRIMARY KEY (attractionID),
);


