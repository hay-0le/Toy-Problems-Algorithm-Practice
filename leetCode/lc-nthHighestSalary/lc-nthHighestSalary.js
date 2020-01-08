CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
      SELECT Salary FROM (SELECT Salary FROM Employee ORDER BY Salary DESC LIMIT N) AS topEmployees ORDER BY Salary ASC LIMIT 1

      
  );
END