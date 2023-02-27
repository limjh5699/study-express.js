create database practice;

create table practice.board (
no int(5) not null primary key auto_increment,
title varchar(20) not null,
detail text(3000) not null,
nickname varchar(20) not null,
password varchar(20)
);

alter table board convert to charset UTF8;

insert into practice.board values (1, '테스트', '테스트2', '테스트계정', '1234');