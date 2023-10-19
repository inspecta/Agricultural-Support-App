const MAX_LOAN_AMOUNT = 500000
const MAX_POSSIBLE_RATIO = 1.0 // Adjust this based on your criteria

function calculateCreditScore(
  totalDeposits: number,
  totalWithdrawals: number,
  totalTransactionAmount: number
): number {
  // Calculate deposit-to-withdrawal ratio
  if (totalWithdrawals === 0) {
    return 0 // You can choose to set a minimum score for users with no withdrawals
  }

  // Calculate deposit-to-withdrawal ratio
  const depositWithdrawalRatio = totalDeposits / totalWithdrawals

  // Calculate transaction score
  const transactionScore = (totalTransactionAmount / MAX_LOAN_AMOUNT) * 10

  // Calculate deposit-to-withdrawal score
  const depositWithdrawalScore =
    (depositWithdrawalRatio / MAX_POSSIBLE_RATIO) * 10

  // Calculate overall credit score as the average of transaction and deposit-to-withdrawal scores
  const overallCreditScore = (transactionScore + depositWithdrawalScore) / 2

  return overallCreditScore
}

export default calculateCreditScore
