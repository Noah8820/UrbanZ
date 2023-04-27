INSERT INTO clothing (id, price, name, image, number) VALUES (1, 50, 'Pusher Bag', 'image', 3);

INSERT INTO users (username, password) VALUES ('noah@mail.com', '1234');
INSERT INTO users (username, password) VALUES ('Ilija', '1234');
INSERT INTO users (username, password) VALUES ('Schneebeli', '1234');

INSERT INTO role (role_name) VALUES ('ADMIN');
INSERT INTO role (role_name) VALUES ('USER');

INSERT INTO authority (authority_name) VALUES ('CREATE');
INSERT INTO authority (authority_name) VALUES ('READ');
INSERT INTO authority (authority_name) VALUES ('UPDATE');
INSERT INTO authority (authority_name) VALUES ('DELETE');

INSERT INTO user_role VALUES (1, 1);
INSERT INTO user_role VALUES (2, 2);
INSERT INTO user_role VALUES (3, 2);

INSERT INTO role_authority VALUES (1, 1);
INSERT INTO role_authority VALUES (1, 2);
INSERT INTO role_authority VALUES (1, 3);
INSERT INTO role_authority VALUES (1, 4);
INSERT INTO role_authority VALUES (2, 1);