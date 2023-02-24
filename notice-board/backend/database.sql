create database practice;

create table practice.board (
no int(5) not null primary key auto_increment,
title varchar(20) not null,
detail text(3000) not null,
nickname varchar(20) not null,
password varchar(20)
);