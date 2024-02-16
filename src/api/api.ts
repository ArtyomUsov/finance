export const getIncomeEstimate = async () => {
  const responce = await fetch(
    "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/income.json"
  );
  if (responce.status === 200) {
    const data = await responce.json();
    const correctData: EstimateType[] = [];

    for (const key in data) {
      correctData.push({
        id: key,
        ...data[key],
      });
    }
    return correctData.reverse();
  }
  throw new Error("Some error");
};

export const getExpensesEstimate = async () => {
  const responce = await fetch(
    "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/expenses.json"
  );
  if (responce.status === 200) {
    const data = await responce.json();
    const correctData: EstimateType[] = [];

    for (const key in data) {
      correctData.push({
        id: key,
        ...data[key],
      });
    }
    return correctData.reverse();
  }
  throw new Error("Some error");
};

export type EstimateType = {
  id: string;
  source: string | null;
  sum: number;
  date: string | null;
};

