CREATE DATABASE pern_auth;

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

-- insert fake user

INSERT INTO users (user_name, user_email, user_password) VALUES ('andrew', 'andrew123@gmail.com', 'andrew123');