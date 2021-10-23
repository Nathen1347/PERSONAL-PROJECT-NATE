UPDATE income
SET income_amount = $2
WHERE id = $1;

SELECT * FROM income
WHERE id = $1;