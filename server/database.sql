  
CREATE DATABASE perntodo;

\c perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    active_flag BOOLEAN NOT NULL DEFAULT true,
    created_date timestamp NOT NULL DEFAULT CURRENT_DATE
);
