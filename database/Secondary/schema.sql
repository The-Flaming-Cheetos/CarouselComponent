DROP KEYSPACE IF EXISTS test;

CREATE KEYSPACE test WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};

use test;

create table attraction (
  id int,
  reviews TEXT,
  duration int,
  trip_address TEXT,
  trip_hours int,
  trip_days int,
  trip_description TEXT,
  attractionTitle TEXT,
  images TEXT,
  hours TEXT,
  PRIMARY KEY (trip_hours, id)
);