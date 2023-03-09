create database practice;

use practice;

create table practice.jwt (
  id int(5) not null primary key auto_increment,
  email varchar(50),
  password varchar(50)
);

alter table practice.jwt convert to charset UTF8;

insert into practice.jwt (email, password) values ('abc1234@test.com', "1234"), ('bcd1234@test.com', '1234');