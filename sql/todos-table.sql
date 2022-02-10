create table todos (
  id SERIAL PRIMARY KEY,
  user_id SERIAL REFERENCES users (id),
  task VARCHAR(255),
  complete BOOLEAN DEFAULT FALSE
);
insert into todos (task, user_id) values ('test', 1);
insert into todos (task, user_id) values ('test1', 1);
insert into todos (task, user_id) values ('test2', 2);
insert into todos (task, user_id) values ('test3', 3);
