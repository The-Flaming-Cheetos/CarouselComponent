
create table attraction (
  attractionID SERIAL,
  reviews JSON,
  duration int,
  trip_address varchar(200),
  trip_hours int,
  trip_days int,
  trip_description TEXT,
  attractionTitle varchar(100),
  images text[],
  hours JSON,
  PRIMARY KEY (attractionID)
);


