export const getEstimate = async () => {
  const responce = await fetch(
    "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/estimate.json"
  )
    if (responce.status === 200){
        const data:EstimateType = await responce.json()
        return data
    }
    throw new Error("Some error")
  };

export type EstimateType = {
  source: string;
  sum: number;
  date: string;
};