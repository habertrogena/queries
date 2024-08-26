

-- Function to get all loans
CREATE FUNCTION get_all_loans()
RETURNS TABLE (
    LoanID INT,
    LoanAmount DECIMAL(10, 2)
)
BEGIN
    RETURN SELECT LoanID, LoanAmount FROM Loans;
END;

-- Function to get total loan amount
CREATE FUNCTION get_total_loan_amount()
RETURNS DECIMAL(10, 2)
BEGIN
    DECLARE total_amount DECIMAL(10, 2);
    SELECT SUM(LoanAmount) INTO total_amount FROM Loans;
    RETURN total_amount;
END;
