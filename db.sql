create table dataarchives (id int primary key auto_increment,subject varchar(200),category_id smallint,owner_id smallint,releasedate date,expiredate date,description text,createdate timestamp default current_timestamp());

create user digitalisasi@localhost identified by "digitalisasi";
grant all privileges on digitalisasi.* to digitalisasi@localhost;