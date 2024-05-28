-- countries.sql
CREATE TABLE countries (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    population INTEGER,
    area INTEGER,
    count INTEGER -- Number of entries relating to this country
);

-- Insert some sample data
INSERT INTO countries (name, population, area, count) VALUES ('France', 67000000, 551695, 10);
INSERT INTO countries (name, population, area, count) VALUES ('Germany', 83000000, 357022, 20);
