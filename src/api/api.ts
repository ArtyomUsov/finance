export const getEstimate = async () => {
  const responce = await fetch(
    "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/estimate.json"
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
    return correctData;
  }
  throw new Error("Some error");
};

export type EstimateType = {
  id: string;
  source: string | null;
  sum: number | null;
  date: string | null;
};
