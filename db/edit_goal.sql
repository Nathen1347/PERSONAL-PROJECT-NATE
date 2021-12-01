UPDATE goals
SET amount_now = $2
WHERE id = $1;

SELECT * FROM goals
WHERE id = $1;