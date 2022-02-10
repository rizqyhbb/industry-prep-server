create table users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(50) UNIQUE,
  password VARCHAR(225)
);
insert into users (username, email, password) values ('John', 'john@mail.com', '$2b$10$q3O8fIr7tGgvxPK334k3VuqR8hqNhFtgVzvAgXGVm259sxU0DkITS');
insert into users (username, email, password) values ('Doe', 'doe@mail.com', '$2b$10$Y9fXlb9iVFObUSSlp26WXugGAwCL1bmcrs3o/P/ECqUpAxluc3YrW');
insert into users (username, email, password) values ('Lorem', 'lorem@mail.com', '$2b$10$I3D/WaMIHvrBPBWktZdvDuOgjAt5sIHFHatYonbhVA7HtpW77YCjy');
insert into users (username, email, password) values ('Ipsum', 'ipsum@mail.com', '$2b$10$IlT63SzfdF63pNPFaD1OJe7n4IreFSxNQSmc37rimjRHVHyc1VL4G');
insert into users (username, email, password) values ('Dolor', 'dolor@mail.com', '$2b$10$R8RmIHLkTrj.eX3OFXftbeFdSqATB1wlEnnbtAKhU24B23N6jt9M.');
