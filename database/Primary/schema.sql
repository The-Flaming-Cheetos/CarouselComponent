create table attraction (
  attractionID SERIAL,
  reviews TEXT,
  duration int,
  trip_address TEXT,
  trip_hours int,
  trip_days int,
  trip_description TEXT,
  attractionTitle TEXT,
  images text[],
  hours TEXT,
  PRIMARY KEY (attractionID)
);


