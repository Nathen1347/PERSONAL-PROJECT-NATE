UPDATE goals
SET achieved_goal = $2
WHERE id = $1;

SELECT * FROM goals
WHERE id = $1;