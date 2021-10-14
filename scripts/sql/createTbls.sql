CREATE TABLE IF NOT EXISTS public."tblUsers"
(
    id serial NOT NULL,
    firstname text NOT NULL,
    lastname text NOT NULL,
    email character varying(256) NOT NULL,
    password character varying(256) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."tblMovies"
(
    id serial NOT NULL,
    user_id serial NOT NULL,
    title text NOT NULL,
    subtitle text,
    description text,
    art bytea[],
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES public."tblUsers" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);