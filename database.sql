CREATE DATABASE todo_db;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    registration_date VARCHAR(255) NOT NULL
);

CREATE TABLE projects( 
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    start_date VARCHAR(255),
    end_date VARCHAR(255),
    description VARCHAR(255),
    is_important BOOLEAN,
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE tasks(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        project_id INTEGER REFERENCES projects(id)
    );