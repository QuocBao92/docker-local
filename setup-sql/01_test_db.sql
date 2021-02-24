\c test-kafka

CREATE TABLE 3si
(
	id integer NOT NULL   DEFAULT NEXTVAL(('"actual_order_quantities_id_seq"'::text)::regclass),
	3si_id integer NOT NULL,
  name text NOT NULL,
	age text NULL,
	description text NULL
)
;